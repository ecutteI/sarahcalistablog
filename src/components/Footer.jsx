import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-[#5F6F65] text-gray-300 py-8 px-4'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-[#9CA986]-600 py-8'>
        <div>
          <h6 className='font-bold uppercase py-6'>Solutions</h6>
          <ol>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
          </ol>
        </div>
        <div>
          <h6 className='font-bold uppercase py-6'>Solutions</h6>
          <ol>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
          </ol>
        </div>
        <div>
          <h6 className='font-bold uppercase py-6'>Solutions</h6>
          <ol>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
          </ol>
        </div>
        <div>
          <h6 className='font-bold uppercase py-6'>Solutions</h6>
          <ol>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Marketing</li>
          </ol>
        </div>

        <div className='cols-span-2 pt-2 md:pt-2'>
          <p className='font-bold uppercase'>Thank you for reading my blog.</p>
          <p className='py-4'>
            We hope you enjoyed learning about Sarah Calista and her journey. Stay connected for more stories and insights, and don't hesitate to share your thoughts or reach out to me.
          </p>

        </div>

      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-[#808D7C]-500 items-center'>
            <p>2024 Sarah Calista. All rights reserved.</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl gap-2'>
                <FaFacebook />
                <FaGithub />
                <FaInstagram />
                <FaTwitch />
                <FaTwitter />
            </div>

        </div>

    </div>
  )
}

export default Footer