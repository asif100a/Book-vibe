import { Link } from "react-router-dom";

const FamousBooks = () => {
    return (
        <div className="w-full h-[32rem] flex flex-col gap-6 justify-center items-center">
            <h1 className="text-4xl font-medium text-[#141313] text-center">
                Book is not available. <br />
                Please browse Home page.
            </h1>
            <Link to={'/'}><button className="btn bg-[#23BE0A] text-white font-semibold">Go back to Home</button></Link>
        </div>
    );
};

export default FamousBooks;