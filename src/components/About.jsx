import { AiFillGithub } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import profileImage from '../assets/pritom.jpg'

const About = () => {
    return (



        <div id='About' className="lg:px-36 px-10 lg:py-0 py-20 text-center gap-5
         lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
          
            <div className="h-full lg:py-40 flex flex-col 
            justify-center lg:items-start items-center text-white">
                <h2 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase text-cyan-600">About Me</h2>
                <p data-aos="fade-left">I love to work on web application using MERN Stack technologies like MongoDB, Express.JS, React & Node.JS</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <button className='neno-button shadow-xl
                             hover:shadow-teal-800/50
                              text-white border-2 hover:bg-teal-800
                               border-teal-800 rounded-xl py-4 px-8 uppercase relative overflow-hidden'>Resume</button>

                        </div>
                        <div className="text-lg ml-3">
                            <h1 className=''>Email: Pritomgupta121@gmail.com</h1>
                            <h2>Phone Number : 01610381318</h2>
                        </div>
                    </div>
                    
                </div>
              
            </div>
            <div>
            <img data-aos="fade-down" src={profileImage} className=' w-[400px] h-[400px] 
             rounded-xl shadow-2xl shadow-emerald-600 border-2 p-1 border-blue-500 img_glow ' alt="priom" />
            </div>
        </div>

    );
};

export default About;