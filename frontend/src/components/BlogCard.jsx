import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

const BlogCard = ({ post }) => {
  return (
    <Card className="bg-[#1e2f4d] border-[#2d3e5f] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2844] to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-white mb-3 hover:text-[#FF7A3D] transition-colors line-clamp-2 leading-relaxed">
            {post.title}
          </h3>
        </Link>

        {/* Meta Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://secure.gravatar.com/avatar/3b4df296e2ee6f74abde34709911ece1326de2203f46182795a2a85dab19a82f?s=40&d=mm&r=g" />
              <AvatarFallback className="bg-[#FF7A3D] text-white text-xs">T</AvatarFallback>
            </Avatar>
          </div>
          <Badge className="bg-[#FF7A3D] hover:bg-[#FF5722] text-white border-0 text-xs">
            {post.category}
          </Badge>
        </div>

        {/* Date */}
        <p className="text-gray-400 text-sm mb-3">{post.date}</p>

        {/* Excerpt */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More Button */}
        <Link to={`/blog/${post.slug}`}>
          <Button className="w-full bg-[#FF7A3D] hover:bg-[#FF5722] text-white border-0 rounded-full flex items-center justify-center gap-2 transition-all duration-300 group/btn">
            <span>اقرأ أكثر</span>
            <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default BlogCard;