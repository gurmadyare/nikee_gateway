import React from 'react';

const ShoeCard = ({ imgUrl, isSelected, handleChangeImage }) => {
  return (
    <div
      className={`h-[100px] flex justify-center items-center bg-card bg-cover bg-center rounded-xl border-2 ${isSelected ? 'border-coral-red' : 'border-transparent'}`}
    >
      <img
        src={imgUrl}
        alt="card-img"
        width={110}
        height={110}
        className='object-contain p-3'
        onClick={handleChangeImage}
      />
    </div>
  );
}

export default ShoeCard;