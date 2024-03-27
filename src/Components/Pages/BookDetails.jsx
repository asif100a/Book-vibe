import { useLoaderData, useParams } from "react-router-dom";
import { setItemToLS } from "../../Utils/utils";

const BookDetails = () => {
    const bookData = useLoaderData();
    const { id } = useParams();

    const book = bookData.find(data => data.bookId == id);

    const {
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

    const handleReadBook = (book) => {
        setItemToLS(book);
    };

    const handleWishlist = (book) => {
        
    };


    return (
        <section className="bg-white">
            <div className="container p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="flex gap-4">
                    <div className="w-[72em] bg-gray-100 py-12 flex justify-center items-center  rounded-2xl">
                        <img src={image} alt="Book image" className="object-cover w-64 h-64 rounded sm:h-96 lg:col-span-7 " />
                    </div>
                    <div className="p-6 space-y-4 lg:col-span-5">
                        <div>
                            <h3 className="text-2xl font-semibold sm:text-4xl">{bookName}</h3>
                            <p className="text-lg font-medium mt-3">By: {author}</p>
                        </div>
                        <p className="font-medium text-lg py-3 border-y-2 border-dashed">{category}</p>
                        <p><span className="font-bold">Review:</span> {review}</p>
                        <div className="flex gap-3 pb-2">
                            <h5 className="text-base font-bold">Tag</h5>
                            <p>{tags.map((tag, i) => <span className="bg-gray-100 text-[#23BE0A] rounded-full px-4 py-1 mx-3" key={i}>#{tag}</span>)}</p>
                        </div>
                        <div className="border-t-2 border-dashed pt-3 flex gap-8">
                            <div>
                                <p>Number of Pages:</p>
                                <p>Publisher: </p>
                                <p>Year of Publishing: </p>
                                <p>Rating: </p>
                            </div>
                            <div className="font-semibold">
                                <p>{totalPages}</p>
                                <p>{publisher}</p>
                                <p>{yearOfPublishing}</p>
                                <p>{rating}</p>
                            </div>
                        </div>
                        <div className="flex justify-start gap-4 pt-6">
                            <button onClick={() => handleReadBook(book)} type="button" className="btn px-6 py-3 text-base font-semibold rounded-md dark:bg-gray-50 border-2 border-[#a89898]">Read</button>
                            <button onClick={() => handleWishlist(book)} type="button" className="btn px-6 py-3 text-base text-white font-semibold rounded-md bg-[#50B1C9]">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;