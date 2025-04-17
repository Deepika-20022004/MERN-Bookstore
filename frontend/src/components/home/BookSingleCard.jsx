import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
      <div className='p-6'>
        <div className='flex justify-between items-start mb-4'>
          <div className='flex items-center gap-2'>
            <PiBookOpenTextLight className='text-indigo-500 text-2xl' />
            <h2 className='text-lg font-semibold text-gray-800'>{book.title}</h2>
          </div>
          <span className='px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium'>
            {book.publishYear}
          </span>
        </div>
        
        <div className='flex items-center gap-2 mb-4'>
          <BiUserCircle className='text-indigo-500 text-xl' />
          <p className='text-gray-600'>{book.author}</p>
        </div>

        <div className='flex justify-between items-center mt-6 pt-4 border-t border-gray-100'>
          <button
            onClick={() => setShowModal(true)}
            className='text-indigo-600 hover:text-indigo-800 transition-colors duration-200'
          >
            <BiShow className='text-xl' />
          </button>
          <div className='flex items-center gap-4'>
            <Link
              to={`/books/details/${book._id}`}
              className='text-green-600 hover:text-green-800 transition-colors duration-200'
            >
              <BsInfoCircle className='text-xl' />
            </Link>
            <Link
              to={`/books/edit/${book._id}`}
              className='text-yellow-600 hover:text-yellow-800 transition-colors duration-200'
            >
              <AiOutlineEdit className='text-xl' />
            </Link>
            <Link
              to={`/books/delete/${book._id}`}
              className='text-red-600 hover:text-red-800 transition-colors duration-200'
            >
              <MdOutlineDelete className='text-xl' />
            </Link>
          </div>
        </div>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;