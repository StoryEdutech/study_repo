<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ChildUser;
use Illuminate\Support\Facades\Session;

class SelectChildController extends Controller
{
    public function select($id,Request $request){
      $child=ChildUser::find($id);
      // if($request->user()->cannot('use',$child)){
      //   return redirect('/child_select');
      // }else
      if($request->user()->childs()->count()==0){
        return redirect('/child_select/create');
      }else{
        session(['child_id'=>$id]);
        return redirect($request->session()->get('url.before_child_select'));
      }
    }
    public function index(Request $request){
      $childs=$request->user()->childs();
      if($childs->count()==0){
        return redirect('/child_select/create');
      }
      return view('auth.child.select',["childs"=>$childs->get()]);
    }
    public function store(Request $request){
      $child=new ChildUser;
      $child->name=$request->name;
      $child->grade=$request->grade;
      $child->account_id=$request->user()->account_id;
      $child->save();
      session(['child_id'=>$request->child_id]);
      return redirect()->back();

    }
    public function add_new(Request $request){
      $childs=$request->user()->childs()->get()->toArray();
      $cannot_add_grades=array_map(function($child){return $child['grade'];},$childs);
      $can_add_grade=array_diff(range(6,1),$cannot_add_grades);
      return view('auth.child.add',["can_add_grade"=>$can_add_grade]);
    }
}
