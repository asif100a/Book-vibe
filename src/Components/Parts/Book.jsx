import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId,
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing } = book;

    return (
        <Link>
            <div className=" p-6 rounded-2xl border-2 dark:text-gray-900">
                <div className='bg-gray-100 flex justify-center items-center rounded-xl p-6'>
                    <img src={image} alt="Book image" className="object-cover object-center w-[8rem] rounded-md h-[12rem] dark:bg-gray-500" />
                </div>
                <div className="mt-6 mb-2">
                    <p className='flex justify-between'>
                        {
                            tags.map((tag, i) => <span className='bg-gray-100 font-medium text-[#23BE0A] rounded-full px-4 py-1' key={i}><a href="">{tag}</a></span>)
                        }
                    </p>
                    <h2 className="text-xl font-semibold tracking-wide mt-6">{bookName}</h2>
                </div>
                <p className="dark:text-gray-800">By: {author}</p>
                <div className='flex justify-between font-medium mt-6 pt-6 border-t-2 border-dashed'>
                    <p>{category}</p>
                    <p className='flex gap-2 justify-center items-center'>
                        <span>{rating}</span>
                        <span><FaRegStar className='w-5 h-5' /></span>
                    </p>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
};

export default Book;