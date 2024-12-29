
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import Link from "next/link";
import ThemeToggleButton from "../component/ThemeToogleButton";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';  

const Contact = () => {
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

        
        <div className="flex-grow flex items-center justify-center mt-20 md:mt-32">
          <div className="w-full max-w-4xl p-4 lg:p-8 space-y-8">
            <div className="flex flex-col space-y-4">
              {/* Call To Us section */}
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-red-500" />
                <h3 className="text-xl font-semibold">Call To Us</h3>
              </div>
              <span className="text-sm">We are available 24/7, 7 days a week.</span>
              <span className="text-sm">Phone: +8801611112222</span>

              {/* Write To Us section */}
              <div className="flex items-center space-x-2">
                <MdAttachEmail className="text-red-500" />
                <h3 className="text-xl font-semibold">Write To Us</h3>
              </div>
              <span className="text-sm">Fill out our form and we will contact you within 24 hours.</span>
              <span className="text-sm">Emails: customer@exclusive.com</span>
              <span className="text-sm">Emails: support@exclusive.com</span>
            </div>

            
            <div className="flex flex-col space-y-4">
        
              <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-2 border border-gray-300 rounded w-full lg:w-1/3 bg-gray-100"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 border border-gray-300 rounded w-full lg:w-1/3 bg-gray-100"
                />
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="p-2 border border-gray-300 rounded w-full lg:w-1/3 bg-gray-100"
                />
              </div>

              
              <textarea
                placeholder="Your Message"
                className="p-8 border border-gray-300 rounded w-full bg-gray-100"
              />
              <div className="flex justify-center items-center md:mb-52">
                <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gray-800 text-white p-8">
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
    );
};

export default Contact;