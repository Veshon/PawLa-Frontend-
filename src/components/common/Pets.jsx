import React, { useState, useEffect } from 'react';
import Dropdown from '../../components/ui/Dropdown';

const Pets = () => {
  const [selectedPetType, setSelectedPetType] = useState(null);
  const [selectedPets, setSelectedPets] = useState([]);

  const otherPetTypes = [
    { value: 'bird', label: 'Bird' },
    { value: 'hamster', label: 'Hamster' },
    { value: 'fish', label: 'Fish' },
    { value: 'reptile', label: 'Reptile' },
    { value: 'other', label: 'Other' }
  ];

  // Log detailed pet selection info whenever selections change
  useEffect(() => {
    const petCounts = selectedPets.reduce((acc, pet) => {
      acc[pet.type] = (acc[pet.type] || 0) + 1;
      return acc;
    }, {});

    console.log('Current Pet Selections:');
    console.log('Total pets selected:', selectedPets.length);
    console.log('Count by type:', petCounts);
    console.log('Full selection array:', selectedPets);
  }, [selectedPets]);

  const handlePetSelect = (petType) => {
    const newPet = {
      type: petType,
      id: `${petType}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      timestamp: new Date().toISOString()
    };

    setSelectedPets([...selectedPets, newPet]);
    console.log(`Added new ${petType} with ID: ${newPet.id}`);
  };

  const removePet = (id) => {
    const updatedPets = selectedPets.filter(pet => pet.id !== id);
    setSelectedPets(updatedPets);

    const removedPet = selectedPets.find(pet => pet.id === id);
    if (removedPet) {
      console.log(`Removed ${removedPet.type} with ID: ${id}`);
    }
  };

  return (
    <div className="mb-6" id="pet-selection-section">
      <h3 className="text-[16px] font-inter font-semibold text-[#5b5f6b] mb-4">
        Who needs looking after
      </h3>

      {/* Selected pets display */}
      <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
        {selectedPets.map((pet) => (
          <div
            key={pet.id}
            className="relative flex items-center bg-[#e6a033] border border-[#e6a033] rounded-[12px] px-3 py-2"
          >
            <span className="text-[14px] font-inter font-medium text-white mr-2">
              {pet.type}
            </span>
            <button
              onClick={() => removePet(pet.id)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
              aria-label={`Remove ${pet.type}`}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Pet selection buttons */}
      <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
        {/* Puppy */}
        <button
          type="button"
          className="flex items-center bg-white border border-[#e6a033] rounded-[12px] px-2 py-2 sm:px-3 sm:py-3 hover:bg-[#e6a033] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#e6a033] focus:ring-opacity-50 group"
          onClick={() => handlePetSelect('Puppy')}
        >
          <div className="flex flex-col mr-2">
            <span className="text-[14px] font-inter font-medium text-[#e6a033] group-hover:text-white transition-colors duration-200">
              Puppy
            </span>
            <span className="text-[10px] font-inter font-medium text-[#e6a033] group-hover:text-white transition-colors duration-200">
              Under 6 months
            </span>
          </div>
          <div className="relative">
            <img
              src="/images/img_vector.svg"
              alt="Puppy"
              className="w-[30px] h-[24px] sm:w-[36px] sm:h-[30px] group-hover:opacity-0 transition-opacity duration-200"
            />
            <img
              src="/images/img_vector_white_dog.svg"
              alt="Puppy"
              className="absolute top-0 left-0 w-[30px] h-[24px] sm:w-[36px] sm:h-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
          </div>
        </button>

        {/* Dog */}
        <button
          type="button"
          className="flex items-center bg-white border border-[#e6a033] rounded-[12px] px-2 py-2 sm:px-3 sm:py-3 hover:bg-[#E6A033] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#e6a033] focus:ring-opacity-50 group"
          onClick={() => handlePetSelect('Dog')}
        >
          <div className="flex flex-col mr-2">
            <span className="text-[14px] font-inter font-medium text-[#e6a033] group-hover:text-white transition-colors duration-200">
              Dog
            </span>
            <span className="text-[10px] font-inter font-medium text-[#e6a033] group-hover:text-white transition-colors duration-200">
              Over 6 months
            </span>
          </div>
          <div className="relative">
            <img
              src="/images/img_vector_yellow_800.svg"
              alt="Dog"
              className="w-[30px] h-[24px] sm:w-[36px] sm:h-[30px] group-hover:opacity-0 transition-opacity duration-200"
            />
            <img
              src="/images/img_vector_white_800.svg"
              alt="Dog"
              className="absolute top-0 left-0 w-[30px] h-[24px] sm:w-[36px] sm:h-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
          </div>
        </button>

        {/* Cat */}
        <button
          type="button"
          className="w-[140px] flex items-center justify-center gap-12 bg-white border border-[#e6a033] rounded-[12px] px-2 py-2 sm:px-3 sm:py-3 hover:bg-[#e6a033] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#e6a033] focus:ring-opacity-50 group"
          onClick={() => handlePetSelect('Cat')}
        >
          <span className="text-[14px] font-inter font-medium text-[#e6a033] group-hover:text-white transition-colors duration-200">
            Cat
          </span>
          <div className="relative">
            <img
              src="/images/img_vector_yellow_800_18x24.svg"
              alt="Cat"
              className="w-[30px] h-[24px] sm:w-[36px] sm:h-[30px] group-hover:opacity-0 transition-opacity duration-200"
            />
            <img
              src="/images/img_vector_white_800_18x24.svg"
              alt="Cat"
              className="absolute top-0 left-0 w-[30px] h-[24px] sm:w-[36px] sm:h-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
          </div>
        </button>

        {/* Rabbit */}
        <button
          type="button"
          className="w-[140px] flex items-center justify-center gap-8 bg-white border border-[#e6a033] rounded-[12px] px-2 py-2 sm:px-3 sm:py-3 hover:bg-[#e6a033] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#e6a033] focus:ring-opacity-50 group"
          onClick={() => handlePetSelect('Rabbit')}
        >
          <span className="text-[14px] font-inter font-medium text-[#e6a033] mr-2 group-hover:text-white transition-colors duration-200">
            Rabbit
          </span>
          <div className="relative">
            <img
              src="/images/img_vector_yellow_800_30x26.svg"
              alt="Rabbit"
              className="w-[30px] h-[24px] sm:w-[36px] sm:h-[30px] group-hover:opacity-0 transition-opacity duration-200"
            />
            <img
              src="/images/img_vector_white_800_30x26.svg"
              alt="Rabbit"
              className="absolute top-0 left-0 w-[30px] h-[24px] sm:w-[36px] sm:h-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
          </div>
        </button>

        {/* Other */}
        <Dropdown
          placeholder="Other: Please Select"
          options={otherPetTypes}
          value={selectedPetType}
          onChange={(option) => {
            setSelectedPetType(option?.value);
            handlePetSelect(option?.label);
          }}
          style={{ width: "189px" }}
          rightImage={{
            src: "/images/img_vector_yellow_800_8x12.svg",
            width: 12,
            height: 18
          }}
        />
      </div>

      <button
        type="button"
        className="flex items-center bg-transparent border-none p-0 cursor-pointer hover:opacity-80 transition-opacity mb-6"
        onClick={() => {
          document.getElementById('pet-selection-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {/*<img
          src="/images/img_vector_yellow_800_12x12.svg"
          alt="Add another pet"
          className="w-[12px] h-[12px] mr-1"
        />*/}
        <span className="text-[14px] font-inter font-medium text-[#e6a033] underline">
          If you wnt to add another pet choose another.
        </span>
      </button>
    </div>
  );
};

export default Pets;