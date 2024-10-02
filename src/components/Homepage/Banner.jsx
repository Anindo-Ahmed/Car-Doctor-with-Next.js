import Link from "next/link";

const Banner = () => {
  const banners = [
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide2",
      previous: "#slide4",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide3",
      previous: "#slide1",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide4",
      previous: "#slide2",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next: "#slide1",
      previous: "#slide3",
    },
  ];

  return (
    <div className="carousel w-full mt-10">
      {banners.map((banner, index) => (
        <div
          style={{
            backgroundImage:
              `linear-gradient(90deg, #000 3%, rgba(21, 21, 21, 0.00) 100%), url(/assets/images/banner/${index+1}.jpg)`,
          }}
          key={index}
          id={`slide${index+1}`}
          className="carousel-item relative w-full h-[70vh] bg-no-repeat bg-cover rounded-xl"
        >
          <div className="flex flex-col justify-center md:px-24 px-10 gap-8">
            <h1 className="md:text-6xl text-3xl md:w-[470px] leading-tight">{banner.title}</h1>
            <p className="md:w-[470px]">{banner.description}</p>
            <div className="flex items-center gap-5">
            <Link href={"/"}><button className="bg-primary rounded-md md:px-6 px-3 md:py-3 py-3 text-sm md:text-lg hover:bg-white hover:text-black ">Discover More</button></Link>
            <Link href={"/blog"}><button className="btn btn-outline border-white text-white hover:bg-white hover:text-black rounded-md md:px-6 px-3 md:py-2 md:text-lg">Latest Project</button></Link>
            </div>
          </div>
          <div className="absolute md:right-10 md:bottom-10 right-2 bottom-2 flex transform justify-center gap-3">
            <a href={banner.previous} className="btn btn-circle">
              ❮
            </a>
            <a href={banner.next} className="btn btn-circle btn-primary">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
