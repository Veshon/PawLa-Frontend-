import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jane Doe',
      title: 'Owner of Timy',
      image: '/images/img_adorable_chihua.png',
      testimonial: 'I was nervous to leave Timy with strangers, but my worries quickly faded. Going forward pawla will be my first choice for pet sitting.keep it up pawLa team'
    },
    {
      id: 2,
      name: 'Alice Ray',
      title: 'Owner of Ruby',
      image: '/images/img_adorable_chihua_124x124.png',
      testimonial: 'Thanks to this PawLa site i found my little fur baby. i was so broken and down then. heart-felt thanks to this site. wish you all the best for your future works.'
    },
    {
      id: 3,
      name: 'Paula Kate',
      title: 'Owner of Molly',
      image: '/images/img_adorable_chihua_1.png',
      testimonial: 'My sitter took great care of my cat, above and beyond my whole expectations. I would book with PawLa again in a heartbeat! Thank you so much!'
    },
    {
      id: 4,
      name: 'Alice Ray',
      title: 'Owner of Ruby',
      image: '/images/img_adorable_chihua_124x124.png',
      testimonial: 'Thanks to this PawLa site i found my little fur baby. i was so broken and down then. heart-felt thanks to this site. wish you all the best for your future works.'
    },
    {
      id: 5,
      name: 'Jane Doe',
      title: 'Owner of Timy',
      image: '/images/img_adorable_chihua.png',
      testimonial: 'I was nervous to leave Timy with strangers, but my worries quickly faded. Going forward pawla will be my first choice for pet sitting.keep it up pawLa team'
    },
    {
      id: 6,
      name: 'Paula Kate',
      title: 'Owner of Molly',
      image: '/images/img_adorable_chihua_1.png',
      testimonial: 'My sitter took great care of my cat, above and beyond my whole expectations. I would book with PawLa again in a heartbeat! Thank you so much!'
    }
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-poppins font-normal text-center mb-12">
          What Our Paw Parents <span className="font-extrabold">Say</span>
        </h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '.testimonial-pagination',
            renderBullet: (index, className) => {
              return `<span class="${className} bg-[#e6a033]"></span>`;
            }
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="border-2 border-[#e6a033] rounded-[30px] p-6 text-center h-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[124px] h-[124px] rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-[18px] font-inter font-medium text-black mb-1">
                  -{testimonial.name}-
                </h3>
                <p className="text-[14px] font-poppins font-light text-black mb-6">
                  {testimonial.title}
                </p>
                <p className="text-[16px] font-poppins font-light text-black leading-[24px] text-center">
                  {testimonial.testimonial}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination container */}
        <div className="testimonial-pagination flex justify-center gap-2 mt-6"></div>
      </div>
    </section>
  );
};

export default TestimonialSlider;