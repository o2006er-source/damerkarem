import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks, socialLinks, contactInfo } from '../data/albareq-mock';
import { Search, Menu, X, Facebook, Linkedin, Instagram, MessageCircle, Mail, Palette } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const AlbareqHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getSocialIcon = (iconName) => {
    const icons = {
      facebook: <Facebook className="w-4 h-4" />,
      linkedin: <Linkedin className="w-4 h-4" />,
      instagram: <Instagram className="w-4 h-4" />,
      twitter: <FaXTwitter className="w-4 h-4" />,
      palette: <Palette className="w-4 h-4" />
    };
    return icons[iconName] || null;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#1a2f52] border-b border-[#2d4268] py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-white hover:text-[#FFB366] transition-colors">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </a>
            <a href={`https://wa.me/${contactInfo.whatsapp}`} className="flex items-center gap-2 text-white hover:text-[#FFB366] transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>{contactInfo.whatsapp}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-white hover:text-[#FFB366] transition-colors"
                aria-label={social.name}
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
            <button className="text-white hover:text-[#FFB366] transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#2E5AAC] px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/albareq-logo.png" alt="شركة البريق" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`text-base font-medium transition-colors relative pb-1 ${
                  link.active
                    ? 'text-[#FFB366]'
                    : 'text-white hover:text-[#FFB366]'
                }`}
              >
                {link.name}
                {link.active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFB366]"></span>
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
                    link.active ? 'text-[#FFB366]' : 'text-white hover:text-[#FFB366]'
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

export default AlbareqHeader;