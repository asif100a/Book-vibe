import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('bookData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books);

    return (
        <div className="mt-24">
            <h1 className="text-[2.5rem] font-bold text-center mb-12">Books</h1>

            <div>
                <Book></Book>
            </div>
        </div>
    );
};

export default Books;