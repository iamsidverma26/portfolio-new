import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo : assets.logo_dark}
          alt="image"
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="image"
            className="w-6"
          />
          vermasiddharth779@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-500 mx-[10%] mt-12 py-6 ">
        <p>
          &copy; {new Date().getFullYear()} Siddharth Verma. All Rights Reserved
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/siddharth-verma-1197a61a5/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/iamsidverma26/" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/iamsid2628/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              X
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer