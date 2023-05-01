interface Item {
    id: string;
}

export const findIndexByItemId = <TItem extends Item>(items: TItem[], id: string) => {
    return items.findIndex((item: TItem) => item.id === id);
};


export const removeItemAtIndex = <TItem>(array: TItem[], index: number) => {
    return [...array.slice(0, index), ...array.slice(index + 1)];
};

export const insertItemAtIndex = <TItem>(array: TItem[], item: TItem, index: number) => {
    if (index < 0) {
        return array;
    }
    return [...array.slice(0, index), item, ...array.slice(index)];
};

export const moveItem = <TItem>(array: TItem[], indexFrom: number, indexTo: number) => {
    const item = array[indexFrom];
    return insertItemAtIndex(removeItemAtIndex(array, indexFrom), item, indexTo);
};
