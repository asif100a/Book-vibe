import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";

const ReadBook = ({ book }) => {
    const { bookId,
        bookName,
        author,
        image,
        totalPages,
        rating,
        category,
        tags,
        yearOfPublishing, 
        publisher, } = book;

    return (
        <li className="flex flex-col pt-6 pb-2 px-6 sm:flex-row sm:justify-between border-2 rounded-xl">
            <div className="flex flex-col md:flex-row w-full space-x-2 sm:space-x-6">
                <div className="bg-gray-100 w-60 py-6 md:py-0 rounded-xl flex justify-center items-center mb-4">
                    <img className="flex-shrink-0 w-20 md:w-20 h-32 md:h-40 dark:border- rounded outline-none sm:w-24 sm:h-32 bg-gray-500 dark:bg-gray-500" src={image} alt="Book image" />
                </div>
                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex flex-col w-full pb-2 gap-3">
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{bookName}</h3>
                            <p className="text-sm text-gray-400 dark:text-gray-600">By : {author}</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                            <p className="flex gap-3"><span className="font-bold">Tag</span>{tags.map((tag, i) => <span className="bg-gray-100 text-[#23BE0A] font-medium md:py-[3px] px-2 md:px-3 rounded-full" key={i}>#{tag}</span>)}</p>
                            
                            <p className='flex gap-1'><span><CiLocationOn className='w-6 h-6' /></span> <span>Year of Publishing: {yearOfPublishing}</span></p>
                        </div>

                    </div>
                    <div className="flex text-sm">
                        <button  className="flex items-center px-2 py-1 pl-0 space-x-1">
                            <span><IoPeopleOutline className="w-6 h-6 mr-1" /></span>
                            <span>Publisher : {publisher}</span>
                        </button>
                        <button  className="flex items-center px-2 py-1 space-x-1">
                            <span><IoDocumentTextOutline className="w-6 h-6 mr-1" /></span>
                            <span>Page : {totalPages}</span>
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 mt-3 pt-3 border-t-2 border-dashed items-start md:items-center">
                        <p
                            className="bg-[#328EFF] bg-opacity-15 text-[#328EFF] py-2 px-4 rounded-full"
                        >
                            Category : {category}
                        </p>

                        <p
                            className="bg-[#FFAC33] bg-opacity-15 text-[#FFAC33] py-2 px-4 rounded-full"
                        >
                            Rating : {rating}
                        </p>
                        <Link to={`/details/${bookId}`}>
                            <button type="button" className="btn h-10 min-h-10 border-none rounded-full font-medium bg-[#23BE0A] text-gray-900 dark:text-gray-50 border-violet-400 dark:border-violet-600">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    );
};


ReadBook.propTypes = {
    book: PropTypes.object
};

export default ReadBook;