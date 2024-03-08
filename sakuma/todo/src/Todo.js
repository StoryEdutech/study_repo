import { useState } from 'react';
import initialData from'./initialData';
import TodoTabPanel from'./TodoTabPanel';
import AddTodo from'./AddTodo';
import { Tabs, Tab, Box } from "@mui/material";
import { styled } from '@mui/system';

const TodoComponent = styled('div')`
    max-width: 400px;
    margin:100px auto;
    display: flex;
    flex-wrap: wrap;
`;

const TodoContainer = styled('div')`
    width:100%;
`;

export default function Todo() {
    const [list, setList] = useState(initialData);
    const [today, setToday] = useState(new Date().toISOString().split("T")[0]);
    const [nextId,setNextId] = useState(initialData.length+1);
    const [activeTab, setActiveTab] = useState('all');

    function handleAddTodo(addTodo){
        if(!addTodo.task) return;

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

    function handleChangeCompleted(id, isCompleted){
        setList(list.map((todo) => {
            if(todo.id === id){
                return {...todo, completed: isCompleted};
            }
            return todo;
        }));
    }

    var tabList = {
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
                
                <AddTodo onAddTodo={(addTodo) => handleAddTodo(addTodo)} today={today} />

                <Box>
                    今日：
                    <input 
                        type="date" 
                        value={today} 
                        onChange={(e) => setToday(e.target.value)}
                    />
                </Box>

                <Tabs value={activeTab} onChange={(event, newValue) => setActiveTab(newValue)} centered>
                    {tabLabels.map(({label, tabName}) => 
                        <Tab 
                            key={tabName} 
                            label={label+'('+tabList[tabName].length+')'} 
                            value={tabName} 
                        />
                    )}
                </Tabs>
                {tabLabels.map(({tabName}) => 
                    <TodoTabPanel 
                        key={tabName} 
                        tabList={tabList[tabName]} 
                        isActive={activeTab === tabName} 
                        tabName={tabName} 
                        onChangeCompleted={handleChangeCompleted}
                    />
                )}

            </TodoContainer>
        </TodoComponent>
    );
}

const tabLabels = [
    {
        label: 'すべて',
        tabName: 'all'
    },
    {
        label: '過ぎているタスク',
        tabName: 'over'
    },
    {
        label: '完了',
        tabName: 'completed'
    },
];
