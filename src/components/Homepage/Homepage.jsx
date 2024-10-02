import About from './About';
import Banner from './Banner';

const Homepage = () => {
    return (
        <div className='container mx-auto min-h-screen'>
            <Banner/>
            <About/>
        </div>
    );
};

export default Homepage;