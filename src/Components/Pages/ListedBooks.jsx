import { useState } from "react";
import { Link } from "react-router-dom";
import ReadBook from "../Parts/ReadBook";
import { getItemFromLS } from "../../Utils/utils";

const ListedBooks = () => {
    const [tab, setTab] = useState(0);
    const storedBooks = getItemFromLS();

    return (
        <div>
            <div className="footer footer-center p-7 bg-gray-100 rounded-xl text-base-content">
                <aside>
                    <p className="text-2xl font-bold">Books</p>
                </aside>
            </div>

            <div className="flex justify-center items-center">
                <div className="inline-flex items-center rounded-lg bg-[#23BE0A] text-white mt-8 btn">
                    <button type="button" className="pl-4 py-3 font-semibold">Short by</button>
                    <button type="button" title="Toggle dropdown" className="p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex overflow-x-auto overflow-y-hidden  flex-nowrap dark:text-gray-800 mt-8">

                <Link onClick={() => setTab(0)} to={''} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab && 'border-b-2' || 'border-2 border-b-0'} rounded-t-lg dark:border-gray-200 dark:text-gray-900`}>

                    <span>Read Books</span>
                </Link>
                <Link onClick={() => setTab(1)} to={'wishlist'} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab && 'border-2 border-b-0' || 'border-b-2'} rounded-t-lg dark:border-gray-200 dark:text-gray-600`}>

                    <span>Wishlist Books</span>
                </Link>
                <a className="border-b-2 border-gray-200 w-full" href=""></a>
            </div>

            <div className="flex flex-col mt-12">
                
                <ul className="flex flex-col gap-6">
                    {
                        storedBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                    }
                    
                </ul>
                
               
            </div>
        </div>
    );
};

export default ListedBooks;