
'use client';

import { useParams } from 'next/navigation';
import { client, urlFor } from '../../../sanity/lib/client';
import Link from 'next/link';
import ThemeToggleButton from '../../component/ThemeToogleButton';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import React from 'react';


interface Post {
  title: string;
  image1?: { asset: { url: string } };
  description1: string;
  heading1?: string;
  description2?: string;
  image2?: { asset: { url: string } };
  heading2?: string;
  description3?: string;
  heading4?: string;
  description4?: string;
  heading5?: string;
  description5?: string;
}

export default function BlogPost() {
  const params = useParams() as { slug: string };
  const { slug } = params;

  const [post, setPost] = React.useState<Post | null>(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      const query = `*[_type == "post" && slug.current == $slug][0]{
        title,
        image1{ asset->{ url } },
        description1,
        heading1,
        description2,
        image2{ asset->{ url } },
        heading2,
        description3,
        heading4,
        description4,
        heading5,
        description5
      }`;
      const fetchedPost = await client.fetch(query, { slug });
      setPost(fetchedPost);
    };

    if (slug) fetchPost();
  }, [slug]);

  if (!post) {
    return <div className="text-center py-20">Post not found!</div>;
  }

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
              <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

    
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        {post.image1 && (
          <Image
            src={urlFor(post.image1).url()}
            alt={post.title}
            width={800}
            height={400}
            className="w-full max-w-4xl mx-auto h-auto rounded-lg mb-6"
          />
        )}
        <p className="mb-4">{post.description1}</p>

        {post.heading1 && <h2 className="text-2xl font-semibold mb-4">{post.heading1}</h2>}
        {post.description2 && <p className="mb-4">{post.description2}</p>}

        {post.image2 && (
          <Image
            src={urlFor(post.image2).url()}
            alt={post.title}
            width={800}
            height={400}
            className="w-full max-w-4xl mx-auto h-auto rounded-lg mb-6"
          />
        )}
        {post.heading2 && <h2 className="text-2xl font-semibold mb-4">{post.heading2}</h2>}
        {post.description3 && <p className="mb-4">{post.description3}</p>}

        {post.heading4 && <h2 className="text-2xl font-semibold mb-4">{post.heading4}</h2>}
        {post.description4 && <p className="mb-4">{post.description4}</p>}

        {post.heading5 && <h2 className="text-2xl font-semibold mb-4">{post.heading5}</h2>}
        {post.description5 && <p className="mb-4">{post.description5}</p>}
      </div>

      
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">© 2024 Sanity Blog. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="https://www.facebook.com" target="_blank"><FaFacebook className="text-xl hover:text-yellow-400" /></Link>
            <Link href="https://www.twitter.com" target="_blank"><FaTwitter className="text-xl hover:text-yellow-400" /></Link>
            <Link href="https://www.instagram.com" target="_blank"><FaInstagram className="text-xl hover:text-yellow-400" /></Link>
          </div>
        </div>
      </footer>
    </>
  );
}
