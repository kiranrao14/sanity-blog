
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';  
import Link from 'next/link';
import ThemeToggleButton from "../component/ThemeToogleButton";
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          
          <Link href="/">
            <h1 className="text-2xl font-bold">Sanity Blog</h1>
          </Link>

          <div className="flex items-center space-x-6">
            <ThemeToggleButton />
            <ul className="flex space-x-6">
              <li>
                <Link href="/About" className="hover:text-yellow-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:text-yellow-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 flex-grow">

        <div className="max-w-md ml-10 mb-6 md:mb-0">
          <h1 className="font-bold text-3xl mb-6">Our Story</h1>
          <p className="text-gray-700">
            Welcome to Sanity Blog – your go-to source for the latest insights, tips, and trends on a variety of exciting topics. Whether you&apos;re looking to stay updated on the latest news, explore in-depth articles, or discover helpful resources, we&apos;re here to provide you with valuable content that enriches your knowledge and inspires your creativity.

            At Sanity Blog, we believe in the power of information to change the world. Our team of passionate writers, editors, and designers work tirelessly to bring you high-quality articles that are both informative and engaging. We cover a wide range of subjects, from technology and lifestyle to health, education, and entertainment.
          </p>
        </div>

    
        <div className="flex justify-center mt-6 md:mt-0">
          <Image
            src='/image/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png'
            height={400}
            width={400}
            alt="girl-img"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-8 mt-auto mb-0">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm" style={{ lineHeight: '1.8' }}>© 2024 Sanity Blog. All rights reserved.</p>

        
          <div className="flex space-x-6">
            <Link href="https://www.facebook.com" target="_blank">
              <FaFacebook className="text-xl hover:text-yellow-400 transition" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              <FaTwitter className="text-xl hover:text-yellow-400 transition" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FaInstagram className="text-xl hover:text-yellow-400 transition" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About;
