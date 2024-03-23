import { styled } from '@mui/system';
import { red } from '@mui/material/colors';

const TodoListComponent = styled('label')`
    display: block;
`;

const DangerContent = styled('span')`
    color: ${red[500]};
`;

function Task(props) {
    const { task, until, completed, isOver, onChangeCompleted, tabName } = props;

    const decorateContent = (content) => {
        if(tabName === 'all'){
            if(completed) return <s>{content}</s>;
            if(isOver) return <DangerContent>{content}</DangerContent>;
        } 
        return content;
    }

    return (
        <TodoListComponent>
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={(e) => onChangeCompleted(e.target.checked)}
            />
            {decorateContent(`${task}(${until})`)}
        </TodoListComponent>
    );
}

export default Task;