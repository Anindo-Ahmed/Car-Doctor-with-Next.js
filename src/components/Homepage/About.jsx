import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-28 mt-10 max-h-screen justify-between gap-10 p-4">
            <div className="md:relative">
                <Image className="rounded-md" src={'/assets/images/about_us/person.jpg'} alt="person" height={800} width={600}></Image>
                <Image className="rounded-lg md:absolute right-16 lg:-translate-y-32 md:-translate-y-40 border-8 border-white" src={'/assets/images/about_us/parts.jpg'} alt="person" height={400} width={350}></Image>
            </div>
            <div className="lg:w-[470px]">
                <h2 className="text-primary font-bold text-xl mb-7">About Us</h2>
                <h1 className="text-neutral-800 font-bold md:text-5xl text-2xl">We are qualified & of experience in this field</h1>
                <p className="mt-7 mb-5 text-neutral-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p className="text-neutral-400 mb-8">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <Link href={"/"}><button className="bg-primary rounded-md md:px-6 px-3 md:py-3 py-3 text-sm md:text-lg hover:bg-white hover:text-black">Get More Info</button></Link>
            </div>
        </div>
    );
};

export default About;