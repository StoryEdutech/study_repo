<?php
namespace App\Http\Traits;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

trait CrudControllerTrait {

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function init_settings($reinit=false){
    if($this->_settings_already_init??$reinit){return;}
    $this->_model=static::$model??"\App\Models\\".str_replace("_","",ucwords(static::$resource,"_"));
    $this->_view_folder=static::$view_folder??static::$resource;
    $this->_is_api=static::$is_api??false;
    $this->_resource_route_prefix=static::$resource_route_prefix??static::$resource;
    $this->init_resource_defaults();
    $this->_settings_already_init=true;
  }
  public function init_resource_defaults(){
    $this->_defaults=[];
  }
  public function handle_index_data($return){return $return;}


  public function init_resource_by_id($id){
    $this->init_settings();
    $model=$this->_model;
    return $model::find($id);
  }

  public function paginate($paginate){
    $this->paginate=$paginate;return $this;
  }
  public function index($closures=false)
  {
    $this->init_settings();
    $resource_collection_builder=$this->_model;
    if($closures){
      foreach ($closures as $closure) {
        $resource_collection_builder=$closure($resource_collection_builder);
      }
    }else{
      $resource_collection_builder=$resource_collection_builder::query();
    }
    if($this->paginate??false){
      $resource_collection=$resource_collection_builder->paginate($this->paginate);
    }else{
      $resource_collection=$resource_collection_builder->get();
    }
    $return=[
      static::$resource."_collection"=>$resource_collection
    ];
    $return=$this->handle_index_data($return);

    return $this->_is_api?response()->json($return):view($this->_view_folder.'.list',$return);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
      //
      $this->init_settings();
      return $this->_is_api?response()->json(["fb"=>"not_supported"]):view($this->_view_folder.'.add_update',[]);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $this->init_settings();
    return $this->upsert($request,false);
  }

  /**
   * Display the specified resource.
   *
   * @param  id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    $resource=$this->init_resource_by_id($id);
    $return=[
      static::$resource=>$resource
    ];
    return $this->_is_api?response()->json($return):view($this->_view_folder.'.show',$return);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    $resource=$this->init_resource_by_id($id);
    $return=[
      static::$resource=>$resource
    ];
    return $this->_is_api?response()->json(["fb"=>"not_supported"]):view($this->_view_folder.'.add_update',$return);
  }


  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request,$resource)
  {
      return $this->upsert($request,$resource);
  }

  public function upsert(Request $request,$id=false)
  {
    $this->init_settings();
    $is_new=!$id;
    $model=$this->_model;
    if($is_new){
      $resource=$model::create($request->all());
    }else{
      $resource=$model::find($id);
      $resource->update($request->all());
    }
    foreach ($this->_defaults as $key => $value) {
      if(!$resource->$key){
        $resource->$key=$value;
      }
    }
    $resource->save();

    session()->flash('edit_fb',$is_new?"追加しました":"編集しました");
    return redirect("{$this->_resource_route_prefix}/{$resource->id}/edit");

  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  $id
   * @return \Illuminate\Http\Response
   */
   // WARNING: soft deleteはいいかも、、、 https://laravel.com/docs/8.x/eloquent#soft-deleting
  public function destroy($id)
  {
      $resource=$this->init_resource_by_id($id);
      if(!empty($resource)){
        $resource->delete();
        session()->flash('delete_fb',"削除しました");
      }
      return redirect($this->_resource_route_prefix);
  }

  public function confirm_delete($id){
    $resource=$this->init_resource_by_id($id);
    if(!empty($resource)){
      $return=[
        static::$resource=>$resource
      ];
    }else{
      $return=["already_deleted"=>true];
    }
    return $this->_is_api?response()->json($return):view($this->_view_folder.'.confirm_delete',$return);
  }


}
