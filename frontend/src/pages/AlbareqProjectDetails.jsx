import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Calendar, MapPin, User } from 'lucide-react';

// Extended project data with full details
const projectsData = [
  {
    id: 1,
    title: 'تصاميم بوستات سوشيال ميديا | جامعة الرافدين',
    slug: 'social-media-alrafidain-university',
    category: 'سوشيال ميديا',
    client: 'جامعة الرافدين',
    country: 'العراق - بغداد',
    date: '03/05/2026',
    description: 'قمنا بتنفيذ مجموعة تصاميم سوشيال ميديا لصالح جامعة الرافدين بهدف تسويق خدمات الأقساط والمنح/المقاعد المجانية بطريقة واضحة وجذابة. اعتمدنا قالبًا بصريًا ثابتًا يعزز التعرف على العلامة، مع توزيع هرمي للنصوص (عنوان قوي → تفاصيل مختصرة → دعوة لاتخاذ إجراء) وإضافة عناصر داعمة مثل QR لتسهيل التقديم والمتابعة.',
    result: 'محتوى منظم، قابل للنشر على إنستغرام وفيسبوك، ويخدم الإعلان والتوعية بشكل مباشر.',
    features: [
      'هوية موحدة وأسلوب عصري مناسب للقطاع التعليمي',
      'تسلسل Carousel يرفع وقت المشاهدة والفهم',
      'وضوح Call To Action + QR لتسهيل الخطوة التالية',
      'توافق كامل مع مقاسات السوشيال (Feed/Reels Cover/Story عند الحاجة)'
    ],
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'تصميم أكياس كرتونية | الفرسان للموبايل',
    slug: 'packaging-design-alfursan-mobile',
    category: 'مطبوعات',
    client: 'الفرسان للموبايل',
    country: 'العراق - بغداد',
    date: '15/04/2026',
    description: 'تصميم أكياس كرتونية فاخرة لشركة الفرسان للموبايلات مع التركيز على الهوية البصرية والألوان المميزة للعلامة التجارية.',
    result: 'أكياس كرتونية عالية الجودة تعكس احترافية العلامة التجارية.',
    features: [
      'تصميم فاخر يعكس جودة المنتجات',
      'استخدام ألوان الهوية البصرية',
      'جودة طباعة عالية',
      'أحجام متعددة حسب المنتجات'
    ],
    coverImage: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'تصميم موقع الكتروني | اوس حسين',
    slug: 'website-design-aws-hussein',
    category: 'مواقع',
    client: 'أوس حسين',
    country: 'العراق',
    date: '22/03/2026',
    description: 'موقع إلكتروني شخصي يعرض أعمال المصمم بطريقة احترافية وجذابة مع تجربة مستخدم سلسة.',
    result: 'موقع احترافي متجاوب يعرض الأعمال بشكل مميز.',
    features: [
      'تصميم متجاوب مع جميع الأجهزة',
      'معرض أعمال تفاعلي',
      'نموذج تواصل مباشر',
      'سرعة تحميل عالية'
    ],
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    ]
  },
  {
    id: 4,
    title: 'تصاميم سوشيال ميديا | مؤيد بدن',
    slug: 'social-media-muayad-badan',
    category: 'سوشيال ميديا',
    client: 'مؤيد بدن',
    country: 'العراق',
    date: '10/03/2026',
    description: 'تصاميم سوشيال ميديا لشركة تنظيم الفعاليات والمهرجانات تعكس الحيوية والإبداع.',
    result: 'محتوى جذاب يزيد التفاعل مع الجمهور المستهدف.',
    features: [
      'تصاميم ديناميكية وملفتة',
      'محتوى متنوع للفعاليات',
      'نشر منتظم ومخطط',
      'تفاعل عالي مع المتابعين'
    ],
    coverImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop'
    ]
  }
];

const AlbareqProjectDetails = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#1a2f52] flex items-center justify-center">
        <Card className="bg-[#2E5AAC] border-0 p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">المشروع غير موجود</h2>
          <Link to="/portfolio">
            <Button className="bg-[#FFB366] hover:bg-[#FFA04D] text-white">
              العودة إلى الأعمال
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a2f52]">
      {/* Breadcrumb */}
      <section className="pt-32 pb-8 px-6 bg-[#2E5AAC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-gray-200 text-sm mb-4">
            <Link to="/" className="hover:text-[#FFB366] transition-colors">الرئيسية</Link>
            <span>/</span>
            <Link to="/portfolio" className="hover:text-[#FFB366] transition-colors">أعمالنا</Link>
            <span>/</span>
            <span className="text-[#FFB366]">{project.title}</span>
          </div>
        </div>
      </section>

      {/* Project Header */}
      <section className="py-12 px-6 bg-[#1e3a61]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#FFB366] mb-6 text-right">
                {project.title}
              </h1>
              
              {/* Cover Image */}
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Description */}
              <Card className="bg-[#2E5AAC] border-0 p-6 mb-8">
                <p className="text-white text-lg leading-relaxed text-right">
                  {project.description}
                </p>
              </Card>

              {/* Result */}
              {project.result && (
                <Card className="bg-[#1a2f52] border-0 p-6 mb-8">
                  <h3 className="text-2xl font-bold text-[#FFB366] mb-4 text-right">النتيجة:</h3>
                  <p className="text-gray-200 text-lg leading-relaxed text-right">
                    {project.result}
                  </p>
                </Card>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <Card className="bg-[#2E5AAC] border-0 p-6 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 text-right">مميزات التصميم:</h3>
                  <ul className="space-y-3 text-right">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-gray-200 text-lg flex items-start gap-3">
                        <span className="text-[#FFB366] mt-1">•</span>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* Project Images Gallery */}
              {project.images && project.images.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-right">معرض الصور</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img 
                          src={image} 
                          alt={`${project.title} - صورة ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Info Card */}
              <Card className="bg-[#2E5AAC] border-0 p-6 mb-6 sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-6 text-right">معلومات المشروع</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-right">
                    <User className="w-5 h-5 text-[#FFB366] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-1">العميل</p>
                      <p className="text-white font-semibold">{project.client}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-right">
                    <MapPin className="w-5 h-5 text-[#FFB366] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-1">الدولة</p>
                      <p className="text-white font-semibold">{project.country}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-right">
                    <Calendar className="w-5 h-5 text-[#FFB366] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-1">التاريخ</p>
                      <p className="text-white font-semibold">{project.date}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#1a2f52]">
                  <Link to="/contact">
                    <Button className="w-full bg-[#FFB366] hover:bg-[#FFA04D] text-white py-3 rounded-lg">
                      ابدأ مشروعك الآن
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>

          {/* Back to Portfolio */}
          <div className="mt-12 text-center">
            <Link to="/portfolio">
              <Button className="bg-[#2E5AAC] hover:bg-[#3d6fc4] text-white px-8 py-4 rounded-full flex items-center gap-2 mx-auto">
                <ArrowRight className="w-5 h-5" />
                <span>العودة إلى الأعمال</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlbareqProjectDetails;
