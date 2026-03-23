import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

const AlbareqPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'الكل', nameEn: 'All' },
    { id: 'prints', name: 'المطبوعات', nameEn: 'المطبوعات' },
    { id: 'social', name: 'سوشيال ميديا', nameEn: 'سوشيال ميديا' },
    { id: 'logos', name: 'شعارات', nameEn: 'شعارات' },
    { id: 'websites', name: 'مواقع', nameEn: 'مواقع' }
  ];

  const projects = [
    {
      id: 1,
      title: 'تصاميم بوستات سوشيال ميديا | جامعة الرافدين',
      slug: 'social-media-alrafidain-university',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
      description: 'تصاميم سوشيال ميديا لجامعة الرافدين في بغداد بأسلوب موحد'
    },
    {
      id: 2,
      title: 'تصميم أكياس كرتونية | الفرسان للموبايل',
      slug: 'packaging-design-alfursan-mobile',
      category: 'prints',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop',
      description: 'أكياس كرتونية بتصميم فاخر لشركة الفرسان للموبايلات'
    },
    {
      id: 3,
      title: 'تصميم موقع الكتروني | اوس حسين',
      slug: 'website-design-aws-hussein',
      category: 'websites',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      description: 'موقع إلكتروني شخصي يعرض أعمال المصمم'
    },
    {
      id: 4,
      title: 'تصاميم سوشيال ميديا | مؤيد بدن',
      slug: 'social-media-muayad-badan',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
      description: 'تصاميم لشركة تنظيم الفعاليات والمهرجانات'
    },
    {
      id: 5,
      title: 'تصميم شعار وهوية بصرية | فكرة',
      slug: 'logo-design-feekra',
      category: 'logos',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
      description: 'شعار وهوية بصرية لوكالة Feekra Agency'
    },
    {
      id: 6,
      title: 'تصميم شعار وهوية بصرية | تاج مرمرة للسياحة',
      slug: 'logo-design-taj-marmara',
      category: 'logos',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
      description: 'شعار وهوية بصرية لشركة تاج مرمرة السياحية في تركيا'
    },
    {
      id: 7,
      title: 'تصاميم سوشيال ميديا | مدرسة المناهل',
      slug: 'social-media-almanahil',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      description: 'تصاميم سوشيال ميديا لمدرسة المناهل الابتدائية الأهلية'
    },
    {
      id: 8,
      title: 'تصميم متجر الكتروني | مطبعة رسمات',
      slug: 'ecommerce-rasamat',
      category: 'websites',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description: 'متجر إلكتروني احترافي لمطبعة رسمات'
    },
    {
      id: 9,
      title: 'تصاميم سوشيال ميديا | الابتسامة البيضاء للاسنان',
      slug: 'social-media-white-smile',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop',
      description: 'حملة سوشيال ميديا لعيادة الابتسامة البيضاء'
    },
    {
      id: 10,
      title: 'تصميم متجر الكتروني | نيرفا براندز',
      slug: 'ecommerce-nirva-brands',
      category: 'websites',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      description: 'تصميم متجر الكتروني لنيرفا براندز'
    },
    {
      id: 11,
      title: 'تصاميم سوشيال ميديا | دكتور علي',
      slug: 'social-media-dr-ali',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      description: 'حملة سوشيال ميديا لمركز AHJ – متخصص في الجهاز الهضمي'
    },
    {
      id: 12,
      title: 'تصاميم سوشيال ميديا | اكاديمية سهلة',
      slug: 'social-media-sahlah-academy',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
      description: 'منشورات سوشيال ميديا لمنصة Sahlah التعليمية'
    },
    {
      id: 13,
      title: 'تصميم متجر الكتروني | بيع بالجملة',
      slug: 'ecommerce-wholesale',
      category: 'websites',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      description: 'تصميم متجر الكتروني بالجملة'
    },
    {
      id: 14,
      title: 'تصميم مينيو | مطعم تاج العراق',
      slug: 'menu-design-taj-aliraq',
      category: 'prints',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
      description: 'تصميم مينيو مطعم تاج العراق'
    },
    {
      id: 15,
      title: 'تصميم مطبوعات | يارا للكوزمتيك',
      slug: 'packaging-design-yara',
      category: 'prints',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
      description: 'تصميم علبة عطر'
    },
    {
      id: 16,
      title: 'تصاميم سوشيال ميديا | متجر سبارز الالكتروني',
      slug: 'social-media-sparzz',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=800&h=600&fit=crop',
      description: 'منشورات سوشيال ميديا لمنتجات Sparzz'
    },
    {
      id: 17,
      title: 'تصميم مطبوعات | رارو',
      slug: 'print-design-raro',
      category: 'prints',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      description: 'تصميم مطبوعات شركة RARO للأزياء النسائية'
    },
    {
      id: 18,
      title: 'تصميم شعار وهوية بصرية | اشتريلي للتسوق',
      slug: 'logo-design-eshtareli',
      category: 'logos',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop',
      description: 'شعار اشترِلي لتطبيق التسوق الإلكتروني'
    },
    {
      id: 19,
      title: 'تصميم مطبوعات | نيرو',
      slug: 'print-design-nero',
      category: 'prints',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
      description: 'تصميم مطبوعات نيرو'
    },
    {
      id: 20,
      title: 'تصاميم سوشيال ميديا | متجر زالزال الالكتروني',
      slug: 'social-media-zalzal',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      description: 'منشورات سوشيال ميديا لمتجر Zalzal'
    },
    {
      id: 21,
      title: 'تصاميم سوشيال ميديا | كاريزما للسياحة',
      slug: 'social-media-karisma-tourism',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop',
      description: 'تصاميم سوشيال ميديا كاريزما للسياحة'
    },
    {
      id: 22,
      title: 'تصاميم سوشيال ميديا | افيون للسياحة',
      slug: 'social-media-afyon-tourism',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      description: 'تصاميم سوشيال ميديا افيون للسياحة'
    },
    {
      id: 23,
      title: 'تصميم متجر الكتروني | سبارز',
      slug: 'ecommerce-sparzz-store',
      category: 'websites',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      description: 'تصميم متجر الكتروني سبارز'
    },
    {
      id: 24,
      title: 'تصاميم سوشيال ميديا | بطاطا ايف',
      slug: 'social-media-batata-eve',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800&h=600&fit=crop',
      description: 'تصاميم سوشيال ميديا بطاطا ايف'
    },
    {
      id: 25,
      title: 'تصميم شعار وهوية بصرية | الصنوبر للانتاج الفني',
      slug: 'logo-design-alsanobar',
      category: 'logos',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      description: 'تصميم شعار وهوية بصرية الصنوبر للانتاج الفني'
    },
    {
      id: 26,
      title: 'تصميم شعار وهوية بصرية | ك بالجملة',
      slug: 'logo-design-k-wholesale',
      category: 'logos',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop',
      description: 'تصميم شعار وهويه بصرية ك بالجملة'
    },
    {
      id: 27,
      title: 'تصميم شعار وهوية بصرية | ازياء محمد رسول',
      slug: 'logo-design-mohammed-rasool',
      category: 'logos',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      description: 'تصميم شعار وهوية بصرية لازياء محمد رسول'
    },
    {
      id: 28,
      title: 'تصميم شعار وهوية بصرية | صوفيا للابسة',
      slug: 'logo-design-sofia',
      category: 'logos',
      image: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=800&h=600&fit=crop',
      description: 'تصميم شعار وهوية بصرية لصوفيا للالبسة'
    },
    {
      id: 29,
      title: 'الشعارات المصممة 2022',
      slug: 'logo-portfolio-2022',
      category: 'logos',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop',
      description: 'الشعارات المصممه 2022'
    },
    {
      id: 30,
      title: 'الشعارات المصممة 2021',
      slug: 'logo-portfolio-2021',
      category: 'logos',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
      description: 'تصميم شعار في عام 2021'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#1a2f52]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFB366] mb-6">
            احدث مشاريعنا الابداعية
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto">
            نحن نتعاون بشغف لنقدم لك أحدث مشاريعنا، المصممة بتفانٍ وابتكار.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-6 bg-[#1e3a61]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-[#FFB366] text-white hover:bg-[#FFA04D]'
                    : 'bg-[#2E5AAC] text-white hover:bg-[#3d6fc4]'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 bg-[#1a2f52]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link to={`/portfolio/${project.slug}`} key={project.id}>
                <Card 
                  className="bg-[#2E5AAC] border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f52] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 text-right">
                    <h3 className="text-xl font-bold text-white leading-relaxed">
                      {project.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-300">
                لا توجد مشاريع في هذا التصنيف حالياً
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#FFB366] to-[#FFA04D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            لديك مشروع في ذهنك؟
          </h2>
          <p className="text-2xl text-white mb-8">
            دعنا نحول أفكارك إلى واقع مبهر. تواصل معنا اليوم!
          </p>
          <a href="/contact">
            <Button className="bg-[#2E5AAC] hover:bg-[#1e3a61] text-white px-12 py-6 text-xl rounded-full">
              ابدأ مشروعك الآن
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AlbareqPortfolio;
