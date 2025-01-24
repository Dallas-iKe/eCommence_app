import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="about image" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione qui distinctio nulla beatae cupiditate exercitationem debitis suscipit minus officia. Ad perspiciatis maiores optio ipsam numquam quam vel voluptatibus cumque illo?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quisquam distinctio labore ducimus, natus laudantium nemo cupiditate explicabo impedit reprehenderit porro accusamus atque nisi illo pariatur non, eligendi error repellendus!</p>
            <b className='text-gray-800'>OUR MISSION</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi tempora vitae sunt ipsam iure quia, eveniet accusantium mollitia nesciunt! Perferendis dicta laborum minus atque, quo ipsam quidem ducimus asperiores!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-18 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance</b>
            <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio vitae, voluptas veritatis magni aspernatur modi, facilis voluptatum id maiores cupiditate voluptate corrupti. Eligendi hic odio eius corporis beatae labore placeat!</p>
        </div>
        <div className='border px-10 md:px-18 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi velit dolor itaque, est harum pariatur laborum distinctio voluptas repellat at nobis debitis rerum, asperiores minus enim non dicta maiores nostrum!</p>
        </div>
        <div className='border px-10 md:px-18 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione animi, eaque molestiae consequatur exercitationem cupiditate cum facilis minima consequuntur, totam reiciendis veniam, deleniti magnam non? Facere accusantium sunt sint voluptate!</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
