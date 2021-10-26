import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-16 sm:h-32 lg:h-64 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={5000}
        emulateTouch={true}
      >
        <div>
          <img
            loading="lazy"
            src="/carousel1.jpg"
            alt="carousel image 1"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/carousel2.jpg"
            alt="carousel image 2"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/carousel3.jpg"
            alt="carousel image 3"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
