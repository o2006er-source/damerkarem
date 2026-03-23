import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Check, ArrowLeft } from 'lucide-react';

const AlbareqPackages = () => {
  const packageCategories = [
    {
      id: 1,
      title: 'السوشيال ميديا',
      description: 'باقات متكاملة لإدارة وتصميم محتوى احترافي وجذاب يزيد من تفاعل جمهورك.',
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      link: '#social-media'
    },
    {
      id: 2,
      title: 'الشعارات',
      description: 'نصمّم لك شعارات احترافية تعبّر عن هوية علامتك التجارية وتُميّزك في السوق.',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
      link: '#logos'
    },
    {
      id: 3,
      title: 'التسويق والادارة',
      description: 'إدارة حملاتك التسويقية باحتراف، مع إعداد استراتيجيات وتخطيط فعال لنجاحك.',
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      link: '#marketing'
    },
    {
      id: 4,
      title: 'المطبوعات',
      description: 'تصاميم أنيقة للكتيبات، البروشورات، البوسترات، وبطاقات العمل، جاهزة للطباعة.',
      icon: '🖨️',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
      link: '#prints'
    },
    {
      id: 5,
      title: 'المواقع والمتاجر',
      description: 'تصميم وتطوير مواقع إلكترونية ومتاجر متكاملة وسريعة الاستجابة على جميع الأجهزة.',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      link: '#websites'
    },
    {
      id: 6,
      title: 'السيو',
      description: 'تحسين ظهور موقعك في نتائج البحث لزيادة الزيارات والعملاء المحتملين.',
      icon: '🔍',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop',
      link: '#seo'
    },
    {
      id: 7,
      title: 'زيادة المتابعين',
      description: 'خدمات لزيادة عدد المتابعين وتحسين ظهور حسابك، مع استهداف دقيق.',
      icon: '👥',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop',
      link: '#followers'
    },
    {
      id: 8,
      title: 'التصوير',
      description: 'خدمة تصوير الصور والفيديو (Reels) تعرض منتجاتك أو خدماتك بأسلوب عصري وجذاب',
      icon: '📸',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop',
      link: '#photography'
    }
  ];

  const faqs = [
    {
      category: 'الأسئلة العامة',
      questions: [
        {
          q: 'ما هي طرق الدفع المتوفرة؟',
          a: 'نقبل الدفع عبر التحويل البنكي، أو بطاقات الائتمان.'
        },
        {
          q: 'هل يمكنني طلب خطة مخصصة لاحتياجاتي؟',
          a: 'نعم، نحن نقدم خططًا مخصصة بناءً على احتياجاتك ونوع مشروعك او خدماتك.'
        },
        {
          q: 'هل أحتاج إلى دفع المبلغ كاملًا مقدمًا؟',
          a: 'نعتمد على نظام الدفع المرن حيث يمكنك دفع 50% مقدمًا والباقي عند الانتهاء.'
        },
        {
          q: 'هل توجد خصومات عند طلب أكثر من خدمة؟',
          a: 'نعم، نقدم خصومات خاصة على الطلبات المتعددة أو عند الاشتراك في أكثر من خطة في نفس الوقت.'
        }
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'نور محمد',
      position: 'مدير شركة ريتانا',
      text: 'تعاملنا مع فريق شركة البريق كان تجربة رائعة بكل المقاييس. قدموا لنا تصميم شعار مذهل يعكس هوية علامتنا التجارية بشكل مثالي.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'عبد القادر محمد',
      position: 'مطعم تاج العراق',
      text: 'نود أن نعبر عن امتناننا الكبير لشركة البريق على تصميمها المميز. لقد أبدعوا في تقديم تصميم احترافي يعكس هوية مطعمنا بطريقة مبتكرة وجذابة.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'ليلى الحسن',
      position: 'مدير علاقات في الابتسامة البيضاء',
      text: 'شركة البريق تمكنت من تحويل أفكارنا إلى تصاميم فريدة وجذابة. كانوا محترفين في كل مرحلة من مراحل العمل.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a2f52]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFB366] mb-6">
            اختر الباقة المناسبة لاحتياجاتك
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto">
            نقدم لك باقات متنوعة في التصميم، تناسب جميع الاحتياجات بأسعار تنافسية وجودة عالية
          </p>
        </div>
      </section>

      {/* Package Categories Grid */}
      <section className="py-16 px-6 bg-[#1e3a61]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packageCategories.map((pkg) => (
              <Card 
                key={pkg.id} 
                className="bg-[#1a2f52] border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f52] to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 text-5xl">
                    {pkg.icon}
                  </div>
                </div>
                <div className="p-6 text-right">
                  <h3 className="text-2xl font-bold text-[#FFB366] mb-3">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-200 text-base leading-relaxed mb-4">
                    {pkg.description}
                  </p>
                  <Button className="bg-[#2E5AAC] hover:bg-[#3d6fc4] text-white w-full rounded-lg flex items-center justify-center gap-2">
                    استكشف الباقات
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-20 px-6 bg-[#1a2f52]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFB366] mb-4">
              أكتشف أحدث مشاريعنا
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-[#2E5AAC] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="h-48">
                  <img
                    src={`https://images.unsplash.com/photo-${1523240795612 + item * 1000}?w=400&h=300&fit=crop`}
                    alt={`مشروع ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-right">
                  <h4 className="text-white font-semibold">مشروع تصميم {item}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button className="bg-[#FFB366] hover:bg-[#FFA04D] text-white px-12 py-4 text-lg rounded-full">
                عرض جميع الأعمال
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-[#1e3a61]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              الأسئلة الأكثر شيوعاً
            </h2>
            <p className="text-xl text-[#FFB366]">
              الأسئلة العامة عن جميع الباقات
            </p>
          </div>
          
          {faqs.map((faqCategory, catIndex) => (
            <div key={catIndex} className="space-y-6">
              {faqCategory.questions.map((faq, index) => (
                <Card key={index} className="bg-[#1a2f52] border-0 p-6 text-right hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#FFB366] mb-3 flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed mr-9">
                    {faq.a}
                  </p>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-[#1a2f52]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              شهادات من عملائنا
            </h2>
            <p className="text-xl text-[#FFB366]">
              أكتشف ما يقوله عملاؤنا عن تجربتهم مع شركة البريق
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card 
                key={testimonial.id} 
                className="bg-[#2E5AAC] border-0 p-8 text-right hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 text-right">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#FFB366] text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <p className="text-gray-200 text-base leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#FFB366] to-[#FFA04D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            هل لديك طلب مخصص؟
          </h2>
          <p className="text-2xl text-white mb-8">
            تواصل معنا لنصمم لك باقة خاصة تناسب احتياجاتك بالضبط
          </p>
          <Link to="/contact">
            <Button className="bg-[#2E5AAC] hover:bg-[#1e3a61] text-white px-12 py-6 text-xl rounded-full">
              تواصل مع الفريق
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AlbareqPackages;
