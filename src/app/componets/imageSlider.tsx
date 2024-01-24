import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

interface carouselProps {
  slides: any;
}

// If you want to use your own Selectors look up the Advancaed Story book examples
export const ImageSlider: React.FC<carouselProps> = (props) => {
  return (
    <Carousel
      slideInterval={5000}
      id={"id" + props.slides[0].image}
      style={{ height: 225 }}
    >
      {props.slides.map((slide: any, index: any) => {
        if (slide.image) {
          return (
            <div key={index} style={{ height: 225 }}>
              <Image
                src={slide.image + ".PNG"}
                height={451}
                width={800}
                alt={"image" + index}
              />
            </div>
          );
        } else {
          return (
            <div style={{ height: 225 }}>
              <img
                src="https://fakeimg.pl/800x451"
                alt="..."
                height={451}
                width={800}
              />
            </div>
          );
        }
      })}
    </Carousel>
  );
};

export default React.memo(ImageSlider);
