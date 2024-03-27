const getItemFromLS = () => {
    let store = [];
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        store = JSON.parse(storedBooks);
    }
    return store;
};

const setItemToLS = (book) => {
    const books = getItemFromLS();
    const isExist = books.find(savedBook => savedBook.bookId === book.bookId);
    if(isExist) {
       return alert('Book already enrolled!');
    }
    else{
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        return alert('Book anrolled.')
    }
};

export {getItemFromLS, setItemToLS};