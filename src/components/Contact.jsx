// data-aos="fade-down-left"
const Contact = () => {
    return (
        <div className="rounded-xl py-10 mt-5 mb-5 max-w-screen-xl mx-auto">
            <h2 data-aos="fade-left" className="text-4xl font-bold text-center text-cyan-400">Contact Me</h2>
        <form  data-aos="flip-right" >
         <label className="ml-10 ">
        
             </label>
             <div className="">
             <div className="w-1/2 mx-auto mt-5 ">
         <span className="label-text text-base text-cyan-400">Name</span>
             <label className="input-group">
            <input type="text" placeholder="your name" name="your name" className="input input-bordered w-full" />
             </label>
             </div>
             
             <div className="w-1/2 mx-auto mt-5 ">
             <span className="label-text text-base text-cyan-400">email</span>
             <label className="input-group">
            <input type="email" placeholder="your email" name="Date" className="input input-bordered w-full" />
             </label>
             </div>
             <div className="w-1/2 mx-auto mt-5 ">
             <span className="label-text text-base text-cyan-400"> Address
                                    </span>
             <label className="input-group">
            <input type="text" placeholder="your adderess" name="additional" className="input input-bordered w-full" />
             </label>
             </div>
             <div className="w-1/2 mx-auto mt-5 ">
             <span className="label-text text-base text-cyan-400"> Number
                                    </span>
             <label className="input-group">
            <input type="text" placeholder="your number" name="additional" className="input input-bordered w-full" />
             </label>
             </div>
           <div className="text-center mt-5">
           <button className="btn shadow border-2 border-blue-500 shadow-red-500 bg-cyan-500 ">Submit </button>
           </div>
             </div>
                                    
                                    
                                    
        </form>   
         </div>
    );
};

export default Contact;