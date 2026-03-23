import React from 'react';
import { blogPosts } from '../data/albareq-mock';
import AlbareqBlogCard from '../components/AlbareqBlogCard';
import AlbareqSidebar from '../components/AlbareqSidebar';

const AlbareqBlog = () => {
  return (
    <div className="min-h-screen bg-[#1a2f52] pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            مدونة شركة البريق
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اكتشف أحدث المقالات والنصائح في عالم التصميم والدعاية والإعلان
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <AlbareqBlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <AlbareqSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbareqBlog;