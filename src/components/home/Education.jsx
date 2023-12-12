

const Education = () => {

 return (
 <div>
    <h1 className="text-4xl text-center text-cyan-500 p-3 mt-5 font-bold">My Education & Experience </h1> 
  <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className="max-w-screen-xl mx-auto py-10 flex justify-between">
  <div  className="border-1 w-1/3  border-indigo-200 border-r-teal-500 ">
<a  href="#" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">Bachelor in CSE</h5>
<p class="font-normal text-gray-700 dark:text-gray-400 text-center"> 2022-26</p>
<p class="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut cupiditate ad repudiandae tempore voluptatum dolore doloremque aut sit earum.</p>

</a>
</div>
{/* progreses bar */}
<div className="flex flex-wrap justify-between">
<div className="radial-progress text-cyan-400 w-16" style={{"--value":90}} role="progressbar">95%</div>
<h1 className="text-xl font-semibold text-cyan-500">Team Work</h1>
<div className="radial-progress text-cyan-400 w-16" style={{"--value":60}} role="progressbar">60%</div>
<h1 className="text-xl font-semibold text-cyan-500">Community</h1>
<div className="radial-progress text-cyan-400 w-16" style={{"--value":80}} role="progressbar">85%</div>
<h1 className="text-lg font-semibold text-cyan-500">Creativity</h1>
<div className="radial-progress text-cyan-400 w-16" style={{"--value":70}} role="progressbar">75%</div>
<h1 className="text-base  text-cyan-500 font-semibold">Designed</h1>
</div>
  </div>
 </div>
  );
};

export default Education;