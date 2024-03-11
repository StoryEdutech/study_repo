import Task from'./Task';
import { styled } from '@mui/system';
import { List } from'./Todo';

const TabContainer = styled('div')`
    padding: 10px 0;
`;

type TodoTabPanelProps = {
    tabList: List[];
    onChangeCompletedById: (id: number, checked: boolean) => void;
    tabName: string;
};

function TodoTabPanel(props: TodoTabPanelProps){
    const { tabName, tabList, onChangeCompletedById } = props;

    return (
        <TabContainer >
            {tabList.map((todo:List) =>
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