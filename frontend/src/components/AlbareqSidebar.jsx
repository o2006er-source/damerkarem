import React, { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Search } from 'lucide-react';
import { tags } from '../data/albareq-mock';

const AlbareqSidebar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('البحث عن:', searchQuery);
  };

  return (
    <div className="space-y-6">
      {/* Search Box */}
      <Card className="bg-[#2E5AAC] border-[#3d6bc4] p-6">
        <h3 className="text-xl font-bold text-[#FFB366] mb-4">بحث</h3>
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="text"
            placeholder="ابحث عن مقال..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#1a2f52] border-[#2d4268] text-white placeholder:text-gray-400 focus:border-[#FFB366]"
          />
          <Button
            type="submit"
            className="bg-[#FFB366] hover:bg-[#FFA04D] text-white px-4"
          >
            <Search className="w-4 h-4" />
          </Button>
        </form>
      </Card>

      {/* Tags Cloud */}
      <Card className="bg-[#2E5AAC] border-[#3d6bc4] p-6">
        <h3 className="text-xl font-bold text-[#FFB366] mb-4">الوسوم</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-[#3d6bc4] text-gray-200 hover:bg-[#FFB366] hover:text-white hover:border-[#FFB366] cursor-pointer transition-all duration-300 text-sm py-1 px-3"
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </Card>

      {/* About Company Card */}
      <Card className="bg-[#2E5AAC] border-[#3d6bc4] p-6">
        <h3 className="text-xl font-bold text-[#FFB366] mb-4">عن شركة البريق</h3>
        <div className="flex justify-center mb-4">
          <img src="/albareq-logo.png" alt="شركة البريق" className="h-20 w-auto" />
        </div>
        <p className="text-gray-200 text-sm leading-relaxed text-center">
          شركة البريق للتصميم والدعاية والإعلان، نقدم حلولاً إبداعية متكاملة في التصميم الجرافيكي، المواقع الإلكترونية، والتصميم المعماري.
        </p>
      </Card>
    </div>
  );
};

export default AlbareqSidebar;