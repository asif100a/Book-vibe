import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getItemFromLS } from '../../Utils/utils';
import PropTypes from 'prop-types';

const PagesToRead = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const bookData = getItemFromLS();
    
    const books = bookData.map(book => {
        return {name: book.bookName, uv: book.totalPages}
    });
    
    const data = books;
    


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };



    return (
        <div className='w-full min-h-auto lg:min-h-[32rem] flex justify-center items-center'>
            <div className='bg-[#f6f7f8] w-full lg:w-auto p-4 lg:p-10 rounded-2xl flex justify-center items-center'>
                <BarChart
                    width={700}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );

};


export default PagesToRead;