import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Palette, FileText, Globe, Camera, Video, Share2, CheckCircle2, Star, Facebook, Instagram, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import AlbareqBlogCard from '../components/AlbareqBlogCard';
import { blogPosts } from '../data/albareq-mock';
import { clientLogos, portfolioItems, portfolioCategories, teamMembers, packages, testimonials } from '../data/additional-mock';

const AlbareqHomeComplete = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: <Palette className="w-12 h-12 text-[#FFB366]" />,
      title: 'الشعارات والهويات البصرية',
      description: 'تصميم شعارات احترافية تعبر عن شخصية الشركة، وتحديد الألوان والخطوط والأنماط البصرية التي تشكل هوية متكاملة ومميزة للمؤسسات.'
    },
    {
      icon: <FileText className="w-12 h-12 text-[#FFB366]" />,
      title: 'المطبوعات',
      description: 'تصميم جميع أنواع المواد المطبوعة مثل الكتيبات، والبطاقات التعريفية، والملصقات، واللوحات الإعلانية، والتغليف والتعبئة.'
    },
    {
      icon: <Globe className="w-12 h-12 text-[#FFB366]" />,
      title: 'المواقع والمتاجر الإلكترونية',
      description: 'تطوير مواقع بواجهات مستخدم سهلة ومتجاوبة تتناسب مع جميع الأجهزة، مع الاهتمام بتجربة المستخدم وسرعة التصفح.'
    },
    {
      icon: <Share2 className="w-12 h-12 text-[#FFB366]" />,
      title: 'منشورات التواصل الاجتماعي',
      description: 'تصاميم مميزة تساعد على تحسين تواجد العلامة التجارية وجذب اهتمام المتابعين على مختلف المنصات الاجتماعية.'
    },
    {
      icon: <Camera className="w-12 h-12 text-[#FFB366]" />,
      title: 'التصوير والإنتاج الفني',
      description: 'تصوير منتجات، مناسبات، أو جلسات تصوير شخصية، نوفّر فريقًا متميزًا ومعدات متطورة لضمان صور عالية الجودة.'
    },
    {
      icon: <Video className="w-12 h-12 text-[#FFB366]" />,
      title: 'الموشن جرافيك',
      description: 'تصميم مقاطع متحركة تلائم هويتك التجارية وتستهدف جمهورك بأسلوب مميز، باستخدام أحدث التقنيات.'
    }
  ];

  const workProcess = [
    {
      number: '1',
      title: 'فكرة',
      description: 'بناءً على معلومات وأهداف العميل المطلوبة، نجد أولاً بعض الأفكار الجديدة للمشروع'
    },
    {
      number: '2',
      title: 'تصميم',
      description: 'بناءً على الفكرة، سنبدأ في تصميم المشروع ومتطلباته الإعلانية والتسويقية'
    },
    {
      number: '3',
      title: 'تسويق',
      description: 'بعد الانتهاء من التصميم، نبدأ في مرحلة التسويق والترويج إلكترونياً لتحقيق الأهداف المطلوبة'
    }
  ];

  const stats = [
    { value: '90', label: 'الشعارات والهويات البصرية' },
    { value: '83', label: 'المطبوعات والتغليف' },
    { value: '90', label: 'تصاميم السوشيال ميديا' },
    { value: '89', label: 'المواقع والمتاجر الإلكترونية' }
  ];

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.categorySlug === selectedCategory);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح!');
  };

  return (
    <div className="min-h-screen bg-[#1a2f52]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                شركة البريق
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFB366] mb-6">
                نقدم تصاميم تعكس رؤيتك بلمسات احترافية
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                متخصصون في التصميم الجرافيكي، الدعاية والإعلان، المواقع الإلكترونية، والتصميم المعماري. نقدم حلولاً مبتكرة تعزز هوية علامتك التجارية.
              </p>
              <div className="flex gap-4">
                <Link to="/services">
                  <Button className="bg-[#FFB366] hover:bg-[#FFA04D] text-white px-8 py-6 text-lg rounded-full">
                    استعرض خدماتنا
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#2E5AAC] px-8 py-6 text-lg rounded-full">
                    تواصل معنا
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/albareq-logo.png" 
                alt="شركة البريق" 
                className="w-full max-w-md mx-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#1e3a61]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ماذا نستطيع أن نقدم لك
            </h2>
            <p className="text-xl text-[#FFB366]">
              اكتشف خدمات شركة البريق
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-[#2E5AAC] border-[#3d6bc4] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-center leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-white text-lg mb-4">هل أعجبتك خدماتنا؟ تفضل باستعراض المزيد منها</p>
            <Link to="/services">
              <Button className="bg-[#FFB366] hover:bg-[#FFA04D] text-white px-8 py-3 rounded-full">
                شاهد كل خدماتنا الاحترافية الآن
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Logos Carousel */}
      <section className="py-16 px-6 bg-[#1a2f52]">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div className="flex animate-scroll">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-48 mx-8">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-20 object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20 px-6 bg-[#1e3a61]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              مع الخبرة نكمل أي مشروع
            </h2>
            <p className="text-xl text-[#FFB366]">
              تعرف على آلية العمل لدينا
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workProcess.map((step, index) => (
              <Card key={index} className="bg-[#2E5AAC] border-[#3d6bc4] p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#FFB366] rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#FFB366] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-white text-2xl font-bold">نحن جاهزون لأي مشروع</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 bg-[#1a2f52]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              اكتشف أحدث أعمالنا
            </h2>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {portfolioCategories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-[#FFB366] text-white'
                    : 'bg-transparent border-2 border-[#FFB366] text-[#FFB366] hover:bg-[#FFB366] hover:text-white'
                }`}
              >
                {cat.name}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPortfolio.slice(0, 8).map((item) => (
              <Card key={item.id} className="bg-[#2E5AAC] border-[#3d6bc4] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f52] to-transparent opacity-60"></div>
                </div>
                <div className="p-4">
                  <Badge className="bg-[#FFB366] text-white border-0 mb-2 text-xs">
                    {item.category}
                  </Badge>
                  <h3 className="text-white font-bold text-sm line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">{item.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#2E5AAC] to-[#1e3a61]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ابدأ مشروعك الجديد اليوم
          </h2>
          <p className="text-2xl text-gray-200 mb-8">
            حان الوقت لتنفذ ما تحلم به
          </p>
          <Link to="/contact">
            <Button className="bg-[#FFB366] hover:bg-[#FFA04D] text-white px-12 py-6 text-xl rounded-full">
              ابدأ اليوم
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-[#1a2f52]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                لماذا تختار شركة البريق؟
              </h2>
              <h3 className="text-2xl text-[#FFB366] mb-6">
                نحن محترفون في عملنا
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                نتميز بمهاراتنا العالية في التصميم الجرافيكي الاحترافي للشركات، حيث نقدم حلولاً إبداعية ومبتكرة تواكب أحدث الاتجاهات العالمية.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                يعمل فريقنا المتخصص بشغف لإبداع تصاميم براند متكاملة تناسب الشركات الناشئة، مع الالتزام بأعلى معايير الجودة والتميز في كل تفاصيل المشروع.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-[#2E5AAC] rounded-lg">
                    <div className="text-4xl font-bold text-[#FFB366] mb-2">{stat.value}</div>
                    <div className="text-white text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/albareq-logo.png" 
                alt="شركة البريق" 
                className="w-full max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-[#1e3a61]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              قابل فريقنا
            </h2>
            <p className="text-xl text-[#FFB366]">
              تعرف على الفريق المسؤول عن تحقيق رؤيتنا
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="bg-[#FFB366] border-0 overflow-hidden text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-[#2E5AAC]">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-200 mb-4">{member.position}</p>
                  <div className="flex justify-center gap-3">
                    <a href={member.social.facebook} className="text-white hover:text-[#FFB366] transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href={member.social.instagram} className="text-white hover:text-[#FFB366] transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-[#FFB366] transition-colors">
                      <FaXTwitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.linkedin} className="text-white hover:text-[#FFB366] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-6 bg-[#1a2f52]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              باقاتنا المتنوعة
            </h2>
            <p className="text-xl text-[#FFB366]">
              اختر الباقة المناسبة لعملك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`border-2 p-8 text-center transition-all duration-300 hover:-translate-y-2 ${
                pkg.featured 
                  ? 'bg-[#FFB366] border-[#FFB366] shadow-2xl scale-105' 
                  : 'bg-[#2E5AAC] border-[#3d6bc4]'
              }`}>
                <div className={`text-5xl font-bold mb-4 ${pkg.featured ? 'text-white' : 'text-[#FFB366]'}`}>
                  {pkg.price}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${pkg.featured ? 'text-white' : 'text-[#FFB366]'}`}>
                  {pkg.name}
                </h3>
                <p className={`mb-6 ${pkg.featured ? 'text-white' : 'text-gray-200'}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className={`flex items-center gap-2 ${pkg.featured ? 'text-white' : 'text-gray-200'}`}>
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${pkg.featured ? 'text-white' : 'text-[#FFB366]'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/07816699222" target="_blank" rel="noopener noreferrer">
                  <Button className={`w-full rounded-full ${
                    pkg.featured 
                      ? 'bg-white text-[#FFB366] hover:bg-gray-100' 
                      : 'bg-[#FFB366] text-white hover:bg-[#FFA04D]'
                  }`}>
                    اطلبها الآن
                  </Button>
                </a>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/packages">
              <Button className="bg-[#FFB366] hover:bg-[#FFA04D] text-white px-8 py-3 rounded-full">
                شاهد باقي الباقات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 px-6 bg-[#1e3a61]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              أحدث مقالاتنا
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.slice(0, 4).map((post) => (
              <AlbareqBlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button className="bg-[#FFB366] hover:bg-[#FFA04D] text-white px-8 py-3 rounded-full">
                شاهد جميع المقالات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-[#1a2f52]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              شهادات من عملائنا
            </h2>
            <p className="text-xl text-[#FFB366]">
              نفخر بشهادات عملائنا ونتطلع إلى تقديم نفس المستوى العالي من الجودة والتميز لك
            </p>
          </div>
          
          <div className="relative">
            <Card className="bg-[#2E5AAC] border-[#3d6bc4] p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full mb-6 border-4 border-[#FFB366]"
                />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFB366] fill-[#FFB366]" />
                  ))}
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h4 className="text-xl font-bold text-[#FFB366] mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-300">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </Card>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-[#FFB366] hover:bg-[#FFA04D] rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-[#FFB366] hover:bg-[#FFA04D] rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-[#FFB366] w-8' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-[#1e3a61]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              تواصل مع شركة البريق
            </h2>
            <p className="text-xl text-gray-300">
              لا تتردد في التواصل معنا للاستفسار عن خدماتنا أو لبدء مشروعك القادم
            </p>
          </div>

          <Card className="bg-[#2E5AAC] border-[#3d6bc4] p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    placeholder="اسمك"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-[#1a2f52] border-[#2d4268] text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="بريدك الإلكتروني"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-[#1a2f52] border-[#2d4268] text-white placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="رقم الهاتف"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-[#1a2f52] border-[#2d4268] text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="رسالتك"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-[#1a2f52] border-[#2d4268] text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-[#FFB366] hover:bg-[#FFA04D] text-white py-6 text-lg rounded-full"
              >
                إرسال
              </Button>
            </form>
            
            <div className="text-center mt-8">
              <p className="text-white mb-4">أو راسلنا عبر الواتساب</p>
              <a href="https://wa.me/07816699222" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
                  واتساب
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AlbareqHomeComplete;
