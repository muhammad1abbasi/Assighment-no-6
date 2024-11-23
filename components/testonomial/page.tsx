"use client"
import { useState } from "react";
import Image from "next/image";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      stars: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, dui a sodales ultrices, odio.",
      name: "James Nduku",
      role: "Software Developer",
      image: "/images/josephKala.svg",
    },
    {
      id: 2,
      stars: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in velit nec velit malesuada placerat.",
      name: "Erik Kipkamboi",
      role: "Scrum Master",
      image: "/images/eric.svg",
    },
    {
      id: 3,
      stars: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla nisl sit amet suscipit blandit.",
      name: "Stephen Kerubo",
      role: "UI/UX designer",
      image: "/images/johnbaleckDavil.svg",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 text-left">
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
          Customer Testimonials
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor leo eu velit mollis, nec tincidunt justo malesuada.
        </p>

        
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border-2 border-black p-6  shadow-lg">
              <div className="flex justify-start mb-4">
                
                <div className="flex space-x-1 text-black">
                  {"★".repeat(testimonial.stars)}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover rounded-full"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-black">{testimonial.name}</h2>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="lg:hidden relative">
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-start mb-4">
              
              <div className="flex space-x-1 text-black">
                {"★".repeat(testimonials[currentIndex].stars)}
              </div>
            </div>
            <p className="text-gray-600 mb-4">{testimonials[currentIndex].text}</p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="object-cover rounded-full"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-black">{testimonials[currentIndex].name}</h2>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          
          <div className="flex justify-end items-center mt-6 gap-3">
            <button
              onClick={handlePrev}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
