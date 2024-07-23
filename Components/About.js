import React from 'react';
import './Style/About.css';
import Image from 'next/image';
import Icon from '../public/icon.jpg';
import 'remixicon/fonts/remixicon.css';
import Link from 'next/link';

const About = () => {
  return (
    <div className='About'>
    <Image  src={Icon} alt="NoteON" className='image' width={500} height={500} />
    <div className='info'>
      <h2>About Us</h2>

      <section className='mission'>
        <h3>Mission</h3>
        <p>To empower every student to achieve more.</p>
      </section>

      <section className='vision'>
        <h3>Vision</h3>
        <p>To provide the best notes with just one click.</p>
      </section>

      <section className='team'>
        <h3>Our Team</h3>

        <div className='member'>
          <h4>Founder</h4>
          <h4><strong>Ajay Sidar <Link href='#' class='link-insta'><i class="ri-instagram-line"></i></Link></strong></h4>
          <p>Government Engineering College Bilaspur, 3rd Year ETNT</p>
          <p>Ajay is the visionary behind our platform, dedicated to creating a resource that makes learning more accessible and efficient for students.</p>
        </div>

        <div className='member'>
          <h4>Front-End Developers</h4>

          <div className='member'>
            <h4><strong>Gaurav Soni <Link href='https://www.instagram.com/_gaurav.soni_/' class='link-insta'><i class="ri-instagram-line"></i></Link></strong></h4>
            <p>Government Engineering College Bilaspur, 3rd Year CSE</p>
            <p>Gaurav brings his expertise in web development to the team, ensuring that our platform is user-friendly and visually appealing.</p>
          </div>

          <div className='member'>
            <h4><strong>Shekhar <Link href='#' class='link-insta'><i class="ri-instagram-line"></i></Link></strong></h4>
            <p>Government Engineering College Bilaspur, 3rd Year ETNT</p>
            <p>Shekhar works alongside Gaurav, contributing his skills to develop a seamless and intuitive interface for our users.</p>
          </div>
        </div>

        <div className='member'>
          <h4>Graphic Designer</h4>
          <h4><strong>Tanishq Shakre <Link href='#' class='link-insta'><i class="ri-instagram-line"></i></Link></strong></h4>
          <p>Government Engineering College Bilaspur, 1st Year ETNT</p>
          <p>Tanishq adds a creative touch to our platform, designing engaging graphics that enhance the overall user experience.</p>
        </div>
      </section>

      <section className='story'>
        <h3>Our Story</h3>
        <p>Our platform was founded with the simple goal of empowering students. We understand the challenges that come with finding quality study materials, so we set out to create a solution. With a click of a button, students can now access the best notes available, saving time and effort.</p>
      </section>

      <section className='choose'>
        <h3>Why Choose Us?</h3>
        <p>Quality Content: We strive to provide the best study notes that help students excel in their academics.</p>
        <p>Easy Access: Our user-friendly platform ensures that finding and using notes is a hassle-free experience.</p>
        <p>Dedicated Team: Our team of passionate individuals is committed to continuously improving and expanding our offerings.</p>
      </section>
    </div>
    </div>
  );
}

export default About;
