import React from 'react';

// images
import Logo from "../assets/logo.svg";

// icons
import  { FaGithub, FaTwitter, FaLinkedinIn} from 'react-icons/fa';

// motion
import { motion } from 'framer-motion';     

const Footer = () => {
  return (
    <motion.footer className='footer bg-black/20 h-[96px] py-10 px-0'>
        <div className='container mx-auto flex flex-row justify-between items-center'>
            {/* logo */}
            <div>
                <a href='#'>
                    <img src={Logo} alt=''/>
                </a>
            </div>
            {/* Social icon */}
            <div className='flex gap-4'>
                <a href='#'>
                <FaLinkedinIn />
                </a>
                <a href='#'>
                <FaGithub />
                </a>
                <a href='#'>
                <FaTwitter />
                </a>
            </div>
        </div>
    </motion.footer>
  )
}

export default Footer