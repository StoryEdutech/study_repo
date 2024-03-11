import { useState } from 'react';
import initialList from'./initialList';
import TodoTabPanel from'./TodoTabPanel';
import AddTodo, { AddToDo } from'./AddTodo';
import { Tabs, Tab, Box } from "@mui/material";
import { styled } from '@mui/system';

const TAB_NAME = {
    all: 'すべて',
    over: '過ぎているタスク',
    completed: '完了',
};

const TodoComponent = styled('div')`
    max-width: 400px;
    margin:100px auto;
    display: flex;
    flex-wrap: wrap;
`;

const TodoContainer = styled('div')`
    width:100%;
`;

export type Todo = {
    id: number;
    task: string;
    until: string;
    completed: boolean;
};

type TabList = {
    all: Todo[];
    completed: Todo[];
    over: Todo[];
};

export default function TodoApp() {
    const [list, setList] = useState(initialList);
    const [today, setToday] = useState(new Date().toISOString().split("T")[0]);
    const [nextId,setNextId] = useState(initialList.length+1);
    const [activeTab, setActiveTab] = useState<'all' | 'completed' | 'over'>('all');

    function handleAddTodo(addTodo: AddToDo){
        setList([
            ...list,
            {
                ...addTodo,
                id:nextId,
                completed: false
            }
        ]);
        setNextId(nextId + 1);
    }

    function handleChangeCompleted(id: number, isCompleted: boolean){
        setList(list.map((todo) => {
            if(todo.id === id){
                return {...todo, completed: isCompleted};
            }
            return todo;
        }));
    }

    const tabList: TabList = {
        all: list.map((todo) => { 
                return {
                    ...todo, 
                    isOver: new Date(todo.until) < new Date(today) 
                }; 
            }),
        completed: list.filter((todo) => todo.completed),
        over: list.filter((todo) => new Date(todo.until) < new Date(today))
            .sort((a, b) =>
                new Date(a.until) >= new Date(b.until) ? 1 : -1
            )
    };

    return (
        <TodoComponent>
            <TodoContainer>
                
                <AddTodo handleAddTodo={(addTodo: AddToDo) => handleAddTodo(addTodo)} today={today} />

                <Box>
                    今日：
                    <input 
                        type="date" 
                        value={today} 
                        onChange={(e) => setToday(e.target.value)}
                    />
                </Box>

                <Tabs value={activeTab} onChange={(event, newValue) => setActiveTab(newValue)} centered>
                    <Tab 
                        key='all' 
                        label={TAB_NAME['all']+'('+tabList.all.length+')'} 
                        value='all' 
                    />
                    <Tab 
                        key='over' 
                        label={TAB_NAME['over']+'('+tabList.over.length+')'} 
                        value='over' 
                    />
                    <Tab 
                        key='completed' 
                        label={TAB_NAME['completed']+'('+tabList.completed.length+')'} 
                        value='completed' 
                    />
                </Tabs>
                <TodoTabPanel 
                    tabList={tabList[activeTab]}
                    tabName={activeTab}
                    onChangeCompletedById={handleChangeCompleted}
                />

            </TodoContainer>
        </TodoComponent>
    );
}
