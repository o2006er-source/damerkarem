import React from 'react';
import { blogPosts } from '../data/mock';
import BlogCard from '../components/BlogCard';
import Sidebar from '../components/Sidebar';

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#1a2844] pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;