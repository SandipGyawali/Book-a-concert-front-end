import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import LeftButton from '../components/buttons/LeftButton';
import RightButton from '../components/buttons/RightButton';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MainPage() {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    fetch('https://book-a-concert-api.onrender.com/concerts')
      .then((response) => response.json())
      .then((data) => setConcerts(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of slides to show
    slidesToScroll: 3,
    centerMode: true,
    prevArrow: <LeftButton />,
    nextArrow: <RightButton />,
    className: 'center flex sm:flex items-center h-4/5 my-auto',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="main-page box-border h-full flex flex-col justify-between py-10">
      <h2 className="text-center text-4xl my-2">Available Concerts</h2>
      <p className='text-center text-slate-500 my-2'>Please select an event</p>
      <Slider {...settings}>
        {concerts.map((concert) => (
          <div key={concert.id} >
            <Link to={`/concerts/${concert.id}`} className='flex justify-center'>
              <div className="shadow-xl border-2 rounded-md concert-item flex flex-col bg-white h-96 w-52 justify-between items-center p-2 mx-2 w-300">
                <div className="p-2 bg-slate-200 w-48 h-48 flex flex-1 items-center justify-center rounded-full">
                  <img
                    src={concert.img}
                    alt={concert.title}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className='flex-1 flex flex-col justify-around '>
                  <h2 className="text-lg font-bold">{concert.title}</h2>
                  <p className='text-xs'>{concert.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainPage;
