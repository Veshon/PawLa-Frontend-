import React, { useState } from 'react';

const PetSelection = () => {
  const [selectedPets, setSelectedPets] = useState([]);
  const [showPetSelection, setShowPetSelection] = useState(false);

  const petTypes = [
    {
      type: 'Puppy',
      age: 'Under 6 months',
      bgColor: 'bg-[#e6a033]',
      textColor: 'text-white',
      icon: '/images/img_vector2.svg',
      width: 'w-auto',
      layout: 'dual-line'
    },
    {
      type: 'Dog',
      age: 'Over 6 months',
      bgColor: 'bg-transparent',
      textColor: 'text-[#e6a033]',
      icon: '/images/img_vector_yellow_800.svg',
      width: 'w-auto',
      layout: 'dual-line'
    },
    {
      type: 'Cat',
      bgColor: 'bg-transparent',
      textColor: 'text-[#e6a033]',
      icon: '/images/img_vector_yellow_800_18x24.svg',
      width: 'w-[140px]',
      layout: 'compact'
    },
    {
      type: 'Rabbit',
      bgColor: 'bg-transparent',
      textColor: 'text-[#e6a033]',
      icon: '/images/img_vector_yellow_800_30x26.svg',
      width: 'w-[140px]',
      layout: 'compact'
    },
    {
      type: 'Other',
      bgColor: 'bg-transparent',
      textColor: 'text-[#e6a033]',
      icon: '/images/img_vector_yellow_800_8x12.svg',
      width: 'w-auto',
      layout: 'other'
    }
  ];

  const addNewPet = (petType) => {
    const newPet = petTypes.find(pet => pet.type.toLowerCase() === petType);
    setSelectedPets([...selectedPets, { ...newPet, id: Date.now() }]);
    setShowPetSelection(false);
  };

  const removePet = (id) => {
    setSelectedPets(selectedPets.filter(pet => pet.id !== id));
  };

  return (
    <div>
      {/* Selected Pets Display */}
      <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
        {selectedPets.map((pet) => (
          <div
            key={pet.id}
            className={`relative flex items-center ${pet.bgColor} border border-[#e6a033] rounded-[12px] px-2 py-2 sm:px-3 sm:py-3 ${pet.width}`}
          >
            {/* Remove button (small x in top-right corner) */}
            <button
              onClick={(e) => { e.stopPropagation(); removePet(pet.id); }}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
            >
              ×
            </button>

            {/* Pet content */}
            {pet.layout === 'dual-line' ? (
              <>
                <div className="flex flex-col mr-2">
                  <span className={`text-[14px] font-inter font-medium ${pet.textColor}`}>
                    {pet.type}
                  </span>
                  <span className={`text-[10px] font-inter font-medium ${pet.textColor}`}>
                    {pet.age}
                  </span>
                </div>
                <img
                  src={pet.icon}
                  alt={pet.type}
                  className="w-[30px] h-[24px] sm:w-[36px] sm:h-[30px]"
                />
              </>
            ) : pet.layout === 'other' ? (
              <>
                <span className="text-[14px] font-inter font-medium text-[#e6a033] mr-2">
                  Other :
                </span>
                <span className="text-[14px] font-inter font-normal text-[#e6a033] mr-2">
                  Please Select
                </span>
                <img
                  src={pet.icon}
                  alt="Dropdown"
                  className="w-[12px] h-[8px]"
                />
              </>
            ) : (
              <>
                <span className={`text-[14px] font-inter font-medium ${pet.textColor} ${pet.type === 'Rabbit' ? 'mr-2' : ''}`}>
                  {pet.type}
                </span>
                <img
                  src={pet.icon}
                  alt={pet.type}
                  className={`${pet.type === 'Cat' ? 'w-[22px] h-[24px] sm:w-[26px] sm:h-[30px]' : 'w-[22px] h-[24px] sm:w-[26px] sm:h-[30px]'}`}
                />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Add Pet Button */}
      {!showPetSelection && (
        <button
          type="button"
          className="flex items-center bg-transparent border-none p-0 cursor-pointer hover:opacity-80 transition-opacity mb-6"
          onClick={() => setShowPetSelection(true)}
        >
          <img
            src="/images/img_vector_yellow_800_12x12.svg"
            alt=""
            className="w-[12px] h-[12px] mr-1"
            aria-hidden="true"
          />
          <span className="text-[14px] font-inter font-medium text-[#e6a033] underline">
            add another pet
          </span>
        </button>
      )}

      {/* Pet Selection Modal */}
      {showPetSelection && (
        <div className="mb-6 p-4 rounded-lg bg-white">
          <h3 className="text-[#e6a033] font-medium mb-3 text-[16px]">Select pet type:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {petTypes.map((pet) => (
              <button
                key={pet.type}
                onClick={() => addNewPet(pet.type.toLowerCase())}
                className={`flex flex-col items-center p-3 border border-[#e6a033] rounded-[12px] hover:bg-[#e6a03310] transition-colors`}
              >
                <img
                  src={pet.icon}
                  alt={pet.type}
                  className="w-[30px] h-[30px] mb-2"
                />
                <span className="text-[14px] font-inter font-medium text-[#e6a033] text-center">
                  {pet.type}
                  {pet.age && <span className="block text-[12px] font-normal">{pet.age}</span>}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PetSelection;