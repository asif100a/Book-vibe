import ReadBook from "../Parts/ReadBook";
import { getItemFromLS } from "../../Utils/utils";

const ReadBooks = () => {
    const storedBooks = getItemFromLS();

    return (
        <ul className="flex flex-col gap-6">
            {
                storedBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
            }

        </ul>
    );
};

export default ReadBooks;