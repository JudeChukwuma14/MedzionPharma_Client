
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from "../assets/image/now.jpg"
import bg1 from "../assets/image/Bg2.jpg"

import bg5 from "../assets/image/Bg5.jpg"
import bg2 from "../assets/image/large.mp4"



const Hero = () => {
  const imageList = [
    {
      src: bg,
      title: "",
      para: "",
      type: "image",
    },
    {
      src: bg1,
      title:
        "",
      para: "",
      type: "image",
    },
    {
      src: bg2,
      title: "",
      para: "",
      type: "video",
    },
    // {
    //   src: bg3,
    //   title:
    //     "",
    //   para: "",
    //   type: "image",
    // },
    // {
    //   src: bg4,
    //   title:
    //     "",
    //   para: "",
    //   type: "image",
    // },
    {
      src: bg5,
      title:
        "",
      para: "",
      type: "image",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full h-[50vh] lg:h-[80vh]">
        <Slider {...settings}>
          {imageList.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-[50vh] lg:h-[80vh] bg-cover bg-center"
            >
              {item.type === "image" ? (
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: `url(${item.src})` }}
                >
                  {/* Responsive text container with padding and gap */}
                  <div className="flex flex-col items-start justify-center h-full gap-2 px-4 bg-black bg-opacity-40 sm:gap-4 sm:px-8 md:px-16 lg:px-16">
                    {/* Responsive title */}
                    <h2 className="text-white font-bold leading-snug sm:leading-relaxed text-lg sm:text-2xl md:text-3xl lg:text-5xl max-w-[90%] sm:max-w-[700px]">
                      {item.title}
                    </h2>

                    {/* Responsive paragraph */}
                    <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl max-w-[90%] sm:max-w-[700px]">
                      {item.para}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 w-full h-full">
                  <video
                    className="object-cover w-full h-full"
                    src={item.src}
                    autoPlay
                    muted
                    loop
                  />

                  {/* Responsive text container */}
                  <div className="absolute inset-0 flex flex-col items-start justify-center h-full gap-2 px-4 bg-black bg-opacity-40 sm:gap-4 sm:px-8 md:px-16 lg:px-20">
                    {/* Responsive title */}
                    <h2 className="text-white font-bold leading-snug sm:leading-relaxed text-lg sm:text-2xl md:text-3xl lg:text-5xl max-w-[90%] sm:max-w-[700px]">
                      {item.title}
                    </h2>

                    {/* Responsive paragraph */}
                    <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl max-w-[90%] sm:max-w-[700px]">
                      {item.para}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
