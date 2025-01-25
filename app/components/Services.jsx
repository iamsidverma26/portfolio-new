import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'
import {motion} from 'motion/react'

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="text-center mb-2 font-Ovo text-lg"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mb-2 font-Ovo text-5xl"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center font-Ovo max-w-2xl mx-auto mt-5 mb-12 "
      >
        I offer a range of services to help you achieve the best results for
        your business. Whether you need a new website, a redesign, or ongoing
        maintenance, I have the skills and experience to deliver high-quality
        solutions tailored to your needs. My services include web development,
        UI/UX design, SEO optimization, and more.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-auto gap-6 my-10 "
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale:1.05 }}
            key={index}
            className="border border-gray-500 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white "
          >
            <Image src={icon} alt="image" className="w-10" />
            <h3 className="text-lg my-4 text-gray-500 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-700 leading-5 dark:text-white/80">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5 ">
              Read More
              <Image src={assets.right_arrow} alt="image" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services