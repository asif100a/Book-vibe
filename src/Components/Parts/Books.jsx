import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('bookData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="mt-24">
            <h1 className="text-[2.5rem] font-bold text-center mb-12">Books</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {
                    books.map(book => <Book key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default Books;