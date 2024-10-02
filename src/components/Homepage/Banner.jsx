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
          <div className="flex flex-col justify-center px-24 gap-8">
            <h1 className="text-6xl w-[470px] leading-tight">{banner.title}</h1>
            <p className="w-[470px]">{banner.description}</p>
            <div className="flex items-center gap-5">
            <Link href={"/"}><button className="bg-primary rounded-md px-6 py-3 text-lg hover:bg-white hover:text-black ">Discover More</button></Link>
            <Link href={"/blog"}><button className="btn btn-outline border-white text-white hover:bg-white hover:text-black rounded-md px-6 py-2 text-lg">Latest Project</button></Link>
            </div>
          </div>
          <div className="absolute right-10 bottom-10 flex transform justify-center gap-3">
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
