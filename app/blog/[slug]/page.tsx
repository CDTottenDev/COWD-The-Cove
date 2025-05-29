"use client"

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Import the function to get blog posts
import { getBlogPostBySlug } from '@/app/blog/utils/blog-data';

const BlogPost: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string;
  
  // Get the blog post data
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return (
      <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Link href="/blog" className="inline-flex items-center mb-8 bg-white px-4 py-2 font-bold retro-btn border-2 border-black">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="text-center py-12 border-2 border-black bg-white retro-shadow p-8">
            <div className="bg-red-500 text-white p-2 inline-block rotate-3 border-2 border-black mb-4">
              <span className="font-bold">Post Not Found!</span>
            </div>
            <p>The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-b from-pink-50 to-teal-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link href="/blog" className="inline-flex items-center my-12 bg-white px-4 py-2 font-bold spa-btn border-2 border-black">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
        
        <article className="container mx-auto px-4 py-8 max-w-4xl bg-white border-2 border-black spa-shadow">
          <div className="mb-12 text-center">
            <div className="inline-block bg-teal-100 px-3 py-1 mb-4 border-2 border-black spa-shadow">
              <span className="text-sm">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              {post.excerpt}
            </p>
          </div>
          
          {/* Display the blog post content */}
          <div className="blog-content prose max-w-none">
            {/* For HTML content, use dangerouslySetInnerHTML or a Markdown renderer */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;