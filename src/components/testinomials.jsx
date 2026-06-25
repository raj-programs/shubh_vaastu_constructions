import { useEffect } from "react"
import { client } from "../sanity-setup/sanity"
import { useState } from "react"
import { IoIosStarOutline } from "react-icons/io"
import { IoIosStar } from "react-icons/io"
import { FaLocationCrosshairs } from "react-icons/fa6"
import "./testinomial.css"
import { Swiper } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"


function Testinomial() {
  const [testinomial, setTestinomial] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "testinomial"] | order(_createdAt desc)`)
      .then((data) => setTestinomial(data));
  }, []);

  return (
  
    <div className="testinomial-container">
<Swiper
  className="testimonial-swiper"
  modules={[Autoplay, Pagination]}
  loop={true}
  speed={800}
  grabCursor={true}
  centeredSlides={false}
  watchOverflow={true}
  spaceBetween={20}
  pagination={{
    clickable: true,
    dynamicBullets: true,
  }}
  autoplay={{
    delay: 6000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },

    576: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 35,
    },

    1024: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    1280: {
      slidesPerView: 1,
      spaceBetween: 45,
    },

    1440: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  }}
>
     
    {testinomial.map((item) => (
      <SwiperSlide key={item._id}>
        <div className="testinomial-content">
           
             <div className="rating">
            {[...Array(5)].map((_, index) =>
              index < item.rating ? (
                <IoIosStar key={index} className="star"/>
              ) : (
                <IoIosStarOutline key={index} className="no-star"/>
              )
            )}
          </div>
          <h3 className="testinomial-title">
            {item.clientname}
          </h3>

          <h4 className="project-name">
            {item.projectName}
          </h4>

          <p>{item.review}</p>

          <p className="location">
            <FaLocationCrosshairs />
            {item.location}
          </p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
    
  );
}

export default Testinomial