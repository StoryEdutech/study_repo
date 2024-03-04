import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

function ContactList(props){
    const [contacts, setContacts] = useState([]);
    console.log('処理に入りました');
    useEffect(() => {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.post(window.api_path_base+'/contact/getContatsData', {}, (res) => {
        })
        .done( (res) => {
            // console.log(res);
            console.log('resを出力します');
            console.log(res);
            setContacts(res);
            // get_my_ranking_data(res);
            // setLoading(false);
        })
        .fail( () => {
            // setLoading(false);
        });
    }, []);

  return (
    <div>

                    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">id</th>
                            <th scope="col">氏名</th>
                            <th scope="col">件名</th>
                            <th scope="col">登録日時</th>
                            <th scope="col">詳細</th>


                          </tr>
                        </thead>
                        <tbody>
                        {
                            contacts && contacts.length > 0 ?
                            contacts.map((contact) =>
                            <ContactOne contact = {contact} key={contact.id} />
                            )
                            :null
                        }
                        </tbody>
                      </table>
    </div>
  );
}



function ContactOne(props) {
    const {contact} = props;
    return(
        <tr>
            <th>{contact.id }</th>
            <td>{ contact.your_name }</td>
            <td>{ contact.title }</td>
            <td>{ contact.created_at }</td>
            <td><a href="{{ route('contact.show', ['id' => $contact->id]) }}">詳細を見る</a></td>
        </tr>
    );
}

let el=document.getElementById('ContactList');
ReactDOM.render(<ContactList />, el);

export default ContactList;
