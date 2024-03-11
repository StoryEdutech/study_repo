import { styled } from '@mui/system';
import { red } from '@mui/material/colors';
import { List } from'./Todo';

const TodoListComponent = styled('label')`
    display: block;
`;

const DangerContent = styled('span')`
    color: ${red[500]};
`;

type TaskProps = List & {
    isOver?: boolean;
    onChangeCompleted: (checked: boolean) => void;
    tabName: string;
};

function Task(props: TaskProps) {
    const { task, until, completed, isOver, onChangeCompleted, tabName } = props;

    const decorateContent = (content: string) => {
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