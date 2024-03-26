import { Link } from 'react-router-dom';
import coverImg from '../../assets/Images/the-book-cover3d-72242002.png';

const Banner = () => {
    return (
        <div className="hero py-20 rounded-3xl bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={coverImg} alt='Book Image' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold w-[526px]">Books to freshen up your bookshelf</h1>
                   
                    <Link to={'/listed'}><button className="btn btn-primary text-xl font-bold mt-16">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;