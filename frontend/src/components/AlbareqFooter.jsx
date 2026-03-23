import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Palette } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const AlbareqFooter = () => {
  return (
    <footer className="bg-[#1a2f52] border-t border-[#2d4268] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img 
              src="/albareq-logo.png" 
              alt="شركة البريق" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed mb-4">
              شركة البريق للتصميم والدعاية والإعلان - نقدم حلولاً إبداعية في التصميم الجرافيكي، المواقع الإلكترونية، والتصميم المعماري.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#FFB366] mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#FFB366] transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#FFB366] transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#FFB366] transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-[#FFB366] transition-colors">
                  أعمالنا
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-[#FFB366] transition-colors">
                  المدونة
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#FFB366] transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-[#FFB366] mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">تصميم الشعارات والهويات</li>
              <li className="text-gray-300">المطبوعات والإعلانات</li>
              <li className="text-gray-300">المواقع الإلكترونية</li>
              <li className="text-gray-300">التصميم المعماري</li>
              <li className="text-gray-300">الموشن جرافيك</li>
              <li className="text-gray-300">التصوير الاحترافي</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-[#FFB366] mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 text-[#FFB366]" />
                <a href="mailto:albareq@dlr.iq" className="hover:text-[#FFB366] transition-colors">
                  albareq@dlr.iq
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 text-[#FFB366]" />
                <a href="tel:07816699222" className="hover:text-[#FFB366] transition-colors">
                  07816699222
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-[#FFB366]" />
                <span>العراق</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-[#2E5AAC] rounded-full flex items-center justify-center text-white hover:bg-[#FFB366] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2E5AAC] rounded-full flex items-center justify-center text-white hover:bg-[#FFB366] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2E5AAC] rounded-full flex items-center justify-center text-white hover:bg-[#FFB366] transition-colors">
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2E5AAC] rounded-full flex items-center justify-center text-white hover:bg-[#FFB366] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2E5AAC] rounded-full flex items-center justify-center text-white hover:bg-[#FFB366] transition-colors">
                <Palette className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2d4268] pt-6 text-center">
          <p className="text-gray-400">
            جميع الحقوق محفوظة © {new Date().getFullYear()} شركة البريق للتصميم والدعاية والإعلان
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AlbareqFooter;
