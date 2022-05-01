import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

function ContactForm(props){
  return (
    <div>
                            {/* <form method="POST" action="{{ route('contact.store') }}"> */}
                            <form method="POST" action="">
                                氏名
                                <input type="text" name="your_name" />
                                <br />
                                件名
                                <input type="text" name="title" />
                                <br />
                                メールアドレス
                                <input type="email" name="email" />
                                <br />
                                ホームページ
                                <input type="url" name="url" />
                                <br />
                                性別
                                <input type="radio" name="gender" value="0" />男性
                                <input type="radio" name="gender" value="1" />女性
                                <br />
                                年齢
                                <select name="age" id="">
                                    <option value="">選択してください</option>
                                    <option value="1">~19歳</option>
                                    <option value="2">20〜29歳</option>
                                    <option value="3">30〜39歳</option>
                                    <option value="4">40〜49歳</option>
                                    <option value="5">50〜59歳</option>
                                    <option value="6">60〜</option>
                                </select>
                                <br />
                                お問い合わせ内容
                                <textarea name="contact" id="" cols="" rows=""></textarea>
                                <br />

                                <input type="checkbox" name="caution" value="1" />注意事項
                                <br />

                                <input class="btn btn-info" type="submit" value="登録する" />
                            </form>
                            </div>
  );
}


export default ContactForm;

// if (document.getElementById('Contact')) {
  let el=document.getElementById('ContactForm');
  console.log('処理');
//   let props=JSON.parse(el.dataset.props?el.dataset.props:'{}');
  ReactDOM.render(<ContactForm />, el);
// }
