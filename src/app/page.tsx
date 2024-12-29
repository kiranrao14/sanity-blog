import Link from "next/link";
import { client, urlFor } from "../sanity/lib/client";
import ThemeToggleButton from "./component/ThemeToogleButton";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

interface Post {
  _id: string;
  slug: { current: string };
  title: string;
  image1?: { asset: { url: string } };
  description1: string;
}

export default async function BlogList() {
  const query = `*[_type == "post"]{
    _id,
    slug,
    title,
    image1{
      asset->{
        url
      }
    },
    description1
  }`;

  const posts: Post[] = await client.fetch(query);

  return (
    <>
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/">
            <h1 className="text-2xl font-bold">Sanity Blog</h1>
          </Link>

          <div className="flex items-center space-x-6">
            <ThemeToggleButton />
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/About"
                  className="hover:text-yellow-400 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-yellow-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col mt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
          {posts.map((post) => (
            <div
              key={post._id}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between h-full"
            >
              <Link href={`/post/${post.slug.current}`} passHref>
                <div>
                  {post.image1 && (
                    <Image
                      src={urlFor(post.image1).width(300).url()}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-md mb-4 transition-transform transform hover:scale-105 hover:opacity-80"
                    />
                  )}
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-white h-16 overflow-hidden">
                    {post.description1.slice(0, 100)}...
                  </p>
                </div>
              </Link>
              <div className="mt-4">
                <Link href={`/post/${post.slug.current}`} passHref>
                  <button className="w-full bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 text-white p-8 mt-auto mb-0">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm" style={{ lineHeight: "1.8" }}>
            © 2024 Sanity Blog. All rights reserved.
          </p>

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
    </>
  );
}
