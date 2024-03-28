import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { getItemFromLS } from "../../Utils/utils";


const ListedBooks = () => {
    const [tab, setTab] = useState(0);

    // const handleDropDown = () => {
    //     if(tab === 0) {
    //         const readItems = getItemFromLS();
    //         readItems.sort();
    //     }
    // };

    return (
        <div>
            <div className="footer footer-center p-7 bg-gray-100 rounded-xl text-base-content">
                <aside>
                    <p className="text-2xl font-bold">Books</p>
                </aside>
            </div>

            <div className="flex justify-center items-center">

                <details className="dropdown">
                    <summary className="m-1 btn inline-flex items-center rounded-lg bg-[#23BE0A] text-white mt-8">
                        <p className="pl-2">Short by</p>
                        <p className="pr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </p>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box bg-white w-52">
                        <li className="hover:bg-[#23BE0A] rounded-md"><a>Rating</a></li>
                        <li className="hover:bg-[#23BE0A] rounded-md"><a>Number of pages</a></li>
                        <li className="hover:bg-[#23BE0A] rounded-md"><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>

            <div className="flex overflow-x-auto overflow-y-hidden  flex-nowrap dark:text-gray-800 mt-8">

                <Link onClick={() => setTab(0)} to={''} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab && 'border-b-2 text-gray-400' || 'border-2 border-b-0 text-gray-900'} rounded-t-lg font-semibold dark:border-gray-200`}>

                    <span>Read Books</span>
                </Link>

                <Link onClick={() => setTab(1)} to={`wishlist`} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab && 'border-2 border-b-0 text-gray-900' || 'border-b-2 text-gray-400'} rounded-t-lg font-semibold dark:border-gray-200`}>

                    <span>Wishlist Books</span>
                </Link>
                <a className="border-b-2 border-gray-200 w-full" href=""></a>
            </div>

            <div className="flex flex-col mt-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;