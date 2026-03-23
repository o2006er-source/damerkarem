import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks, socialLinks, contactInfo } from '../data/mock';
import { Search, Menu, X, Facebook, Linkedin, Instagram, MessageCircle, Mail } from 'lucide-react';
import { FaPinterest, FaXTwitter } from 'react-icons/fa6';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getSocialIcon = (iconName) => {
    const icons = {
      pinterest: <FaPinterest className="w-4 h-4" />,
      linkedin: <Linkedin className="w-4 h-4" />,
      instagram: <Instagram className="w-4 h-4" />,
      twitter: <FaXTwitter className="w-4 h-4" />,
      facebook: <Facebook className="w-4 h-4" />
    };
    return icons[iconName] || null;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#1a2844] border-b border-[#2d3e5f] py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-white hover:text-[#FF7A3D] transition-colors">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </a>
            <a href={`https://wa.me/${contactInfo.whatsapp}`} className="flex items-center gap-2 text-white hover:text-[#FF7A3D] transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>{contactInfo.whatsapp}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-white hover:text-[#FF7A3D] transition-colors"
                aria-label={social.name}
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
            <button className="text-white hover:text-[#FF7A3D] transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#1e2f4d] px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A3D] to-[#FF5722] rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">T</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`text-base font-medium transition-colors relative pb-1 ${
                  link.active
                    ? 'text-[#FF7A3D]'
                    : 'text-white hover:text-[#FF7A3D]'
                }`}
              >
                {link.name}
                {link.active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7A3D]"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`text-base font-medium transition-colors ${
                    link.active ? 'text-[#FF7A3D]' : 'text-white hover:text-[#FF7A3D]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;