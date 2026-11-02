import { Carousel } from "@material-tailwind/react";

export function CarouselDefault({ hotel }) {
  return (
    <Carousel className="rounded-sm max-h-screen">

      <div className="flex h-full w-full">
        <img
          src={hotel?.gallary[0]}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={hotel?.gallary[1]}
          alt="image 2"
          className="h-full w-full object-cover"
        />
      </div>


      <div className="flex h-full w-full">
        <img
          src={hotel?.gallary[2]}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src={hotel?.gallary[3]}
          alt="image 4"
          className="h-full w-full object-cover"
        />
      </div>

      <img
        src={hotel?.gallary[5]}
        alt="image 4"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}