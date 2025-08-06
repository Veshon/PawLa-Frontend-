import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import Dropdown from '../../components/ui/Dropdown';
import DatePicker2 from '@/components/common/DatePicker2.jsx';
import DatePicker from '@/components/common/DatePicker.jsx';
import PetSelection from '@/components/common/PetSelection.jsx';
import PetSlider from '@/components/common/PetSlider.jsx';
import TestimonialSlider from '@/components/common/TestimonialSlider.jsx';

const HomePage = () => {
  const [selectedPetType, setSelectedPetType] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPetSelection, setShowPetSelection] = useState(false);

  const petTypes = [
    { label: 'Puppy (Under 6 months)', value: 'puppy' },
    { label: 'Dog (Over 6 months)', value: 'dog' },
    { label: 'Cat', value: 'cat' },
    { label: 'Rabbit', value: 'rabbit' },
    { label: 'Other', value: 'other' }
  ];

  const services = [
    { label: 'Pet Boarding', value: 'boarding' },
    { label: 'Pet Sitting', value: 'sitting' },
    { label: 'Drop-In Visit', value: 'dropin' },
    { label: 'Day Care', value: 'daycare' },
    { label: 'Other', value: 'other' }
  ];

  const districts = [
    { label: 'Colombo', value: 'colombo' },
    { label: 'Kalutara', value: 'kalutara' },
    { label: 'Gampaha', value: 'gampaha' },
    { label: 'Kandy', value: 'kandy' }
  ];

  const faqItems = [
    { question: 'Can i trust pet sitters?', isOpen: false },
    { question: 'Can i meet a pet sitter before booking?', isOpen: false },
    { question: 'How to become a pet sitter how to make money from pet sitting?', isOpen: false },
    { question: 'What is pet sitting?', isOpen: true, answer: 'Pet Sitting is a service through which a pet care professional minds your dog, cat, puppy, bird, or other pet. Depending on the preferences of the Pet Owner, Pet Sitting can occur either at the Owner\'s or the Sitter\'s house. In the former case, Pet Sitters can offer Pet House Sitting, by which they mind your home and your furbaby.' },
    { question: 'How the payment process is working?', isOpen: false },
    { question: 'How to cancel a booking?', isOpen: false }
  ];

  const services_offered = [
    'Find nearest caring persons , pet walkers, trainers, servicing persons fast',
    'Purchase and sell pet accessories and food',
    'Find nearest vet',
    'Find best pet for adopt or buy and sell pet',
    'Find pet for mating',
    'All-in-one place for all your pet needs'
  ];

  return (
    <div className="w-full bg-white">
      <Header />
      {/* Hero Section */}
      <section 
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/img_viewcatsdogsbeingfriends_1.png')" }}
      >
        <div className="w-full max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="flex flex-col items-center text-center">
            {/* Hero Text */}
            <div className="mb-8 sm:mb-12 md:mb-16">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
                <h1 className="text-[18px] sm:text-[24px] md:text-[30px] font-poppins font-light text-[#d15634] leading-tight">
                  Because your <span className="font-bold">Pet</span>
                </h1>
                <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-poppins font-light text-[#d15634] leading-tight">
                  Deserves the <span className="font-bold">Best</span>
                </h2>
              </div>
              <p className="text-[20px] sm:text-[26px] md:text-[34px] lg:text-[40px] font-poppins font-extrabold text-white leading-tight">
                <span className="text-[26px] sm:text-[30px] md:text-[34px]">Find</span> trusted pet sitters, walkers near you
              </p>
            </div>

            {/* Search Form */}
            <div className="w-full max-w-4xl bg-white rounded-[20px] p-4 sm:p-6 lg:p-8 shadow-[0px_4px_20px_#0000000c]">
              {/* Pet Selection */}
              <div className="mb-6">
                <h3 className="text-[16px] font-inter font-semibold text-[#5b5f6b] mb-4">
                  Who needs looking after
                </h3>
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
                  {/* Puppy */}
                  <div className="flex items-center bg-[#e6a033] border border-[#e6a033] rounded-[12px] px-2 py-2 sm:px-3 sm:py-3">
                    <div className="flex flex-col mr-2">
                      <span className="text-[14px] font-inter font-medium text-white">Puppy</span>
                      <span className="text-[10px] font-inter font-medium text-white">Under 6 months</span>
                    </div>
                    <img src="/images/img_vector.svg" alt="Puppy" className="w-[30px] h-[24px] sm:w-[36px] sm:h-[30px]" />
                  </div>

                  {/* Dog */}
                  <div className="flex items-center border border-[#e6a033] rounded-[12px] px-2 py-2 sm:px-3 sm:py-3">
                    <div className="flex flex-col mr-2">
                      <span className="text-[14px] font-inter font-medium text-[#e6a033]">Dog</span>
                      <span className="text-[10px] font-inter font-medium text-[#e6a033]">Over 6 months</span>
                    </div>
                    <img src="/images/img_vector_yellow_800.svg" alt="Dog" className="w-[30px] h-[24px] sm:w-[36px] sm:h-[30px]" />
                  </div>

                  {/* Cat */}
                  <div className="w-[140px] flex items-center justify-center gap-12 border border-[#e6a033] rounded-[12px] px-2 py-2 sm:px-3 sm:py-3">
                    <span className="text-[14px] font-inter font-medium text-[#e6a033]">Cat</span>
                    <img
                      src="/images/img_vector_yellow_800_18x24.svg"
                      alt="Rabbit"
                      className="w-[22px] h-[24px] sm:w-[26px] sm:h-[30px]"
                    />
                  </div>

                  {/* Rabbit */}
                  <div className="w-[140px] flex items-center justify-center gap-8 border border-[#e6a033] rounded-[12px] px-2 py-2 sm:px-3 sm:py-3">
                    <span className="text-[14px] font-inter font-medium text-[#e6a033] mr-2">Rabbit</span>
                    <img src="/images/img_vector_yellow_800_30x26.svg" alt="Rabbit" className="w-[22px] h-[24px] sm:w-[26px] sm:h-[30px]" />
                  </div>

                  {/* Other */}
                  <div className="flex items-center border border-[#e6a033] rounded-[12px] px-3 py-3">
                    <span className="text-[14px] font-inter font-medium text-[#e6a033] mr-2">Other :</span>
                    <span className="text-[14px] font-inter font-normal text-[#e6a033] mr-2">Please Select</span>
                    <img src="/images/img_vector_yellow_800_8x12.svg" alt="Dropdown" className="w-[12px] h-[8px]" />
                  </div>
                </div>

                <PetSelection></PetSelection>
                {/*<button*/}
                {/*  type="button"*/}
                {/*  className="flex items-center bg-transparent border-none p-0 cursor-pointer hover:opacity-80 transition-opacity"*/}
                {/*  onClick={() => setShowPetSelection(true)}*/}
                {/*>*/}
                {/*  <img*/}
                {/*    src="/images/img_vector_yellow_800_12x12.svg"*/}
                {/*    alt=""*/}
                {/*    className="w-[12px] h-[12px] mr-1"*/}
                {/*    aria-hidden="true"*/}
                {/*  />*/}
                {/*  <span className="text-[14px] font-inter font-medium text-[#e6a033] underline">*/}
                {/*      add another pet*/}
                {/*  </span>*/}
                {/*</button>*/}
              </div>

              {/* Service Selection */}
              <div className="mb-6">
                <h3 className="text-[16px] font-inter font-semibold text-[#5b5f6b] mb-4">
                  Select the service
                </h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {/* Pet Boarding */}
                  <div className="w-[140px] h-[60px] flex items-center bg-[#e6a033] border border-[#e6a033] rounded-[12px] px-3 py-3">
                    <span className="text-[14px] font-inter font-medium text-white mr-2">Pet Boarding</span>
                    <img src="/images/img_vector_white_a700.svg" alt="Boarding" className="w-[16px] h-[20px]" />
                  </div>

                  {/* Pet Sitting */}
                  <div className="w-[145px] flex items-center gap-4 border border-[#e6a033] rounded-[12px] px-3 py-3">
                    <span className="text-[14px] font-inter font-medium text-[#e6a033] mr-2">Pet Sitting</span>
                    <img src="/images/img_group.svg" alt="Sitting" className="w-[26px] h-[20px]" />
                  </div>

                  {/* Drop-In Visit */}
                  <div className="w-[142px] flex items-center border border-[#e6a033] rounded-[12px] px-3 py-3">
                    <span className="text-[14px] font-inter font-medium text-[#e6a033] mr-2">Drop-In Visit</span>
                    <img src="/images/img_bone_crack_svgrepo_com.svg" alt="Visit" className="w-[20px] h-[20px]" />
                  </div>

                  {/* Day Care */}
                  <div className="w-[140px] relative flex items-center border border-[#e6a033] rounded-[12px] px-3 py-3">
                    <span className="text-[14px] font-inter font-medium text-[#e6a033]">Day Care</span>
                    <img src="/images/img_group_yellow_800.svg" alt="Day Care" className="absolute top-4 right-2 w-[20px] h-[20px]" />
                  </div>

                  {/* Other */}
                  <div className="flex items-center border border-[#e6a033] rounded-[12px] px-3 py-3">
                    <span className="text-[14px] font-inter font-medium text-[#e6a033] mr-2">Other :</span>
                    <span className="text-[14px] font-inter font-normal text-[#e6a033] mr-2">Please Select</span>
                    <img src="/images/img_vector_yellow_800_8x12.svg" alt="Dropdown" className="w-[12px] h-[8px]" />
                  </div>
                </div>
              </div>

              {/* Location and Date Selection */}
              <div className="flex flex-col lg:flex-row gap-4 items-end">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row gap-4 mb-4 lg:mb-0">
                    <div className="flex-1">
                      <h3 className="text-[16px] font-inter font-semibold text-[#5b5f6b] mb-2">Your District</h3>
                      <Dropdown
                        placeholder="District"
                        options={districts}
                        value={selectedDistrict}
                        onChange={(option) => setSelectedDistrict(option?.value)}
                        fullWidth
                        rightImage={{
                          src: "/images/img_vector_yellow_800_8x12.svg",
                          width: 12,
                          height: 18
                        }}
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-[16px] font-inter font-semibold text-[#5b5f6b] mb-2">For these days</h3>
                      <div className="flex gap-2 items-center">
                        <div className="relative flex-1 ">
                          <DatePicker2></DatePicker2>
                        </div>
                        
                        <img src="/images/img_arrow_right.svg" alt="Arrow" className="w-[24px] h-[12px]" />
                        
                        <div className="relative flex-1">
                          <DatePicker></DatePicker>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="primary"
                  className=" w-[140px] h-[45px] bg-[#D15735] mb-[7px] text-white px-8 py-3 rounded-[26px] shadow-[0px_4px_10px_#0000000c] hover:bg-[#E6A033]"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lost Pets Section */}
      <section className="w-full py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="lg:w-1/4">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-poppins font-extrabold text-black leading-tight mb-4">
                Help <span className="font-normal">find these fury babies</span>
              </h2>
              <p className="text-[16px] font-inter font-normal text-[#979797] leading-[20px] mb-8">
                Lend your hand to fast-find these fur babies. if you seen any of them anywhere please call the contact number provided or contact us on 033-3354-3344 or 033-4435-4356 for further details.
              </p>
              <Button
                variant="primary"
                className=" !bg-[#d15634] h-[50px] text-white px-6 py-4 rounded-[14px] shadow-[0px_4px_10px_#0000000c] hover:!bg-[#E6A033]"
              >
                Help Reunite a Pet
              </Button>
            </div>

            {/* Pet Cards */}
            <PetSlider></PetSlider>
          </div>
        </div>
      </section>

      {/* Adoption and Training Section */}
      <section className="w-full py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:w-1/3 order-2 lg:order-1">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-poppins font-extrabold text-black leading-tight mb-6">
                Give <span className="font-normal">Loving Home to a Fur baby</span>
              </h2>
              <p className="text-[16px] font-inter font-normal text-[#979797] leading-[20px] mb-8">
                Somewhere out there, a lonely paw is waiting for the warmth of your heart. Open your home, change a life, and gain a loyal friend who will love you unconditionally — not just for a moment, but for a lifetime.
              </p>
              <Button
                variant="primary"
                className="!bg-[#d15634] h-[50px] text-white px-8 py-4 rounded-[14px] shadow-[0px_4px_10px_#0000000c] hover:!bg-[#E6A033]"
              >
                Adopt a Pet
              </Button>
            </div>

            {/* Center Images */}
            <div className="lg:w-1/3 order-1 lg:order-2">
              <div className="flex flex-col gap-3">
                <img 
                  src="/images/img_cute_australian.png" 
                  alt="Cute Australian"
                  className="w-full h-[280px] object-cover rounded-[30px]"
                />
                <img 
                  src="/images/img_cute_australian_286x280.png" 
                  alt="Cute Australian 2"
                  className="w-full h-[286px] object-cover rounded-[30px]"
                />
              </div>
            </div>

            {/* Right Content - Training */}
            <div className="lg:w-2/3 order-3 relative">
              <div className="relative">
                <img 
                  src="/images/img_front_view_cute.png" 
                  alt="Training"
                  className="w-full h-[676px] object-cover rounded-[30px]"
                />
                <div className="absolute top-20 left-5 right-5 text-white">
                  <h3 className="text-[28px] sm:text-[32px] md:text-[36px] text-[black] font-poppins font-extrabold leading-tight mb-4">
                    Training <span className="font-normal">that works</span>
                  </h3>
                  <p className="text-[16px] font-inter font-normal leading-[25px] mb-6">
                    Turning Paw-some Pets into Well-Mannered Companions
                  </p>
                  <Button
                    variant="primary"
                    className="!bg-[#752890] h-[50px] text-white px-8 py-4 rounded-[14px] shadow-[0px_4px_10px_#0000000c] hover:bg-[#5f1f73]"
                  >
                    Find Trainers
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="w-full py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Image and Process */}
            <div className="w-full lg:w-1/2 transform -translate-x-32 relative left-[-30px]">
              <div
                className="relative w-full h-[792px] bg-cover bg-center rounded-[40px]"
                style={{ backgroundImage: "url('/images/img_happy_woman_with_dog.png')" }}
              >
                {/*purple box with the 3 functions*/}
                <div className="!bg-[#752991] absolute right-[-100px] w-[158px] h-[600px] top-1/2 transform -translate-y-1/2 bg-button-1 rounded-[20px] p-8 mr-8">
                  <div className="flex flex-col items-center gap-16">
                    {/* Search Step */}
                    <div className="flex flex-col items-center ">
                      <img
                        src="/images/img_searching_svgrepo_com.svg"
                        alt="search"
                        className="w-[42px] h-[48px] mb-2"
                      />
                      <span className="text-2xl font-normal text-[white]">
                        Search
                      </span>
                    </div>

                    {/* Book & Pay Step */}
                    <div className="bg-[#87CEEB] rounded-lg p-8 flex flex-col items-center">
                      <div className="flex items-center mb-2">
                        <img
                          src="/images/img_playing_with_bu.svg"
                          alt="booking"
                          className="w-[26px] h-[48px]"
                        />
                        <img
                          src="/images/img_rectangle_35.svg"
                          alt="payment"
                          className="w-[16px] h-[10px] ml-2"
                        />
                      </div>
                      <span className="text-2xl font-normal text-[white] text-center leading-tight">
                        Book & Pay
                      </span>
                    </div>

                    {/* Relax Step */}
                    <div className="flex flex-col items-center">
                      <img
                        src="/images/img_hammock_svgrepo_com.svg"
                        alt="relax"
                        className="w-[70px] h-[30px] mb-2"
                      />
                      <span className="text-2xl font-normal text-[white]">
                        Relax
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-poppins leading-tight mb-8">
                What We <span className="font-extrabold">Offer</span>
              </h2>
              
              <div className="flex gap-4">
                {/* Icons Column */}
                <div className="flex flex-col gap-8">
                  {services_offered?.map((_, index) => (
                    <img 
                      key={index}
                      src="/images/img_vector_blue_200.svg" 
                      alt="Service icon"
                      className="w-[20px] h-[20px]"
                    />
                  ))}
                </div>
                
                {/* Services Column */}
                <div className="flex-1 flex flex-col gap-8">
                  {services_offered?.map((service, index) => (
                    <p key={index} className="text-[16px] font-inter font-normal text-black leading-[20px]">
                      {service}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />
{/*
      <section className="w-full py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-poppins font-normal text-center mb-12">
            What Our Paw Parents <span className="font-extrabold">Say</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials?.map((testimonial) => (
              <div key={testimonial?.id} className="border-2 border-[#e6a033] rounded-[30px] p-6 text-center">
                <img 
                  src={testimonial?.image} 
                  alt={testimonial?.name}
                  className="w-[124px] h-[124px] rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-[18px] font-inter font-medium text-black mb-1">
                  -{testimonial?.name}-
                </h3>
                <p className="text-[14px] font-poppins font-light text-black mb-6">
                  {testimonial?.title}
                </p>
                <p className="text-[16px] font-poppins font-light text-black leading-[24px] text-center">
                  {testimonial?.testimonial}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <img src="/images/img_group_430.svg" alt="Pagination" className="w-[34px] h-[12px] mx-auto" />
          </div>
        </div>
      </section>
*/}

      {/* Pet Store Section */}
      <section className="w-full bg-[#752890] py-12 sm:py-16 md:py-20 relative overflow-visible">
        <div className="w-full max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-poppins font-extrabold text-white leading-tight mb-6">
              Fuel <span className="font-normal">Their Happiness with Every Bite</span>
            </h2>
            <p className="text-[16px] font-inter font-normal text-white leading-[22px] max-w-2xl mx-auto mb-16">
              Got a spoiled fur baby? We have got the goods! From yummy snacks and squeaky toys to fluffy beds and fancy leashes—our Pet Store is your one-stop shop for all things pawsome. why wait? Do a quick shoping
            </p>
            <Button
              variant="primary"
              className="!bg-[#d15634] text-white px-8 py-4 rounded-[14px] shadow-[0px_4px_10px_#0000000c] hover:!bg-[#c24d2c]"
            >
              Shop Now
            </Button>
          </div>
        </div>
        
        {/* Background Images */}
        <div className="relative top-[150px]">
        <img 
          src="/images/img_photo_illustrat.png" 
          alt="Pet illustration"
          className="absolute left-0 bottom-0 w-[294px] h-[424px] rounded-[40px]"
        />
        <img 
          src="/images/img_cute_little_dog.png" 
          alt="Cute little dog"
          className="absolute right-0 bottom-0 w-[284px] h-[424px] rounded-[40px]"
        />
        </div>
      </section>

      {/* Divider */}
      <div className="w-full py-6 relative top-[150px]">
        <div className="w-full max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8">
          <img src="/images/img_group_548.png" alt="Divider" className="w-full h-[24px]" />
        </div>
      </div>

      {/* FAQ Section */}
      <section 
        className="w-full py-0 pb-0 sm:py-16 md:py-0 bg-cover bg-center bg-no-repeat relative top-[-200px]"
        // style={{ backgroundImage: "url('/images/img_rectangle_11.png')" }}
      >
        <div className="w-full max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#E6C9FF33] h-[800px] rounded-t-[100px] p-8 sm:p-12 lg:p-16 relative top-[400px]">
            <h2 className="text-[32px] sm:text-[36px] font-poppins font-extrabold text-[#752890] text-center mb-12">
              FAQ
            </h2>
            
            <div className="space-y-6">
              {faqItems?.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-6">
                    <img 
                      src={item?.isOpen ? "/images/img_vector_yellow_800_24x24.svg" : "/images/img_vector_purple_800.svg"} 
                      alt="FAQ icon" 
                      className="w-[24px] h-[24px]" 
                    />
                    <h3 className="text-[16px] font-inter font-medium text-black">
                      {item?.question}
                    </h3>
                  </div>
                  {item?.isOpen && item?.answer && (
                    <div className="mt-4 ml-12">
                      <p className="text-[14px] font-inter font-normal text-black leading-[16px] text-justify">
                        {item?.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full h-[500px] py-5 sm:py-16 relative bg-no-repeat"
              style={{
                backgroundImage: "url('/images/img_rectangle_11.png')",
                backgroundSize: '100% auto',
              }}
      >
        <div className="w-full pt-[100px] max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer Top */}
          <div className="text-center mb-8">
            <img src="/images/img_group_458.svg" alt="Footer logo" className="w-[34px] h-[20px] mx-auto mb-8" />
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
            {/* Stay in the loop */}
            <div className="lg:w-1/3">
              <h3 className="text-[28px] font-inter text-[#752890] mb-4">
                <span className="font-bold">Stay</span> in the loop
              </h3>
              <p className="text-[14px] font-inter font-normal text-black leading-[16px] mb-6">
                Sign up to be the first to hear about any additions to our platform, news, promotions & specials offers
              </p>
              
              <div className="flex border border-[#752890] rounded">
                <div className="flex-1"></div>
                <button className="bg-[#752890] text-white px-5 py-2 text-[20px] font-koulen">
                  SUBSCRIBE
                </button>
              </div>
              
              <div className="flex gap-4 justify-center mt-6">
                <img src="/images/img_vector_purple_800_24x24.svg" alt="Social" className="w-[24px] h-[24px]" />
                <img src="/images/img_group_purple_800.svg" alt="Social" className="w-[24px] h-[24px]" />
              </div>
            </div>

            {/* Links */}
            <div className="lg:w-1/3 text-center">
              <div className="space-y-2">
                <a href="#" className="block text-[12px] font-inter font-normal text-black">Sign In</a>
                <a href="#" className="block text-[12px] font-inter font-normal text-black">Register</a>
                <a href="#" className="block text-[12px] font-inter font-normal text-black">Privacy Policy</a>
                <a href="#" className="block text-[12px] font-inter font-normal text-black">Terms and Conditions</a>
              </div>
            </div>

            {/* About PawLa */}
            <div className="lg:w-1/3">
              <h3 className="text-[28px] font-inter text-[#752890] mb-4">
                About <span className="font-bold">PawLa</span>
              </h3>
              <p className="text-[14px] font-inter font-normal text-black leading-[16px] text-justify">
                Welcome to PawLa—your pet is new favourite place online! Need a walker, groomer, or someone to drop in while you are out? We have got them. Looking to shop, adopt, or reunite with a lost buddy? We have got that too! Everything for your furry, feathery, or scaly friend—all in one happy spot.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <img src="/images/img_group_427.svg" alt="Footer decoration" className="w-[34px] h-[20px] mx-auto mb-4" />
          </div>
        </div>
        
        {/* Copyright */}
        <div className="w-full bg-[#e6a033] py-2">
          <div className="w-full max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[12px] font-inter font-normal text-white">
              Copyright © 2025 PawLa
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;