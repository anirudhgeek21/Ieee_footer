import React from "react";
import IeeeLogo from "./Ieee_Logo.png";
import Facebook from "./Facebook.png";
import Snap from "./Snap.png";
import Insta from "./Insta.png";
import Linkedin from "./Linkedin.png";

const LowerFooter = ()=>{
    return(
        <>
            <div className="w-full md:h-[17rem]  bg-[#171E56] fixed bottom-[2.5rem] ">
                <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4 md:mt-7 sm:mt-0">
                    <div className="md:h-[16.5 rem] text-center col-span-1 flex justify-around my-auto items-center">
                        <img src={IeeeLogo} alt="IEEE Logo" className="rounded-2xl w-[6rem] m-auto h-[6.68rem]" />

                        <div className="w-[80%] h-full flex justify-around ">
                            <div className="w-[50%] h-[60%] my-auto mt-4 ">
                                <h1 className="font-sans text-sm md:text-base font-bold text-white text-center mt-[0.35rem]">Netaji Subhas University of Technology
                                    Sector -3, Dwarka
                                    New Delhi - 110078
                                    ieee@nsut.ac.in</h1>

                                <br></br>
                                

                                <h1 className="font-sans text-sm md:text-base font-bold text-white text-center mt-[0.35rem]">Ritik YadavChief-Convener: +91 97113 57634
        Pranav ChauhanChief-Convener: +91-9315298602</h1>
                            </div>
                            
                            
                            
                            <div className="text-white text-sm md:text-base font-bold h-[50%] my-auto">
                                <h1>
                                Links:
                                
                                
                                </h1>
                                <br></br>
                                <ul>
                                    <li>About</li>
                                    <li>Sponsors</li>
                                    <li>FAQs</li>
                                    <li>Contact</li>
                                </ul>

                            </div>
                        </div>
                        <div class="h-[12rem] sm:bg-white w-[0.1rem] bg-[#171E56]"></div>

                        


                    </div>


                    

                    


                    

                    <div>

                    <div class="md:invisible border-t border-white"></div>    
                    
                    <div className="rounded-md md:m-auto mt-7 bg-black w-[30%] mx-auto md:p-4 duration-300 font-bold hover:bg-white hover:text-black text-white px-4 py-2 text-center cursor-pointer">
                        <h1>Join Server</h1>

                        
                    </div>

                    <div className="flex w-[30%] mx-auto mt-9 ">
                            <div>
                                <img src={Facebook} alt="IEEE Logo" className="rounded-2xl w-[2 rem] m-auto h-[2 rem]" />

                            </div>
                            <div>
                                <img src={Insta} alt="IEEE Logo" className="rounded-2xl w-[2 rem] m-auto h-[2 rem]" />

                            </div>
                            <div>
                                <img src={Snap} alt="IEEE Logo" className="rounded-2xl w-[2 rem] m-auto h-[2 rem]" />

                            </div>
                            <div>
                                <img src={Linkedin} alt="IEEE Logo" className="rounded-2xl w-[2 rem] m-auto h-[2 rem]" />

                            </div>
                        </div>

                        <h1 className="mt-4 text-white text-xl font-bold md:mt-4 mb-7">
                        Want To Sponsor Us ?
                    </h1>

                    </div>

                    
                </div>
            </div>
        
        </>
    )
}

export default LowerFooter;