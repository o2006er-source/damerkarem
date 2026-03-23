import React, { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Search } from 'lucide-react';
import { tags } from '../data/mock';

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="space-y-6">
      {/* Search Box */}
      <Card className="bg-[#1e2f4d] border-[#2d3e5f] p-6">
        <h3 className="text-xl font-bold text-[#FF7A3D] mb-4">بحث</h3>
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="text"
            placeholder="بحث..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#1a2844] border-[#2d3e5f] text-white placeholder:text-gray-500 focus:border-[#FF7A3D]"
          />
          <Button
            type="submit"
            className="bg-[#FF7A3D] hover:bg-[#FF5722] text-white px-4"
          >
            <Search className="w-4 h-4" />
          </Button>
        </form>
      </Card>

      {/* Tags Cloud */}
      <Card className="bg-[#1e2f4d] border-[#2d3e5f] p-6">
        <h3 className="text-xl font-bold text-[#FF7A3D] mb-4">سحابة الكلمات الدلالية</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-[#2d3e5f] text-gray-300 hover:bg-[#FF7A3D] hover:text-white hover:border-[#FF7A3D] cursor-pointer transition-all duration-300 text-sm py-1 px-3"
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;