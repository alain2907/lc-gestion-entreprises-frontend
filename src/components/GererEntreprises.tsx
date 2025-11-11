import React from 'react';
import { useNavigate } from 'react-router-dom';

export const GererEntreprises: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/selection-entreprise');
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
    >
      Gérer mes entreprises
    </button>
  );
};
