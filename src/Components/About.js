import React, { useEffect } from 'react'
import illustration1 from '../Assets/image-1.webp'
import illustration2 from '../Assets/image-3.webp'
import illustration3 from '../Assets/Cart.webp'
import illustration4 from '../Assets/Coin.webp'
import illustration5 from '../Assets/6.webp'
import Announcement from '../Components/Announcement'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const About = () => {

  useEffect(()=> {
    AOS.init({duration:3000})
}, [])

  return (
    <>
      <section className='' id='about'>

        {/* MISSION DIV  */}
        <div className='flex flex-col flex-col-reverse gap-4 md:grid grid-cols-2 items-center justify-center'>
          <div className='flex justify-center' >
            <img src={illustration2} alt="" className='py-8 h-80 md:h-full' data-aos="fade-up"/>
          </div>

          <div className='flex flex-col justify-start p-8'>
            <h3 className='text-4xl font-semibold urua-text mb-6'>Our Mission</h3>
            <p className='text-lg'>Urua is dedicated to building a future where digital divide between vendors and consumers is bridged by a digital marketing platform that is accessible to everyone no matter where you are around the world.</p>
          </div>
        </div>

        {/* VISSION DIV  */}
        <div className='flex flex-col gap-4 md:grid grid-cols-2 items-center'>
          <div className='flex flex-col text-end px-8'>
            <h3 className='text-4xl font-semibold urua-text mb-6'>Our Vision</h3>
            <p className='text-lg'>To build the world’s most exclusive digital market platform where people (vendors and consumers) can buy goods and services at the comfort of their homes.</p>
          </div>

          <div className='' >
            <img src={illustration1} alt="" className='py-16 h-96 md:h-full' data-aos="fade-up"/>
          </div>
        </div>
        <Announcement />

        {/* SHOPPING EXPERIENCE DIV  */}
        <div className='flex flex-col-reverse justify-center items-center'>

          <div className='flex flex-col px-8 py-16 text-center gap-4'>
            <h3 className='text-4xl font-semibold urua-text mb-6'>Bringing to you the best shopping experience</h3>
            <p className='text-lg'>Urua's intuitive interface allows you to effortlessly navigate through categories, filter by preferences, and discover new products that match your interests. Enhance your shopping experience with Urua.</p>
            <div>
              <button className='text-white px-8 py-2 rounded-br-md urua'>Start Shopping!</button>
            </div>
          </div>
        </div>

        {/* SELL BUY DELIVER DIV  */}
        <div className='px-4 lg:px-12 py-8'>
          <div className='text-center lg:px-40'>
            <h3 className='text-4xl font-bold'>SELL, BUY, DELIVER</h3>
            <p className='text-lg py-4'>Dui risus lacinia gravida morbi malesuada malesuada metus ut. Ultrices in ac nisl nibh purus. Cursus volutpat neque cursus arcu elit tempor arcu orci.</p>
          </div>

          <div className='flex flex-col md:grid grid-cols-3 gap-4'>
            <div className='second-background rounded-lg px-4 lg:px-8 py-8'>
              <div className='flex items-center justify-center'>
                <img src={illustration3} alt="" className='w-40' data-aos="fade-up"/>
              </div>
              <h5 className='text-lg font-bold urua-text my-4'>1. BUY</h5>
              <p>Urua, the ultimate platform that connects you with a world of opportunities and eager customers. Take your business to new heights and tap into a larger market</p>
            </div>

            <div className='second-background rounded-lg px-4 lg:px-8 py-8'>
              <div className='flex items-center justify-center'>
                <img src={illustration4} alt="" className='h-60' data-aos="fade-up"/>
              </div>
              <h5 className='text-lg font-bold urua-text my-4'>2. SELL</h5>
              <p>Shop with confidence, knowing that your transactions are secure and your privacy is respected.</p>
            </div>
            <div className='second-background rounded-lg px-4 lg:px-8 py-8'>
              <div className='flex items-center justify-center'>
                <img src={illustration5} alt="" className='h-60' data-aos="fade-up"/>
              </div>
              <h5 className='text-lg font-bold urua-text my-4'>3. DELIVER</h5>
              <p>Join our app and get connected to a bustling marketplace brimming with customers eager to have their packages delivered reliably and efficiently.</p>
            </div>
          </div>

          <div className='text-center my-8'>
            <button className='urua text-white px-8 py-2 rounded-br-md w-1/2'>Get Urua</button>
          </div>
        </div>
      </section>
    </>

  )
}
