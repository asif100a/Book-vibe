import { getWishListFromLS } from "../../Utils/utils";
import WishList from "./WishList";

const WishlistBooks = () => {
    const storedWishlist = getWishListFromLS();

    return (
        <ul className="flex flex-col gap-6">
            {
                storedWishlist.map(book => <WishList key={book.bookId} book={book}></WishList>)
            }

        </ul>
    );
};

export default WishlistBooks;