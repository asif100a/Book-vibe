import { toast } from "react-toastify";

// "Read books" part
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
        toast.warning('The book already listed to "Read books"!')
    }
    else{
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        toast.success('The book listed to "Read books" successfully');
    }
};


// "Wishlist books" part
const getWishListFromLS = () => {
    let storedWish = [];
    const storedWishList = localStorage.getItem('wishlists');
    if(storedWishList) {
       storedWish = JSON.parse(storedWishList)
    }
    return storedWish;
};

const setWishListToLS = (book) => {
    const wishList = getWishListFromLS();
    const isExist = wishList.find(wish => wish.bookId === book.bookId);
    if(isExist) {
        toast.warning('The book already listed to "Wishlist Books"!');
    }
    else{
        wishList.push(book);
        localStorage.setItem('wishlists', JSON.stringify(wishList));
        toast.success('The book listed to "Wishlist books" successfully');
    }
};

export {getItemFromLS, setItemToLS, getWishListFromLS, setWishListToLS};