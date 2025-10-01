import React from 'react'
import twitterImg from "../assets/Group-3.png"
import instaImg from "../assets/Group-4.png"
import fbImg from "../assets/fi_5968764.png"
import supportImg from "../assets/Vector.png"


import Container from "./Container";

const Footer = () => {
    return (
        <footer className="bg-black text-[#A1A1AA] px-8 py-12 ">
            <Container>
                <div className="grid md:grid-cols-5 gap-8">
                    <div>
                        <h4 className="text-white font-semibold mb-3 text-[20px] ">CS — Ticket System</h4>

                        <p className="space-y-1 text-[16px] text-[#A1A1AA] text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-3 text-[20px] ">Company</h4>
                        <ul className="text-[16px] text-[#A1A1AA] space-y-1 text-sm">
                            <li>About Us</li>
                            <li>Our Mission</li>
                            <li>Contact Saled</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-3 text-[20px] ">Services</h4>
                        <ul className="text-[16px] text-[#A1A1AA] space-y-1 text-sm">
                            <li>Products & Services</li>
                            <li>Customer Stories</li>
                            <li>Download Apps</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-3 text-[20px] ">Information</h4>
                        <ul className="text-[16px] text-[#A1A1AA] space-y-1 text-sm">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-3 text-[20px] ">Social Links</h4>
                        <ul className="text-[16px] text-[#A1A1AA] space-y-.5 text-sm ">
                            <li className="flex gap-2 justify-start items-center mb-2 "><img src={twitterImg} alt="" />@CS — Ticket System</li>
                            <li className="flex gap-2 justify-start items-center mb-2"><img src={instaImg} alt="" />@CS — Ticket System</li>
                            <li className="flex gap-2 justify-start items-center mb-2"><img src={fbImg} alt="" />@CS — Ticket System</li>
                            <li className="flex gap-2 justify-start items-center mb-2"><img src={supportImg} alt="" />support@cst.com</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t-1 border-gray-800 mt-9">
                    <div className="text-left  md:text-center text-[#FAFAFA] text-sm mt-5">
                    © 2025 CS — Ticket System.
                    <br className="block md:hidden" /> All rights reserved.
                </div>


                </div>
                
            </Container>
        </footer>
    );
};

export default Footer;

