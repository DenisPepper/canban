import {useDrag} from "react-dnd";
import {useAppState} from "../../state/app-state-context";
import {DragItem} from "../../components/drag-item/drag-item";
import {setDraggedItem} from "../../state/actions";

export const useItemDrag = (item: DragItem) => {
    const {dispatch} = useAppState();
    const [, drag] = useDrag({
        type: item.type,
        item: () => {
            dispatch(setDraggedItem(item));
            return item;
        },
        end: () => dispatch(setDraggedItem(null)),
    });

    return { drag };
};
