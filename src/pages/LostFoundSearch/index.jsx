import React, { useState } from 'react';
import Header from '../../components/common/Header';

import Dropdown from '../../components/ui/DropdownForLAF.jsx';
import EditText from '../../components/ui/EditText';
import SeekBar from '../../components/ui/SeekBar';

const LostFoundSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('Colombo');
  const [distance, setDistance] = useState(25);
  const [selectedPetType, setSelectedPetType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('Lost');
  const [selectedSortBy, setSelectedSortBy] = useState('Nearest Distance');
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('Week');
  const [currentPage, setCurrentPage] = useState(2);

  const districtOptions = ['Colombo', 'Gampaha', 'Kandy', 'Galle', 'Matara', 'Jaffna'];

  const petCards = [
    {
      id: 1,
      image: '/images/img_molly_006_2829x1886_2726x1886.png',
      breed: 'Golden Retriever',
      name: 'Loola',
      location: 'Last Seen near CCC-Colombo, 12th May 2025'
    },
    {
      id: 2,
      image: '/images/img_molly_006_2829x1886_2726x1886_196x284.png',
      breed: 'Domestic Shorthan',
      name: 'Rex',
      location: 'Last Seen near Town Hall-Kalutara, 12th May 2025'
    },
    {
      id: 3,
      image: '/images/img_molly_006_2829x1886_2726x1886_1.png',
      breed: 'Domestic Parrot',
      name: 'Molly',
      location: 'Last Seen near CCC-Colombo, 12th May 2025'
    },
    {
      id: 4,
      image: '/images/img_molly_006_2829x1886_2726x1886_2.png',
      breed: 'Golden Retriever',
      name: 'Ruby',
      location: 'Last Seen near CCC-Colombo, 12th May 2025'
    },
    {
      id: 5,
      image: '/images/img_molly_006_2829x1886_2726x1886_3.png',
      breed: 'Domestic shorthan',
      name: 'Lara',
      location: 'Last Seen near Town Hall-Kalutara, 12th May 2025'
    },
    {
      id: 6,
      image: '/images/img_molly_006_2829x1886_2726x1886_4.png',
      breed: 'Shih tzu Puppy',
      name: 'Dudu',
      location: 'Last Seen near CCC-Colombo, 12th May 2025'
    },
    {
      id: 7,
      image: '/images/img_molly_006_2829x1886_2726x1886_4.png',
      breed: 'Shih tzu Puppy',
      name: 'Dudu',
      location: 'Last Seen near CCC-Colombo, 12th May 2025'
    },
    {
      id: 8,
      image: '/images/img_molly_006_2829x1886_2726x1886_3.png',
      breed: 'Domestic shorthan',
      name: 'Lara',
      location: 'Last Seen near Town Hall-Kalutara, 12th May 2025'
    },
    {
      id: 9,
      image: '/images/img_molly_006_2829x1886_2726x1886.png',
      breed: 'Golden Retriever',
      name: 'Loola',
      location: 'Last Seen near CCC-Colombo, 12th May 2025'
    },
  ];

  const handlePetTypeSelect = (type) => {
    setSelectedPetType(type);
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
  };

  const handleSortBySelect = (sortBy) => {
    setSelectedSortBy(sortBy);
  };

  const handleTimePeriodSelect = (period) => {
    setSelectedTimePeriod(period);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-[28px] justify-start items-center w-full bg-global-6">
      <Header />
      <div className="flex flex-col justify-start items-center w-full">
        <div className="flex flex-col lg:flex-row gap-[20px] justify-start items-start w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
          {/* Sidebar Filter */}
          <div className="w-full lg:w-[24%] bg-global-6 rounded-[10px] shadow-[0px_4px_15px_#0000000c] p-[10px]">
            <div className="flex flex-col gap-[14px] justify-center items-start w-full p-4">
              <div className="flex flex-col justify-start items-center w-full">
                <p className="text-[12px] font-inter font-medium leading-[15px] text-center text-global-5 self-start">
                  <span className="text-global-5">Default:</span>
                  <span className="text-[10px] text-global-5">Showing recently added lost and found pets</span>
                </p>
                
                <p className="text-[16px] font-inter font-semibold leading-[20px] text-left text-global-3 self-start mt-[10px]">
                  Pet Name/ Type/ Keyword
                </p>
                
                <div className="w-full h-[44px] border border-global-5 rounded-[12px] mt-[6px]">
                  <input 
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e?.target?.value)}
                    className="w-full h-full px-3 rounded-[12px] border-none outline-none"
                    placeholder="Search pets..."
                  />
                </div>

                <p className="text-[16px] font-inter font-semibold leading-[20px] text-left text-global-3 self-start mt-[10px]">
                  Status
                </p>
                
                <div className="flex flex-row justify-start items-center w-full mt-[6px]">
                  <div className="w-[16px] h-[16px] border border-global-5 rounded-[8px]"></div>
                  <p className="text-[14px] font-inter font-normal leading-[17px] text-left text-global-1 ml-[8px]">
                    Found/Stray
                  </p>
                  <div 
                    className={`w-[8px] h-[8px] rounded-[4px] ml-[26px] cursor-pointer ${selectedStatus === 'Lost' ? 'bg-global-5' : 'border-[6px] border-global-3'}`}
                    onClick={() => handleStatusSelect('Lost')}
                  ></div>
                  <p 
                    className={`text-[14px] font-inter leading-[17px] text-left ml-[10px] cursor-pointer ${selectedStatus === 'Lost' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}
                    onClick={() => handleStatusSelect('Lost')}
                  >
                    Lost
                  </p>
                </div>

                <p className="text-[16px] font-inter font-semibold leading-[20px] text-left text-global-3 self-start mt-[14px]">
                  District
                </p>
                
                <div className="w-full mt-[12px]">
                  <Dropdown
                    options={districtOptions}
                    value={selectedDistrict}
                    onChange={setSelectedDistrict}
                    placeholder="Colombo"
                    rightImage={{
                      src: "/images/img_vector.svg",
                      width: 12,
                      height: 10
                    }}
                    className="border border-global-5 rounded-[12px] text-[14px] font-inter font-medium text-global-6 px-[12px] py-[14px]"
                  />
                </div>

                <p className="text-[16px] font-inter font-semibold leading-[20px] text-left text-global-3 self-start mt-[18px]">
                  Distance
                </p>
                
                <div className="flex flex-row gap-[14px] justify-center items-center w-full mt-[12px]">
                  <p className="text-[14px] font-inter font-normal leading-[17px] text-left text-global-3">
                    {distance} km
                  </p>
                  <SeekBar
                    value={distance}
                    min={0}
                    max={100}
                    onChange={setDistance}
                    className="flex-1"
                  />
                </div>

                <p className="text-[16px] font-inter font-semibold leading-[20px] text-left text-global-3 self-start mt-[28px]">
                  Pet Type
                </p>

                <div className="flex flex-col gap-[10px] w-full mt-[8px]">
                  {/* All option */}
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="petType"
                      value="All"
                      checked={selectedPetType === 'All'}
                      onChange={() => handlePetTypeSelect('All')}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPetType === 'All' ? 'border-global-5' : 'border-global-3'}`}>
                      {selectedPetType === 'All' && <div className="w-2 h-2 rounded-full bg-global-5"></div>}
                    </div>
                    <span className={`ml-2 text-[14px] ${selectedPetType === 'All' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}>
                      All
                    </span>
                  </label>

                  {/* Grid layout for pet types */}
                  <div className="grid grid-cols-3 gap-3">
                    {/* Puppy */}
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="petType"
                        value="Puppy"
                        checked={selectedPetType === 'Puppy'}
                        onChange={() => handlePetTypeSelect('Puppy')}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPetType === 'Puppy' ? 'border-global-5' : 'border-global-3'}`}>
                        {selectedPetType === 'Puppy' && <div className="w-2 h-2 rounded-full bg-global-5"></div>}
                      </div>
                      <span className={`ml-2 text-[14px] ${selectedPetType === 'Puppy' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}>
                        Puppy
                      </span>
                    </label>

                    {/* Dog */}
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="petType"
                        value="Dog"
                        checked={selectedPetType === 'Dog'}
                        onChange={() => handlePetTypeSelect('Dog')}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPetType === 'Dog' ? 'border-global-5' : 'border-global-3'}`}>
                        {selectedPetType === 'Dog' && <div className="w-2 h-2 rounded-full bg-global-5"></div>}
                      </div>
                      <span className={`ml-2 text-[14px] ${selectedPetType === 'Dog' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}>
                        Dog
                      </span>
                    </label>

                    {/* Cat */}
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="petType"
                        value="Cat"
                        checked={selectedPetType === 'Cat'}
                        onChange={() => handlePetTypeSelect('Cat')}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPetType === 'Cat' ? 'border-global-5' : 'border-global-3'}`}>
                        {selectedPetType === 'Cat' && <div className="w-2 h-2 rounded-full bg-global-5"></div>}
                      </div>
                      <span className={`ml-2 text-[14px] ${selectedPetType === 'Cat' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}>
                        Cat
                      </span>
                    </label>

                    {/* Rabbit */}
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="petType"
                        value="Rabbit"
                        checked={selectedPetType === 'Rabbit'}
                        onChange={() => handlePetTypeSelect('Rabbit')}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPetType === 'Rabbit' ? 'border-global-5' : 'border-global-3'}`}>
                        {selectedPetType === 'Rabbit' && <div className="w-2 h-2 rounded-full bg-global-5"></div>}
                      </div>
                      <span className={`ml-2 text-[14px] ${selectedPetType === 'Rabbit' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}>
                        Rabbit
                      </span>
                    </label>

                    {/* Bird */}
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="petType"
                        value="Bird"
                        checked={selectedPetType === 'Bird'}
                        onChange={() => handlePetTypeSelect('Bird')}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPetType === 'Bird' ? 'border-global-5' : 'border-global-3'}`}>
                        {selectedPetType === 'Bird' && <div className="w-2 h-2 rounded-full bg-global-5"></div>}
                      </div>
                      <span className={`ml-2 text-[14px] ${selectedPetType === 'Bird' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}>
                        Bird
                      </span>
                    </label>

                    {/* Fish */}
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="petType"
                        value="Fish"
                        checked={selectedPetType === 'Fish'}
                        onChange={() => handlePetTypeSelect('Fish')}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPetType === 'Fish' ? 'border-global-5' : 'border-global-3'}`}>
                        {selectedPetType === 'Fish' && <div className="w-2 h-2 rounded-full bg-global-5"></div>}
                      </div>
                      <span className={`ml-2 text-[14px] ${selectedPetType === 'Fish' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}>
                        Fish
                      </span>
                    </label>

                    {/* Guinea pig */}
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="petType"
                        value="Guinea pig"
                        checked={selectedPetType === 'Guinea pig'}
                        onChange={() => handlePetTypeSelect('Guinea pig')}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPetType === 'Guinea pig' ? 'border-global-5' : 'border-global-3'}`}>
                        {selectedPetType === 'Guinea pig' && <div className="w-2 h-2 rounded-full bg-global-5"></div>}
                      </div>
                      <span className={`ml-2 text-[14px] ${selectedPetType === 'Guinea pig' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}>
                        Guinea pig
                      </span>
                    </label>

                    {/* Other */}
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="petType"
                        value="Other"
                        checked={selectedPetType === 'Other'}
                        onChange={() => handlePetTypeSelect('Other')}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPetType === 'Other' ? 'border-global-5' : 'border-global-3'}`}>
                        {selectedPetType === 'Other' && <div className="w-2 h-2 rounded-full bg-global-5"></div>}
                      </div>
                      <span className={`ml-2 text-[14px] ${selectedPetType === 'Other' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}>
                        Other
                      </span>
                    </label>
                  </div>
                </div>

                <p className="text-[16px] font-inter font-semibold leading-[20px] text-left text-global-3 self-start mt-[24px]">
                  Sort by
                </p>
                
                <div className="flex flex-row justify-start items-center w-full mt-[8px] px-[4px]">
                  <div 
                    className={`w-[8px] h-[8px] rounded-[4px] cursor-pointer ${selectedSortBy === 'Nearest Distance' ? 'bg-global-5' : 'border-[6px] border-global-3'}`}
                    onClick={() => handleSortBySelect('Nearest Distance')}
                  ></div>
                  <p 
                    className={`text-[14px] font-inter leading-[17px] text-left ml-[10px] cursor-pointer ${selectedSortBy === 'Nearest Distance' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}
                    onClick={() => handleSortBySelect('Nearest Distance')}
                  >
                    Nearest Distance
                  </p>
                </div>
                
                <div className="flex flex-row justify-start items-center w-full mt-[10px]">
                  <div className="w-[16px] h-[16px] border border-global-5 rounded-[8px]"></div>
                  <p className="text-[14px] font-inter font-normal leading-[17px] text-left text-global-1 ml-[6px]">
                    Recently Posted
                  </p>
                </div>

                <p className="text-[16px] font-inter font-semibold leading-[20px] text-left text-global-3 self-start mt-[26px]">
                  Within Past
                </p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-3 w-full mt-[10px]">
                  {/* Row 1 */}
                  <label className="flex items-center col-span-1 cursor-pointer">
                    <input
                      type="radio"
                      name="timePeriod"
                      value="Week"
                      checked={selectedTimePeriod === 'Week'}
                      onChange={() => handleTimePeriodSelect('Week')}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedTimePeriod === 'Week' ? 'border-global-5' : 'border-global-3'}`}>
                      {selectedTimePeriod === 'Week' && <div className="w-2 h-2 rounded-full bg-global-5"></div>}
                    </div>
                    <span className={`ml-2 text-[14px] ${selectedTimePeriod === 'Week' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}>
                      Week
                    </span>
                  </label>

                  <label className="flex items-center col-span-1 cursor-pointer">
                    <input
                      type="radio"
                      name="timePeriod"
                      value="1 Month"
                      checked={selectedTimePeriod === '1 Month'}
                      onChange={() => handleTimePeriodSelect('1 Month')}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedTimePeriod === '1 Month' ? 'border-global-5' : 'border-global-3'}`}>
                      {selectedTimePeriod === '1 Month' && <div className="w-2 h-2 rounded-full bg-global-5"></div>}
                    </div>
                    <span className={`ml-2 text-[14px] ${selectedTimePeriod === '1 Month' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}>
                      1 Month
                    </span>
                  </label>

                  {/* Row 2 */}
                  <label className="flex items-center col-span-1 cursor-pointer">
                    <input
                      type="radio"
                      name="timePeriod"
                      value="3 Month"
                      checked={selectedTimePeriod === '3 Month'}
                      onChange={() => handleTimePeriodSelect('3 Month')}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedTimePeriod === '3 Month' ? 'border-global-5' : 'border-global-3'}`}>
                      {selectedTimePeriod === '3 Month' && <div className="w-2 h-2 rounded-full bg-global-5"></div>}
                    </div>
                    <span className={`ml-2 text-[14px] ${selectedTimePeriod === '3 Month' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}>
                      3 Month
                    </span>
                  </label>

                  <label className="flex items-center col-span-1 cursor-pointer">
                    <input
                      type="radio"
                      name="timePeriod"
                      value="1 Year"
                      checked={selectedTimePeriod === '1 Year'}
                      onChange={() => handleTimePeriodSelect('1 Year')}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedTimePeriod === '1 Year' ? 'border-global-5' : 'border-global-3'}`}>
                      {selectedTimePeriod === '1 Year' && <div className="w-2 h-2 rounded-full bg-global-5"></div>}
                    </div>
                    <span className={`ml-2 text-[14px] ${selectedTimePeriod === '1 Year' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}>
                      1 Year
                    </span>
                  </label>

                  {/* Row 3 - Centered full-width option */}
                  <label className="flex items-center justify-center col-span-2 cursor-pointer mt-1">
                    <input
                      type="radio"
                      name="timePeriod"
                      value="All the time"
                      checked={selectedTimePeriod === 'All the time'}
                      onChange={() => handleTimePeriodSelect('All the time')}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedTimePeriod === 'All the time' ? 'border-global-5' : 'border-global-3'}`}>
                      {selectedTimePeriod === 'All the time' && <div className="w-2 h-2 rounded-full bg-global-5"></div>}
                    </div>
                    <span className={`ml-2 text-[14px] ${selectedTimePeriod === 'All the time' ? 'font-semibold text-global-6' : 'font-normal text-global-1'}`}>
                      All the time
                    </span>
                  </label>
                </div>

                <p className="text-[16px] font-inter font-normal leading-[20px] text-left text-global-2 self-end mt-[30px] cursor-pointer hover:underline">
                  Reset All
                </p>
              </div>
            </div>
            
            {/*<div className="w-[4px] h-[168px] bg-global-4 rounded-[2px] mt-[18px] mx-auto"></div>*/}
          </div>

          {/* Main Content */}
          <div className="flex flex-col justify-start items-start self-center w-full lg:flex-1">
            {/* Hero Section */}
            <div className="flex flex-row justify-start items-start w-full p-4 relative">
              <div 
                className="w-full h-[232px] rounded-lg bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: "url('/images/img_ecstaticcaucasiangirltrendyjacketchillingwithdogindoorportraitfashionableredhairedladyposingwithfrenchbulldog_1.png')" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
                <div className="relative z-10 p-6 lg:p-12 h-full flex flex-col justify-center">
                  <div className="flex flex-col justify-start items-start w-full max-w-[820px]">
                    <h1 className="text-[24px] sm:text-[28px] lg:text-[36px] font-poppins font-extrabold leading-[49px] text-left text-global-7">
                      <span className="font-poppins font-extrabold">Reunite</span>
                      <span className="font-poppins font-normal"> </span>
                      <span className="text-[20px] sm:text-[24px] lg:text-[28px] font-poppins font-normal">a paw</span>
                    </h1>
                    <p className="text-[14px] sm:text-[16px] font-inter font-medium leading-[19px] text-left text-global-7 w-full lg:w-[64%] mt-[6px]">
                      Help bring pets home, report a missing or found animal search posts and connect with caring owners
                    </p>
                    <EditText
                      variant="danger"
                      placeholder="Report Lost/Found"
                      className="w-full sm:w-[60%] lg:w-[28%] mt-[30px] text-[16px] font-poppins font-semibold leading-[24px] text-center text-global-7 px-[12px] py-[18px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="w-full mt-[12px]">
              <h2 className="text-[20px] sm:text-[24px] font-inter font-bold leading-[30px] text-center text-global-1">
                <span className="font-bold">Lost </span>
                <span className="text-[18px] sm:text-[20px] font-normal">Pets</span>
              </h2>
              <p className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-5 mt-[3px]">
                Showing 9 of 70 Results
              </p>

              {/* Pet Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full mt-[28px]">
                {petCards?.map((pet) => (
                  <div key={pet?.id} className="flex flex-col gap-[8px] justify-start items-center w-full border border-global-5 rounded-[20px]">
                    <img 
                      src={pet?.image} 
                      className="w-full h-[196px] object-cover rounded-t-[20px]" 
                      alt={pet?.name} 
                    />
                    <div className="flex flex-col justify-start items-start w-full px-[14px] pb-[38px]">
                      <p className="text-[18px] font-inter font-normal leading-[22px] text-center text-global-1">
                        {pet?.breed}
                      </p>
                      <p className="text-[22px] font-inter font-semibold leading-[27px] text-center text-global-1">
                        {pet?.name}
                      </p>
                      <p className="text-[18px] font-inter font-normal leading-[21px] text-left text-global-1 w-full mt-[14px]">
                        {pet?.location}
                      </p>
                      <p className="text-[14px] font-inter font-medium leading-[17px] text-left text-global-2 underline cursor-pointer hover:no-underline mt-[22px]">
                        View Details
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Pet Cards Row */}
{/*
        <div className="flex flex-row gap-[24px] w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto mt-[50px] overflow-x-auto lg:overflow-x-visible">
          {additionalCards?.map((pet) => (
            <div key={pet?.id} className="flex flex-col gap-[8px] justify-start items-center w-[284px] flex-shrink-0 border border-global-5 rounded-[20px]">
              <img 
                src={pet?.image} 
                className="w-full h-[196px] object-cover rounded-t-[20px]" 
                alt={pet?.name} 
              />
              <div className="flex flex-col justify-start items-start w-full px-[14px] pb-[38px]">
                <p className="text-[18px] font-inter font-normal leading-[22px] text-center text-global-1">
                  {pet?.breed}
                </p>
                <p className="text-[22px] font-inter font-semibold leading-[27px] text-center text-global-1">
                  {pet?.name}
                </p>
                <p className="text-[18px] font-inter font-normal leading-[21px] text-left text-global-1 w-full mt-[14px]">
                  {pet?.location}
                </p>
                <p className="text-[14px] font-inter font-medium leading-[17px] text-left text-global-2 underline cursor-pointer hover:no-underline mt-[22px]">
                  View Details
                </p>
              </div>
            </div>
          ))}
        </div>
*/}

        {/* Pagination */}
        <div className="flex flex-row justify-start items-center w-full max-w-[724px] mx-auto mt-[46px] px-4">
          <div className="flex flex-row justify-end items-center flex-1">
            <div className="w-[34px] h-[34px] bg-global-3 rounded-[16px]"></div>
            <div className="flex flex-row justify-between items-start w-[48%] -ml-[22px]">
              <img 
                src="/images/img_vector_blue_200.svg" 
                className="w-[8px] h-[14px] self-center" 
                alt="previous" 
              />
              <p 
                className={`text-[18px] font-inter font-semibold leading-[22px] text-left mt-[4px] cursor-pointer ${currentPage === 1 ? 'text-global-1' : 'text-global-1'}`}
                onClick={() => handlePageChange(1)}
              >
                1
              </p>
              <p 
                className={`text-[18px] font-inter font-semibold leading-[22px] text-center w-[34px] self-center rounded-[16px] cursor-pointer ${currentPage === 2 ? 'text-global-7 bg-global-2' : 'text-global-1'}`}
                onClick={() => handlePageChange(2)}
              >
                2
              </p>
              {[3, 4, 5, 6, 7, 8]?.map((page) => (
                <p 
                  key={page}
                  className={`text-[18px] font-inter font-semibold leading-[22px] text-left mt-[4px] cursor-pointer ${currentPage === page ? 'text-global-7 bg-global-2' : 'text-global-1'}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </p>
              ))}
              <img 
                src="/images/img_arrow_right.svg" 
                className="w-[8px] h-[14px] self-center" 
                alt="next" 
              />
            </div>
          </div>
          <div className="w-[34px] h-[34px] bg-global-3 rounded-[16px] -ml-[22px]"></div>
        </div>

        {/* Footer Section */}
        <div 
          className="flex flex-row justify-start items-end w-full mt-[46px] py-[62px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/img_rectangle_11.png')" }}
        >
          <div className="flex flex-col gap-[32px] justify-start items-end w-full mt-[64px]">
            <img 
              src="/images/img_group_458.svg" 
              className="w-[34px] h-[20px] mr-[454px]" 
              alt="footer logo" 
            />
            
            <div className="flex flex-col justify-start items-center w-full">
              <div className="flex flex-row justify-between items-center w-full max-w-[1016px] mx-auto px-4">
                <h3 className="text-[28px] font-inter font-normal leading-[34px] text-center text-global-4">
                  <span className="font-bold">Stay </span>
                  <span className="font-normal">in the loop</span>
                </h3>
                <p className="text-[12px] font-inter font-normal leading-[15px] text-center text-global-1 self-start">
                  Sign In
                </p>
                <h3 className="text-[28px] font-inter font-normal leading-[34px] text-center text-global-4">
                  <span className="font-normal">About </span>
                  <span className="font-bold">PawLa</span>
                </h3>
              </div>
              
              <p className="text-[12px] font-inter font-normal leading-[15px] text-center text-global-1">
                Register
              </p>
              
              <div className="flex flex-row justify-start items-start w-full max-w-[1216px] mx-auto px-4 -mt-[2px]">
                <div className="flex flex-col justify-start items-end self-center flex-1">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className="text-[14px] font-inter font-normal leading-[16px] text-center text-global-1 w-[62%]">
                      Sign up to be the first to hear about any additions to our platform, news, promotions & specials offers
                    </p>
                    <p className="text-[12px] font-inter font-normal leading-[15px] text-center text-global-1 self-end mr-[174px]">
                      Privacy Policy
                    </p>
                  </div>
                  
                  <p className="text-[12px] font-inter font-normal leading-[15px] text-center text-global-1 mt-[14px] mr-[146px]">
                    Terms and Conditions
                  </p>
                  
                  <div className="flex flex-row justify-end items-center w-full px-[14px]">
                    <div className="flex flex-row justify-end items-center w-full border border-global-4">
                      <p className="text-[20px] font-koulen font-normal leading-[37px] text-center text-global-7 bg-global-4 px-[20px] py-[2px]">
                        SUBSCRIBE
                      </p>
                    </div>
                    <div className="flex flex-row gap-[18px] justify-center items-center self-end w-full px-[56px]">
                      <img 
                        src="/images/img_vector_purple_800.svg" 
                        className="w-[24px] h-[24px]" 
                        alt="social media" 
                      />
                      <img 
                        src="/images/img_group.svg" 
                        className="w-[24px] h-[24px]" 
                        alt="social media" 
                      />
                    </div>
                  </div>
                  
                  <img 
                    src="/images/img_group_427.svg" 
                    className="w-[34px] h-[20px] mt-[18px] mr-[352px]" 
                    alt="footer logo" 
                  />
                </div>
                
                <p className="text-[14px] font-inter font-normal leading-[16px] text-justify text-global-1 w-[30%] mt-[10px]">
                  Welcome to PawLa—your pet's new favourite place online! Need a walker, groomer, or someone to drop in while you are out? We have got them. Looking to shop, adopt, or reunite with a lost buddy? We have got that too! Everything for your furry, feathery, or scaly friend—all in one happy spot.
                </p>
              </div>
              
              <div className="flex flex-row justify-center items-center w-full bg-global-5 py-[4px] px-[4px] mt-[16px]">
                <p className="text-[12px] font-inter font-normal leading-[15px] text-center text-global-7 self-end mt-[4px]">
                  Copyright © 2025 PawLa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LostFoundSearch;