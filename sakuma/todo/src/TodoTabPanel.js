import Task from'./Task';
import { styled } from '@mui/system';

const TabContainer = styled('div')`
    padding: 10px 0;
`;

function TodoTabPanel(props){
    const { tabName, tabList, onChangeCompletedById } = props;

    return (
        <TabContainer >
            {tabList.map((todo) =>
                <Task 
                    key={todo.id} 
                    {...todo} 
                    onChangeCompleted={(checked) => onChangeCompletedById(todo.id, checked)} 
                    tabName={tabName} 
                />
            )}
        </TabContainer>
    );

}

export default TodoTabPanel;