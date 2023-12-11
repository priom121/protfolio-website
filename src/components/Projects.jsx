import img_1 from '../assets/a-12.jpg'
import img_2 from '../assets/a-11.jpg'
import img_3 from '../assets/a-10.jpg'
const Projects = () => {
    return (
        <div  className='py-20'>
            <h1 className="text-cyan-400 shadow-yellow-500 shadow-xl text-center text-3xl font-semibold">
                Some of my most recent projects</h1>
           <div className="md:flex mt-7 flex-wrap sm:mx-auto justify-evenly">
            <img  data-aos="flip-left" className='h-[500px] w-[300px]' src={img_1} alt="priom_projects" />
            <img data-aos="flip-right"  className='h-[500px] w-[300px]' src={img_2} alt="priom_projects" />
            <img  data-aos="flip-left" className='h-[500px] w-[300px]' src={img_3} alt="priom_projects" />
           </div>
        </div>
    );
};

export default Projects;