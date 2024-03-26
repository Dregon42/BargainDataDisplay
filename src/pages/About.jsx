import React from 'react';
import Nav from '../components/Nav';

const About = () => {
  return (
    <>
        <Nav />
        <div className='flex flex-col gap-5  w-screen items-center'>
            <p className=' flex text-center justify-center w-1/3 pt-20 text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti magnam laudantium vero nesciunt fugiat nihil,
                reiciendis inventore, velit tempore hic ipsam, voluptate quibusdam quis. Libero tempore sint enim quae.
            </p>
        </div>
        <div className='mt-12 flex justify-center mx-auto'>
            <h2 className='text-3xl font-bold'>Meet the team!</h2>
        </div>
    </>
  )
}

export default About