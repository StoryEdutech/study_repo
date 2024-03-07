import { styled } from '@mui/system';
import { red } from '@mui/material/colors';

const TodoListComponent = styled('label')`
    display: block;
`;

const DangerContent = styled('span')`
    color: ${red[500]};
`;

function Task(props) {
    const { id, task, until, completed, isOver, onChangeCompleted, tabName } = props;

    var content = `${task}(${until})`;
    if(tabName === 'all'){
        if(completed){
            content = <s>{content}</s>;
        }
        if(isOver){
            content = <DangerContent>{content}</DangerContent>;
        }
    }
    return (
        <TodoListComponent>
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={(e) => onChangeCompleted(id, e.target.checked)}
            />
            {content}
        </TodoListComponent>
    );
}

export default Task;