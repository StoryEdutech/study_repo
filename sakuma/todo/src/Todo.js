import { useState } from 'react';
import initialData from'./initialData';
import TodoTabPanel from'./TodoTabPanel';
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

const BlockDiv = styled('div')`
    display: block;
`;

const BorderBox = styled(Box)`
    border: 1px solid grey;
    padding: 10px;
    margin: 10px 0;
`;

export default function Todo() {
    const defaultAddTodo = {task:'', until:''};

    const [list, setList] = useState(initialData);
    const [today, setToday] = useState(new Date().toISOString().split("T")[0]);
    const [addTodo, setAddTodo] = useState(defaultAddTodo);
    const [nextId,setNextId] = useState(initialData.length+1);
    const [activeTab, setActiveTab] = useState('all');

    function handleAddTodo(){
        if(!addTodo.task || !addTodo.until) return;

        setList([
            ...list,
            {
                ...addTodo,
                id:nextId,
                completed: false
            }
        ]);
        setAddTodo(defaultAddTodo);
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
                <BorderBox>
                    <BlockDiv>
                        タスク：
                        <input 
                            type="text" 
                            value={addTodo.task} 
                            onChange={(e) => setAddTodo({...addTodo, task: e.target.value})}
                            placeholder='やること'
                            required
                        />
                    </BlockDiv>
                    <BlockDiv>
                        期限：
                        <input 
                            type="date" 
                            value={addTodo.until} 
                            onChange={(e) => setAddTodo({...addTodo, until: e.target.value})}
                            required 
                        />
                    </BlockDiv>
                    <button type="button" onClick={handleAddTodo}>追加</button><br />
                </BorderBox>

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
                        active={activeTab} 
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
