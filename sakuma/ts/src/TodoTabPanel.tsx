import Task from'./Task';
import { styled } from '@mui/system';
import {listType} from'./initialList';

const TabContainer = styled('div')`
    padding: 10px 0;
`;

type TodoTabPanelProps = {
    tabList: listType[];
    onChangeCompletedById: (id: number, checked: boolean) => void;
    tabName: string;
};

function TodoTabPanel(props: TodoTabPanelProps){
    const { tabName, tabList, onChangeCompletedById } = props;

    return (
        <TabContainer >
            {tabList.map((todo:listType) =>
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