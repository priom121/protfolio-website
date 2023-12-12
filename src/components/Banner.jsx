import { AiFillGithub } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import profileImage from '../assets/priom.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 2,
            duration: 750,
        })
    }, [])
    return (
        <div className="lg:px-36 px-8 lg:py-0 py-20 text-center gap-5
         lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div>
                <img data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" src={profileImage} className='
                 md:w-[900px] w-[400px] md:h-[500px] shadow-xl shadow-lime-500 
                rounded-full border-2 p-1 border-blue-500 img_glow' alt="priom" />
            
            </div>
           
            <div className="h-full lg:py-40 flex flex-col 
            justify-center lg:items-start items-center text-white">
                <h2 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal">WELCOME TO <span className="text-yellow-500"> MY WEBSITE</span> </h2>
                <p data-aos="fade-left"> Hi, I'm Priom Gupta
I'm a developer . I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a target='_blank' href="https://github.com/priom121" className="text-teal-600 hover:text-fuchsia-500 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]" />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/priom-gupta-829ba02a3/" className="text-teal-600 hover:text-teal-500 rounded-full glow p-2">
                                <FaLinkedinIn className="text-[28px]" />
                            </a>
                            <a target='_blank' href="https://www.facebook.com/priomprosad.gupta/" className="text-teal-600 hover:text-teal-500 rounded-full glow p-2">
                                <FaFacebook className="text-[28px]" />
                            </a>
                            <a target='_blank' href="https://www.instagram.com/priomprosad.gupta/" className="text-teal-600 hover:text-teal-500 rounded-full glow p-2">
                                <FaInstagram className="text-[28px]" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;