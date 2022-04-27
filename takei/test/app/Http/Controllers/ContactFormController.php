<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ContactForm;
use Illuminate\Support\Facades\DB;
use App\Services\CheckFormData;
use App\Services\SearchQuery;
use App\Http\Requests\StoreContactForm;



class ContactFormController extends Controller
{
    public function __construct()
    {
        $this->contact = new ContactForm;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->input('search');

        // 検索フォーム
        $query = DB::table('contact_forms');

        $query = SearchQuery::processQuery($search, $query);
        $query->select('id', 'your_name', 'title', 'created_at');
        $query->orderBy('created_at', 'desc');
        $contacts = $query->paginate(20);

        return view('contact.index', compact('contacts'));
    }

    public function getContatsData()
    {
        // 検索フォーム
        $contacts = DB::table('contact_forms')
        ->select('id', 'your_name', 'title', 'created_at')
        ->orderBy('created_at', 'desc')
        ->get();

        // return view('contact.index', compact('contacts'));
        return response()->json($contacts);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('contact.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreContactForm $request)
    {
        $this->contact->insertContact($request->all());
        return redirect('contact/index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $contact = ContactForm::find($id);

        $gender = CheckFormData::checkGender($contact);
        $age = CheckFormData::checkAge($contact);

        return view('contact.show', compact('contact', 'gender', 'age'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $contact = ContactForm::find($id);

        return view('contact.edit', compact('contact'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $contact = ContactForm::find($id);
        $contact->updateContact($request->all());

        return redirect('contact/index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contact = ContactForm::find($id);
        $contact->delete();

        return redirect('contact/index');
    }
}
