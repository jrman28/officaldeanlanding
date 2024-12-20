"use client";
import React from "react";
import "core-js/stable";
import "regenerator-runtime/runtime";
import {
  FaBars,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaWifi,
  FaLaptop,
  FaDumbbell,
  FaUtensils,
  FaTv,
  FaConciergeBell,
} from "react-icons/fa";

function MainComponent() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [activeAccordion, setActiveAccordion] = React.useState(null);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const testimonials = [
    {
      quote:
        "The Dean at Maverick exceeded all our expectations! The spacious rooms, modern amenities, and especially the exercise room were perfect for our extended stay. The location near Huntsville's attractions made it ideal.",
      author: "James H., Business Traveler",
    },
    {
      quote:
        "Perfect venue for our corporate retreat! The workspace and meeting areas were excellent, and the optional breakfast service was a great touch.",
      author: "Linda K., Corporate Event Planner",
    },
    {
      quote:
        "Incredible space for our family reunion. The multiple bedrooms and fully equipped kitchen made hosting our large group a breeze. The proximity to Redstone Arsenal was perfect for our military family.",
      author: "Robert M., Family Reunion Host",
    },
    {
      quote:
        "We loved the modern amenities and spacious layout. The exercise room was a fantastic bonus, and the location made exploring Huntsville so convenient.",
      author: "Sarah P., Vacation Traveler",
    },
    {
      quote:
        "Outstanding accommodations for our extended business stay. The workspace was perfect for remote work, and the comfortable bedrooms ensured restful nights.",
      author: "Michael T., Business Executive",
    },
  ];

  const images = [
    {
      src: "https://ucarecdn.com/2ab3c613-ef1b-449b-a3af-464bb18b8d7c/-/format/auto/",
      alt: "Exterior view of our cozy cabin",
    },
    {
      src: "https://ucarecdn.com/4712c427-2ee4-4dd8-a5d8-863d498ea435/-/format/auto/",
      alt: "Interior view of our cozy cabin living room",
    },
    {
      src: "https://ucarecdn.com/7fab8121-1225-46dd-a2e1-e3758e622b29/-/format/auto/",
      alt: "Cozy bedroom in our mountain cabin",
    },
    {
      src: "https://ucarecdn.com/be082440-abc8-45e9-a192-ef7419f14d23/-/format/auto/",
      alt: "Stunning mountain view from the cabin deck",
    },
    {
      src: "https://ucarecdn.com/1e819025-ac4f-4483-8393-54e8fef1573a/-/format/auto/",
      alt: "Beautiful brick house with black shutters and landscaped front yard",
    },
    {
      src: "https://ucarecdn.com/6fe58e93-cf39-437d-a0f9-ae74839f9b08/-/format/auto/",
      alt: "Beautiful brick house with black shutters and landscaped front yard",
    },
    {
      src: "https://ucarecdn.com/9f9f4489-c083-4bb5-950d-389bea175ffa/-/format/auto/",
      alt: "Beautiful brick house with black shutters and landscaped front yard",
    },
    {
      src: "https://ucarecdn.com/7b2f24bc-9578-4adb-88e7-e83bd4fe4a27/-/format/auto/",
      alt: "Beautiful brick house with black shutters and landscaped front yard",
    },
    {
      src: "https://ucarecdn.com/b272f367-a86e-4db0-99a6-c3834eff8330/-/format/auto/",
      alt: "Beautiful brick house with black shutters and landscaped front yard",
    },
    {
      src: "https://ucarecdn.com/5c810965-5c1e-4ba4-bb80-7987d9bdc211/-/format/auto/",
      alt: "Beautiful brick house with black shutters and landscaped front yard",
    },
    {
      src: "https://ucarecdn.com/36ec96d6-2b4e-437f-b374-9025c6d003d8/-/format/auto/",
      alt: "Elegant master bedroom with wooden sleigh bed and sitting area",
    },
    {
      src: "https://ucarecdn.com/d31f078c-e2a7-4221-8af7-2ef3ded07ced/-/format/auto/",
      alt: "Modern bathroom with glass shower enclosure and elegant fixtures",
    },
    {
      src: "https://ucarecdn.com/7154806d-4680-4e4b-95c8-12a8d2443775/-/format/auto/",
      alt: "Luxurious bathroom with freestanding tub and modern lighting fixture",
    },
    {
      src: "https://ucarecdn.com/e260edd9-058f-4edd-936b-938760684751/-/format/auto/",
      alt: "Spacious modern bathroom with double doors and hardwood flooring",
    },
    {
      src: "https://ucarecdn.com/31f1f321-4d97-4842-9b03-2e0c7a2ecfaf/-/format/auto/",
      alt: "Cozy bunk bed room with wooden furniture and ceiling fan",
    },
    {
      src: "https://ucarecdn.com/8bab6622-3092-4d21-bccd-7cecbb532c6e/-/format/auto/",
      alt: "Modern bathroom with white subway tile and built-in shower niche",
    },
    {
      src: "https://ucarecdn.com/bb7ce1e2-459e-4b18-921f-2381fddb8c3b/-/format/auto/",
      alt: "Modern bathroom with marble countertop and vessel sink",
    },
    {
      src: "https://ucarecdn.com/87986bb7-7654-4ca0-bfe6-57d9ddf76bae/-/format/auto/",
      alt: "Modern bedroom with black headboard and white bedding",
    },
    {
      src: "https://ucarecdn.com/48e64398-ab8c-4aee-8112-7a88f3a5486d/-/format/auto/",
      alt: "Modern bathroom with black framed glass shower enclosure and white subway tile",
    },
    {
      src: "https://ucarecdn.com/bcd84d5e-acac-4562-9053-63ce2f5c48eb/-/format/auto/",
      alt: "Well-equipped exercise room with recumbent bike and punching bag",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2) % images.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 2 + images.length) % images.length);
  };
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [isMenuOpen]);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="font-playfair text-gray-800 min-h-screen">
      <header className="bg-teal-500 text-white p-4 sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-tangerine">The Dean At Maverick</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-teal-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#main-content" className="hover:text-teal-200">
                  About
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-teal-200">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-200">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="mailto:thedeanatmaverick@gmail.com"
                  className="hover:text-teal-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-teal-500 text-white fixed top-[60px] left-0 right-0 z-50">
          <nav className="container mx-auto py-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block hover:text-teal-200 px-4"
                  onClick={handleNavClick}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#main-content"
                  className="block hover:text-teal-200 px-4"
                  onClick={handleNavClick}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="block hover:text-teal-200 px-4"
                  onClick={handleNavClick}
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="block hover:text-teal-200 px-4"
                  onClick={handleNavClick}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="mailto:thedeanatmaverick@gmail.com"
                  className="block hover:text-teal-200 px-4"
                  onClick={handleNavClick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <section
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://ucarecdn.com/2ab3c613-ef1b-449b-a3af-464bb18b8d7c/-/format/auto/')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center text-white relative z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-tangerine font-bold mb-4">
            The Dean At
            <br className="md:hidden" /> Maverick
          </h1>
          <p className="text-2xl md:text-3xl mb-8">
            Just like home away from home
          </p>
          <a
            href="#booking-section"
            className="bg-teal-500 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-teal-600 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Book Now
          </a>
        </div>
      </section>

      <main id="main-content" className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-12">
            <h2 className="text-4xl font-tangerine font-bold mb-4">
              Welcome to The Dean At Maverick
            </h2>
            <p className="text-xl">Experience your home away from home.</p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-tangerine font-bold mb-4">
              The Dean At Maverick
            </h3>
            <div className="relative">
              <div className="flex overflow-hidden">
                {images
                  .slice(currentSlide, currentSlide + 2)
                  .map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className="w-1/2 h-64 object-cover rounded-lg px-1 transition-transform duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 rounded-r"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 rounded-l"
              >
                <FaChevronRight />
              </button>
            </div>
          </section>

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <div className="max-w-4xl max-h-[90vh] p-4">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white text-xl"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          )}

          <section className="mb-12">
            <h3 className="text-2xl font-tangerine font-bold mb-4">
              About The Dean At Maverick
            </h3>
            <p className="mb-4">
              Discover The Dean at Maverick, a spacious and versatile Airbnb and
              event space designed to cater to leisure travelers, business
              guests, and special gatherings. With a focus on clean,
              transitional aesthetics, this inviting property offers a welcoming
              atmosphere that appeals to visitors seeking comfort and style
              during their stay in the area. Whether you're planning a memorable
              event or enjoying a getaway for work or leisure, The Dean at
              Maverick is the perfect choice for an unforgettable experience.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Master Bedroom</li>
              <li>3 Queen Bed Rooms</li>
              <li>Bunk Room</li>
              <li>Workspace</li>
              <li>3.5 Modern Bathrooms</li>
              <li>Dining area with dining table(s)</li>
              <li>Exercise Room</li>
              <li>Optional and Seasonal (Bed and Breakfast Style Brunch)</li>
              <li><b>Event space</b> available upon request</li>
              <li><b>Guest house</b> available upon request</li>
            </ul>
            <p className="font-bold text-xl text-teal-500 font-tangerine">
              $500/night
            </p>
          </section>

          <section id="booking-section" className="mb-12">
            <h3 className="text-2xl font-tangerine font-bold mb-4">
              Book Your Stay
            </h3>
            <div className="w-full h-[600px] md:h-[700px]">
              <script src="https://www.bookingmood.com/js/resize.js"></script>
              <iframe
                src="https://www.bookingmood.com/embed/2c5baa21-eaff-48f8-9436-e5be335d8209?"
                style={{ width: "100%", border: "none" }}
              ></iframe>
            </div>
          </section>

          <section id="reviews" className="mb-12">
            <h3 className="text-2xl font-bold mb-4">What Our Guests Say</h3>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg overflow-hidden">
              <div
                key={currentTestimonial}
                className="transition-opacity duration-1500 ease-in-out"
              >
                <blockquote className="italic text-lg mb-4">
                  {testimonials[currentTestimonial].quote}
                </blockquote>
                <p className="font-bold">
                  - {testimonials[currentTestimonial].author}
                </p>
              </div>
            </div>
          </section>

          <section id="amenities" className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Amenities</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <li>
                <FaWifi className="mr-2" /> Free Wi-Fi
              </li>
              <li>
                <FaLaptop className="mr-2" /> Work Space Area
              </li>
              <li>
                <FaDumbbell className="mr-2" /> Exercise Room
              </li>
              <li>
                <FaUtensils className="mr-2" /> Fully Equipped Kitchen
              </li>
              <li>
                <FaTv className="mr-2" /> Smart TV
              </li>
              <li>
                <FaConciergeBell className="mr-2" /> Bed & Breakfast Available
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Location</h3>
            <p className="mb-4">
              Perfectly situated, you’re just 15-20 minutes from downtown
              Huntsville, Madison, the Huntsville International Airport, and key
              locations like Cummings Research Park and the U.S. Space and
              Rocket Center. Enjoy the convenience of being less than a mile
              from Publix and fantastic dining options, all while nestled in a
              peaceful cul-de-sac. Whether for business or leisure, this is your
              ideal home away from home!
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.8147460676387!2d-86.75862492357717!3d34.85679037871247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886281d8f4eb4c3f%3A0x4f3a764c5de0f5b9!2s103%20Maverick%20Dr%2C%20Harvest%2C%20AL%2035749!5e0!3m2!1sen!2sus!4v1707272144435!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </section>

          <section id="faq" className="mb-12">
            <h3 className="text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4 bg-white shadow-lg rounded-lg p-6">
              {[
                {
                  question: "What's the check-in/check-out time?",
                  answer:
                    "Check-in is at 3:00 PM, and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request.",
                },
                {
                  question: "Is the Dean pet-friendly?",
                  answer: "We currently do not accommodate pets.",
                },
                {
                  question: "What's your cancellation policy?",
                  answer:
                    "For a Firm cancellation policy, guests must cancel up to 60 days before your trip and only pay 50% of the total accommodation fees for the reservation. Cancel within 60 days of the trip and the reservation is non-refundable.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <button
                    className="flex justify-between items-center w-full text-left font-bold focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl">
                      {activeAccordion === index ? "−" : "+"}
                    </span>
                  </button>
                  {activeAccordion === index && (
                    <div className="mt-2">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
              <div className="border-b border-gray-200 pb-4 last:border-b-0">
                <button
                  className="flex justify-between items-center w-full text-left font-bold focus:outline-none"
                  onClick={() => toggleAccordion(3)}
                >
                  <span>Guest Booking Agreement?</span>
                  <span className="text-xl">
                    {activeAccordion === 3 ? "−" : "+"}
                  </span>
                </button>
                {activeAccordion === 3 && (
                  <div className="mt-2">
                    <a
                      href="https://drive.google.com/file/d/1acdaOQ2ySdDea8mQBusPRCpeCLN_KR6y/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 underline"
                    >
                      View Agreement
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="mb-4 md:mb-0 text-center">
              <h3 className="text-xl font-tangerine mb-2">
                The Dean At Maverick
              </h3>
              <p className="font-playfair">Just like home away from home</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 The Dean At Maverick. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <style jsx global>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
