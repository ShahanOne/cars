import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import { cardData } from './cardData';

const itemsPerPage = 6; // Number of items to display per page

export default function Home() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedCards = cardData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      router.push(`/page=${newPage}`);
    }
  };

  return (
    <div className="main">
      <Navbar />
      <div className="grid grid-cols-3 gap-4 px-16 py-8">
        {displayedCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="hover:bg-blue-400 hover:text-white text-blue-400 font-bold py-2 px-4 rounded-lg"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="hover:bg-blue-400 hover:text-white text-blue-400 font-bold py-2 px-4 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
