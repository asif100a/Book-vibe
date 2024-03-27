const getItemFromLS = () => {
    const getItem = localStorage.getItem('item');
    if(getItem){
        return getItem;
    }
    return [];
};

const setItemToLS = () => {
    
};