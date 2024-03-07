import { useState } from 'react';
import './Todo.css';
import initialData from'./initialData';

export default function Todo() {
    const [showCompleted, setShowCompleted] = useState(true);
    const [list, setList] = useState(initialData);
    const [text, setText] = useState('');
    const [nextId,setNextId] = useState(initialData.length+1);

    function handleClick(){
        setList([
            ...list,
            {
                id:nextId,
                task: text
            }
        ]);
        setText('');
        setNextId(nextId + 1);
    }

    return (
        <div className='Todo'>
            <div className='Todo-container'>
                <input 
                    type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                />
                <button type="button" onClick={handleClick}>追加</button><br />

                <button onClick={() =>  setShowCompleted(!showCompleted)}>
                    完了タスクを{showCompleted ? '非表示にする' : '表示する'}
                </button>

                {list.map(({id, task}) =>
                    <Task key={id} task={task} showCompleted={showCompleted} />
                )}
            </div>
        </div>
    );
}

function Task({task, showCompleted}) {
    const [isCompleted, setIsCompleted] = useState(false);
    if( isCompleted && !showCompleted ) return;

    return (
        <label className="Todo-list">
            <input 
                type="checkbox" 
                checked={isCompleted} 
                onChange={(e) => setIsCompleted(e.target.checked)}
            />
            {isCompleted ? <s>{task}</s> : task}
        </label>
    );
}
