import About from './About';
import Banner from './Banner';
import Service from './Service';

const Homepage = () => {
    return (
        <div className='container mx-auto'>
            <Banner/>
            <About/>
            <Service/>
        </div>
    );
};

export default Homepage;