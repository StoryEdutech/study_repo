import Task from'./Task';
import { styled } from '@mui/system';

const TabContainer = styled('div')`
    padding: 10px 0;
`;

function TodoTabPanel(props){
    const { active, tabName, tabList, onChangeCompleted } = props;

    return (
        <TabContainer hidden={active !== tabName} >
            {active === tabName && tabList.map((todo) =>
                <Task 
                    key={todo.id} 
                    {...todo} 
                    onChangeCompleted={onChangeCompleted} 
                    tabName={tabName} 
                />
            )}
        </TabContainer>
    );

}

export default TodoTabPanel;