const getBookItems = () => {
    const storeListStr = localStorage.getItem('book-read-list');
    if (storeListStr) {
        try {
            return JSON.parse(storeListStr);
        } catch (error) {
            console.error("Error parsing book list:", error);
            return [];
        }
    }
    return [];
};

const addToStoreBookList = (id) => {
    if (!id) {
        console.error("Invalid book ID:", id);
        return;
    }

    const storeList = getBookItems();
    if (storeList.includes(id)) {
        console.log(id, 'already exists in the read list');
    } else {
        storeList.push(id);
        localStorage.setItem('book-read-list', JSON.stringify(storeList));
    }
};

export { addToStoreBookList };

