import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const bookData = useLoaderData();
    const { id } = useParams();

    const book = bookData.find(data => data.bookId == id);

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
    // console.log(bookName);


    return (
        <section className="bg-white">
            <div className="container p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="flex gap-4">
                    <div className="w-[100%] bg-gray-100 py-16 flex justify-center items-center  rounded-2xl">
                        <img src={image} alt="Book image" className="object-cover w-64 h-64 rounded sm:h-96 lg:col-span-7 " />
                    </div>
                    <div className="p-6 space-y-4 lg:col-span-5">
                        <div>
                            <h3 className="text-2xl font-semibold sm:text-4xl">{bookName}</h3>
                            <p className="text-lg font-medium mt-3">By: {author}</p>
                        </div>
                        <p className="font-medium text-lg py-3 border-y-2 border-dashed">{category}</p>
                        <p><span className="font-bold">Review:</span> {review}</p>
                        <div className="flex gap-3">
                            <h5 className="text-base font-bold">Tag</h5>
                            <p>{tags.map((tag, i) => <span className="bg-gray-100 text-[#23BE0A] rounded-full px-4 py-1 mx-3" key={i}>#{tag}</span>)}</p>
                        </div>
                        
                    </div>
                </div>


                <div className="flex justify-center gap-4">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Read</button>
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Wishlist</button>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;