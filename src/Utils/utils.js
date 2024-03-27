import { toast } from "react-toastify";

const getItemFromLS = () => {
    let storeRead = [];
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        storeRead = JSON.parse(storedBooks);
    }
    return storeRead;
};

const setItemToLS = (book) => {
    const books = getItemFromLS();
    const isExist = books.find(savedBook => savedBook.bookId === book.bookId);
    if(isExist) {
        toast.warning('The book already listed!')
    }
    else{
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        toast.success('The book listed successfully');
    }
};

export {getItemFromLS, setItemToLS};