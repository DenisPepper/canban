interface Item {
    id: string;
}

export const findIndexByItemId = <TItem extends Item>(items: TItem[], id: string) => {
    return items.findIndex((item:TItem) => item.id === id);
};

