import { useState } from 'react';
import './Todo.css';

export default function Todo() {
    const [isShow, setIsShow] = useState(false);
    const [list, setList] = useState(initialData);
    const [text, setText] = useState('');
    let nextId = 3;

    function handleClick(){
        setList([
            ...list,
            {
                id:nextId++,
                task: text
            }
        ]);
        setText('');
    }

    return (
        <div className='Todo'>
            <div className='Todo-container'>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button type="button" onClick={handleClick}>追加</button><br />
                <button onClick={() =>  setIsShow(!isShow)}>{isShow ? '非表示にする' : '表示する'}</button>
                {list.map((data) =>
                    <Task key={data.id} task={data.task} isShow={isShow} />
                )}
            </div>
        </div>
    );
}

function Task({task, isShow}) {
    const [isChecked, setIsChecked] = useState(false);
    if(isShow || !isChecked){
        return (
            <label className="Todo-list">
                <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                {isChecked ? <s>{task}</s> : task}
            </label>
        );
    }
}

const initialData = [
    {
        'id' : 0,
        'task': 'やること１',
    },
    {
        'id' : 1,
        'task': 'やること２',
    },
    {
        'id' : 2,
        'task': 'やること３',
    }
];