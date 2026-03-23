import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, Palette, FileText, Globe, Camera, Video, Share2, CheckCircle2, Star } from 'lucide-react';
import AlbareqBlogCard from '../components/AlbareqBlogCard';
import { blogPosts } from '../data/albareq-mock';

const AlbareqHome = () => {
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

      {/* Work Process Section */}
      <section className="py-20 px-6 bg-[#1a2f52]">
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

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-[#1a2f52]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            تواصل مع شركة البريق
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            لا تتردد في التواصل معنا للاستفسار عن خدماتنا أو لبدء مشروعك القادم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[#FFB366] hover:bg-[#FFA04D] text-white px-8 py-4 text-lg rounded-full">
                أرسل استفسارك
              </Button>
            </Link>
            <a href="https://wa.me/07816699222" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-[#FFB366] text-[#FFB366] hover:bg-[#FFB366] hover:text-white px-8 py-4 text-lg rounded-full">
                راسلنا عبر الواتساب
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlbareqHome;