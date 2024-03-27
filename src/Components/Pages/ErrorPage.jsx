import errorImg from '../../../src/assets/Images/404-status-code.png';

const ErrorPage = () => {
    return (
        <div className=''>
            <img className='w-full h-full' src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;