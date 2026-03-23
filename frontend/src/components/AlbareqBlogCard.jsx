import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

const AlbareqBlogCard = ({ post }) => {
  return (
    <Card className="bg-[#2E5AAC] border-[#3d6bc4] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f52] to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-white mb-3 hover:text-[#FFB366] transition-colors line-clamp-2 leading-relaxed">
            {post.title}
          </h3>
        </Link>

        {/* Meta Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/albareq-logo.png" />
              <AvatarFallback className="bg-[#FFB366] text-white text-xs">ب</AvatarFallback>
            </Avatar>
          </div>
          <Badge className="bg-[#FFB366] hover:bg-[#FFA04D] text-white border-0 text-xs">
            {post.category}
          </Badge>
        </div>

        {/* Date */}
        <p className="text-gray-300 text-sm mb-3">{post.date}</p>

        {/* Excerpt */}
        <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More Button */}
        <Link to={`/blog/${post.slug}`}>
          <Button className="w-full bg-[#FFB366] hover:bg-[#FFA04D] text-white border-0 rounded-full flex items-center justify-center gap-2 transition-all duration-300 group/btn">
            <span>اقرأ المزيد</span>
            <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default AlbareqBlogCard;