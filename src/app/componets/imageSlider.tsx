import React from "react";
import { Carousel } from "flowbite-react";

interface carouselProps {
  slides: any;
}

// If you want to use your own Selectors look up the Advancaed Story book examples
export const ImageSlider: React.FC<carouselProps> = (props) => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {props.slides.map((slide: any, index: any) => {
          if (slide.image) {
            return (
              <img
                key={index}
                src={slide.image + ".PNG"}
                height={451}
                width={800}
                alt={"image" + index}
              />
            );
          } else {
            return (
              <img
                src="https://fakeimg.pl/800x451"
                alt="..."
                height={451}
                width={800}
              />
            );
          }
        })}
      </Carousel>
    </div>
  );
};

export default React.memo(ImageSlider);
