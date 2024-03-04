import { useState, useEffect } from 'react';
import $ from 'jquery';

const TodoList = () => {

const [todos, setTodos] = useState([]);

//DBからの取得
useEffect(()=>{
  $.post("http://localhost:8888/get_todos.php", {}, (res) => {
    console.log("get_ok");
    console.log("res",res);
    setTodos(JSON.parse(res).map((todo)=>{
      todo.key=Math.random();
      return todo;
    }));
    console.log("todos",todos);
  })
  .fail( () => {
    console.log("get_fail");
  });
},[])

//todoの削除（フロント）
const handleRemoveTask = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};

  return (
    <div>
      <h1>todoリスト</h1>
      <ul>
        {todos.map((todo, index) => (
          <TaskOne
            key={todo.id?todo.id:todo.key}
            {...todo}
            handleRemoveTask={() => handleRemoveTask(index)}
          />
        ))}
      </ul>
      タスクを追加 :
      <button
        key={"new"}//ここ
        onClick={
          ()=>{
            var newTodos=[...todos];
            newTodos.push({
              task: '',
              isCompleted: false,
              key:Math.random()
            });
            setTodos(newTodos);
          }
        }
      >追加</button>
    <pre>{JSON.stringify(todos)}</pre>
  </div>
  );
};


function TaskOne(props){
  const {key,task,id,isCompleted,handleRemoveTask}=props;
  const [isEditing, setIsEditing] = useState(task?false:true);
  const [task_now, setTask] = useState(task);
  const [isCompleted_now, setIsCompleted] = useState(isCompleted==1?true:false);

  const handleEditTask=()=>{
    setIsEditing(false);
    upsertOrInsertTodo();
  }

  const editTask=(event)=>{
    setTask(event.target.value);
  }

  const upsertOrInsertTodo = () =>{
    $.post("http://localhost:8888/post_todos.php", {id:id, task:task_now, isCompleted:(isCompleted_now==true?1:0)}, () => {
      console.log("done:upsertOrInsert, isCompleted:",isCompleted_now);
      console.log("id:",id);
    })
    .fail( () => {
    });
  }

  const deleteTodo = () =>{
    $.post("http://localhost:8888/delete_todos.php", {id:id}, () => {
      console.log("doneDelete, id:",id);
    })
    .fail( () => {
    });
  }

  useEffect(()=>{
    if(id){
      upsertOrInsertTodo();
    }
  },[isCompleted_now])

  useEffect(()=>{
    return ()=>{deleteTodo()};
  },[])

  return (
    <li
      style={{
        textDecoration: isCompleted_now ? 'line-through' : 'none',
      }}
    >
      <input
        type="checkbox"
        checked={isCompleted_now}
        onChange={()=>{setIsCompleted(!isCompleted_now)}}
      />
      {isEditing?
        <input
          onChange={editTask}
          placeholder="タスクを追加"
          value={task_now}
        />

        :task_now
      }
      <button
        onClick={() => {
          if(isEditing){handleEditTask();}
          else{setIsEditing(true);}
        }}
      >
        {isEditing?"save":"編集"}
      </button>
      <span
        onClick={()=>{handleRemoveTask();}}
        style={{ cursor: 'pointer' }}
      >
        X
      </span>
    </li>

  );
}

export default TodoList;
