import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
      <table className='w-full'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              No
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Title
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-md:hidden'>
              Author
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider max-md:hidden'>
              Publish Year
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Operations
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className='hover:bg-gray-50 transition-colors duration-150'
            >
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                {index + 1}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='text-sm font-medium text-gray-900'>{book.title}</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-md:hidden'>
                {book.author}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-md:hidden'>
                {book.publishYear}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                <div className='flex items-center gap-4'>
                  <Link
                    to={`/books/details/${book._id}`}
                    className='text-indigo-600 hover:text-indigo-900 transition-colors duration-200'
                  >
                    <BsInfoCircle className='text-xl' />
                  </Link>
                  <Link
                    to={`/books/edit/${book._id}`}
                    className='text-yellow-600 hover:text-yellow-900 transition-colors duration-200'
                  >
                    <AiOutlineEdit className='text-xl' />
                  </Link>
                  <Link
                    to={`/books/delete/${book._id}`}
                    className='text-red-600 hover:text-red-900 transition-colors duration-200'
                  >
                    <MdOutlineDelete className='text-xl' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;