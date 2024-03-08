import { useState } from 'react';
import { Box } from "@mui/material";
import { styled } from '@mui/system';

const BlockDiv = styled('div')`
    display: block;
`;

const BorderBox = styled(Box)`
    border: 1px solid grey;
    padding: 10px;
    margin: 10px 0;
`;

function AddTodo({onAddTodo, today}){
    const [task, setTask] = useState('');
    const [until, setUntill] = useState(today);

    function handleClick() {
        if(!task || !until) return;
        onAddTodo({task, until}); 
        setTask(''); 
        setUntill(today);
    }

    return (
        <BorderBox>
            <BlockDiv>
                タスク：
                <input 
                    type="text" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)}
                    placeholder='やること'
                    required
                />
            </BlockDiv>
            <BlockDiv>
                期限：
                <input 
                    type="date" 
                    value={until} 
                    onChange={(e) => setUntill(e.target.value)}
                    required 
                />
            </BlockDiv>
            <button type="button" onClick={handleClick}>
                追加
            </button>
        </BorderBox>
    );
}

export default AddTodo;