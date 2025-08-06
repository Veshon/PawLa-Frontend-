import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// Your component
const PetSlider = () => {
  const lostPets = [
    {
      id: 1,
      name: 'Ruby',
      breed: 'Golden Retriever',
      image: '/images/img_molly_006_2829x1886_2726x1886.png',
      lastSeen: 'Last Seen near CCC-Colombo, 12th May 2025'
    },
    {
      id: 2,
      name: 'Lara',
      breed: 'Domestic shorthan',
      image: '/images/img_molly_006_2829x1886_2726x1886_196x284.png',
      lastSeen: 'Last Seen near Town Hall-Kalutara, 12th May 2025'
    },
    {
      id: 3,
      name: 'Dudu',
      breed: 'Domestic shorthan',
      image: '/images/img_molly_006_2829x1886_2726x1886_1.png',
      lastSeen: 'Last Seen near CCC-Colombo, 12th May 2025'
    },
    {
      id: 4,
      name: 'Dudu',
      breed: 'Domestic shorthan',
      image: '/images/img_molly_006_2829x1886_2726x1886_1.png',
      lastSeen: 'Last Seen near CCC-Colombo, 12th May 2025'
    },
    {
      id: 5,
      name: 'Lara',
      breed: 'Domestic shorthan',
      image: '/images/img_molly_006_2829x1886_2726x1886_196x284.png',
      lastSeen: 'Last Seen near Town Hall-Kalutara, 12th May 2025'
    },
    {
      id: 6,
      name: 'Ruby',
      breed: 'Golden Retriever',
      image: '/images/img_molly_006_2829x1886_2726x1886.png',
      lastSeen: 'Last Seen near CCC-Colombo, 12th May 2025'
    }
  ];

  return (
    <div className="lg:w-3/4 relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
        className="pb-12" // Add padding for pagination
      >
        {lostPets.map((pet) => (
          <SwiperSlide key={pet.id}>
            <div className="border border-[#e6a033] rounded-[20px] overflow-hidden h-full">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-[196px] object-cover rounded-t-[20px]"
              />
              <div className="p-4">
                <p className="text-[18px] font-inter font-normal text-black text-center mb-1">
                  {pet.breed}
                </p>
                <h3 className="text-[22px] font-inter font-semibold text-black text-center mb-4">
                  {pet.name}
                </h3>
                <p className="text-[18px] font-inter font-normal text-black leading-[21px] mb-6">
                  {pet.lastSeen}
                </p>
                <a href="#" className="text-[14px] font-inter font-medium text-[#067bce] underline">
                  View Details
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional: Custom styling for navigation buttons */}
      {/*<style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #e6a033;
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        .swiper-pagination-bullet-active {
          background: #e6a033;
        }
      `}</style>*/}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #FAECD9;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
            background: #E6A033 !important;
        }
      `}
      </style>
    </div>
  );
};

export default PetSlider;