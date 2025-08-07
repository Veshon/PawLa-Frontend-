import { useState } from 'react';

const FAQSection = () => {

  const initialFaqItems = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused products.",
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order using the tracking number sent to your email.",
    },
    {
      question: "What is your order?",
      answer: "You can track your order using the tracking number sent to your email.",
    },
    {
      question: "What is pet sitting?",
      answer: "Pet Sitting is a service through which a pet care professional minds your dog, cat, puppy, bird, or other pet. Depending on the preferences of the Pet Owner, Pet Sitting can occur either at the Owner's or the Sitter's house. In the former case, Pet Sitters can offer Pet House Sitting, by which they mind your home and your furbaby.",
    },
  ];

  // State to track which items are open
  const [faqItems, setFaqItems] = useState(
    initialFaqItems.map(item => ({ ...item, isOpen: false }))
  );

  // Toggle FAQ item open/closed
  const toggleFAQ = (index) => {
    setFaqItems(prevItems =>
      prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false, // Close others when opening one
      }))
    );
  };

  return (
    <div className="space-y-6">
      {faqItems?.map((item, index) => (
        <div key={index} className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center gap-6 w-full text-left group"
            onClick={() => toggleFAQ(index)}
            aria-expanded={item?.isOpen}
          >
            {/* Toggle icon with background images */}
            <div className="relative w-[24px] h-[24px]">
              {/* Purple plus icon (default state) */}
              <div
                className={`absolute inset-0 bg-[url('/images/img_vector_purple_800.svg')] bg-center bg-no-repeat bg-contain transition-all duration-200 ${
                  item?.isOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                }`}
              />
              {/* Yellow icon (expanded state) */}
              <div
                className={`absolute inset-0 bg-[url('/images/img_vector_yellow_800_24x24.svg')] bg-center bg-no-repeat bg-contain transition-all duration-200 ${
                  item?.isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              />
            </div>

            <h3 className="text-[16px] font-inter font-medium text-black group-hover:text-[#E6A033] transition-colors duration-200">
              {item?.question}
            </h3>
          </button>

          {item?.isOpen && item?.answer && (
            <div className="mt-4 ml-12 animate-fadeIn">
              <p className="text-[14px] font-inter font-normal text-black leading-[24px] text-justify">
                {item?.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;