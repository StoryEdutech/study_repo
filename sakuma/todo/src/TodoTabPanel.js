import Task from'./Task';
import { styled } from '@mui/system';

const TabContainer = styled('div')`
    padding: 10px 0;
`;

function TodoTabPanel(props){
    const { isActive, tabName, tabList, onChangeCompleted } = props;

    return (
        <TabContainer hidden={!isActive} >
            {isActive && tabList.map((todo) =>
                <Task 
                    key={todo.id} 
                    {...todo} 
                    onChangeCompleted={(checked) => onChangeCompleted(todo.id, checked)} 
                    tabName={tabName} 
                />
            )}
        </TabContainer>
    );

}

export default TodoTabPanel;