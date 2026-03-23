import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projects-data';

const AlbareqServices = () => {
  const services = [
    {
      id: 1,
      title: 'الشعارات والهوية البصرية',
      description: 'تصميم شعارات احترافية وهويات بصرية مميزة تعبر عن شخصية الشركة، وتحديد الألوان والخطوط والأنماط البصرية التي تشكل هوية متكاملة ومميزة للمؤسسات.',
      category: 'شعارات',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'المطبوعات',
      description: 'تصميم جميع انواع المواد المطبوعة مثل الكتيبات، والبطاقات التعريفية، والملصقات، واللوحات الإعلانية، التغليف والتعبئة، مع مراعاة معايير الطباعة الحديثة.',
      category: 'طباعة',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'الاعلانات التسويقية',
      description: 'تصميم الإعلانات الرقمية والبنرات الترويجية والرسائل التسويقية التي تستهدف العملاء المحتملين، مع الاهتمام بتقديم تصاميم جذابة ومتوافقة مع الهوية البصرية.',
      category: 'تسويقي',
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'المواقع والمتاجر الالكترونية',
      description: 'تطوير مواقع بواجهات مستخدم سهلة تتناسب مع جميع الأجهزة، مع الاهتمام بتجربة المستخدم وسرعة التصفح، إلى جانب تصميم وإدارة المتاجر الإلكترونية ودعم عملية الشراء عبر الإنترنت.',
      category: 'مواقع',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      title: 'ادارة وكتابة المحتوى',
      description: 'إعداد استراتيجيات نشر المحتوى وصناعة منشورات متنوعة تتناسب مع هوية العلامة التجارية، لزيادة التفاعل مع الجمهور وبناء علاقة قوية معه.',
      category: 'المحتوى',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      title: 'منشورات التواصل الاجتماعي',
      description: 'تصاميم مميزة تساعد على تحسين تواجد العلامة التجارية وجذب اهتمام المتابعين لعروض او خدمات الشركة على مختلف المنصات الاجتماعية',
      category: 'منشورات',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop'
    },
    {
      id: 7,
      title: 'التسويق الالكتروني',
      description: 'مساعدة الشركات على تحديد أفضل طرق للترويج لعلامتها التجارية، وتحليل الجمهور المستهدف، وتطوير استراتيجيات تساهم في تعزيز الوعي.',
      category: 'تسويق',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop'
    },
    {
      id: 8,
      title: 'الاعلانات الممولة',
      description: 'انشاء اعلانات مدفوعة ومستهدفة على جميع المنصات لتساعد الشركات على الوصول إلى جمهور مستهدف، وزيادة التفاعل والتواجد والمبيعات بسرعة.',
      category: 'اعلانات',
      image: 'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=800&h=600&fit=crop'
    },
    {
      id: 9,
      title: 'الموشن جرافيك',
      description: 'نحرص على تصميم مقاطع متحركة تلائم هويتك التجارية وتستهدف جمهورك بأسلوب مميز، باستخدام أحدث التقنيات لتعزيز تأثير علامتك التجارية وزيادة التفاعل مع جمهورك',
      category: 'موشن جرافيك',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
    },
    {
      id: 10,
      title: 'كتابة المقالات',
      description: 'تقديم محتوى عالي الجودة متوافق مع معايير تحسين محركات البحث، يعزز ظهورك الرقمي ويجذب جمهورك المستهدف. سواء كنت بحاجة إلى مقالات تعليمية، تسويقية، أو معلوماتية.',
      category: 'مقالات',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop'
    },
    {
      id: 11,
      title: 'ادارة المواقع الالكترونية',
      description: 'تحديث المحتوى بانتظام، تحسين الأداء وسرعة التحميل، حل المشكلات التقنية، وضمان أمان الموقع وحمايته من الاختراق. تحسين تجربة المستخدم وتحليل الأداء، مع توفير دعم فني مستمر.',
      category: 'مواقع',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
    },
    {
      id: 12,
      title: 'التصوير والانتاج الفني',
      description: 'سواء كنت تحتاج لتصوير منتجات، مناسبات، أو جلسات تصوير شخصية، نوفّر فريقًا متميزًا ومعدات متطورة لضمان صور عالية الجودة بلقطات تعكس رؤيتك وتدعم علامتك التجارية.',
      category: 'تصوير',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'تصاميم بوستات سوشيال ميديا | جامعة الرافدين',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
      description: 'تصاميم سوشيال ميديا لجامعة الرافدين في بغداد'
    },
    {
      id: 2,
      title: 'تصميم أكياس كرتونية | الفرسان للموبايل',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop',
      description: 'أكياس كرتونية بتصميم فاخر لشركة الفرسان للموبايلات'
    },
    {
      id: 3,
      title: 'تصميم موقع الكتروني | اوس حسين',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      description: 'موقع إلكتروني شخصي يعرض أعمال المصمم'
    },
    {
      id: 4,
      title: 'تصاميم سوشيال ميديا | مؤيد بدن',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
      description: 'تصاميم لشركة تنظيم الفعاليات والمهرجانات'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'نور محمد',
      position: 'مدير شركة ريتانا',
      text: 'تعاملنا مع فريق شركة البريق كان تجربة رائعة بكل المقاييس. قدموا لنا تصميم شعار مذهل يعكس هوية علامتنا التجارية بشكل مثالي. نوصي بشدة بخدماتهم لكل من يبحث عن الإبداع والاحترافية.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'عبد القادر محمد',
      position: 'مطعم تاج العراق',
      text: 'نود أن نعبر عن امتناننا الكبير لشركة البريق على تصميمها المميز لقائمة الطعام الخاصة بمطعمنا. لقد أبدعوا في تقديم تصميم احترافي يعكس هوية مطعمنا بطريقة مبتكرة وجذابة.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'علي النجار',
      position: 'مدير تسويق في سبارز',
      text: 'تعاملنا مع شركة البريق لتنفيذ تصاميم لحساباتنا على مواقع التواصل الاجتماعي، وكانت التجربة ممتازة بكل المقاييس. التصاميم المقدمة مبتكرة وجذابة وتعبر بوضوح عن هوية شركتنا.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop'
    }
  ];

  const innovationPoints = [
    {
      number: '٠١',
      title: 'الابتكار والمعايير',
      points: [
        'التقنيات الحديثة: نستخدم أحدث الأدوات والبرامج لضمان تصاميم مبتكرة وعالية الجودة تلبي تطلعات عملائنا.',
        'المعايير العالمية: نلتزم بالمعايير الدولية في كل جوانب التصميم لضمان نتائج متميزة وموثوقة.'
      ]
    },
    {
      number: '٠٢',
      title: 'بناء الثقة',
      points: [
        'التواصل المستمر: نتواصل بشكل دائم مع عملائنا لفهم احتياجاتهم وتقديم تصاميم تتجاوز توقعاتهم.',
        'الجودة والاتساق: نحرص على تقديم تصاميم متسقة وعالية الجودة، مما يعزز من ثقة العملاء في خدماتنا.'
      ]
    },
    {
      number: '٠٣',
      title: 'نتائج قابلة للقياس',
      points: [
        'تجربة مستخدم استثنائية: نسعى لتقديم تجربة مستخدم سلسة وجذابة عبر كل مشاريعنا.',
        'زيادة الوعي بالعلامة التجارية: تصاميمنا تساعد في تعزيز هوية العلامات التجارية وجذب العملاء الجدد.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a2f52]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-right order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFB366] mb-6">
                خدمات شركة البريق
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-4">
                نقدم مجموعة متكاملة من خدمات التصميم الجرافيكي التي تهدف إلى تعزيز هوية علامتك التجارية وإبرازها في السوق.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                نسعى دائمًا لتقديم تصاميم مبتكرة وعالية الجودة تلبي تطلعات عملائنا وتعكس رؤية علاماتهم التجارية.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                سواء كنت تبحث عن تصميم شعار فريد، هوية بصرية شاملة، أو تصميمات مبتكرة لمواقع الويب ووسائل التواصل الاجتماعي.
              </p>
              <p className="text-lg text-white leading-relaxed font-semibold">
                نحن هنا لنساعدك في تحقيق أهدافك وتطلعاتك بأسلوب إبداعي وأنيق.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop" 
                alt="خدمات شركة البريق" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-6 bg-[#1e3a61]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              اختر الخدمة التي تناسبك
            </h2>
            <p className="text-xl text-[#FFB366]">
              نوفر العديد من خدمات التصميم الأبداعية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="bg-[#1a2f52] border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-right">
                  <h3 className="text-2xl font-bold text-[#FFB366] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-base leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link to="/portfolio">
                    <Button className="bg-[#2E5AAC] hover:bg-[#1e3a61] text-white w-full rounded-lg flex items-center justify-center gap-2">
                      شاهد الاعمال
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 px-6 bg-[#1a2f52]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFB366] mb-4">
              استكشف أحدث مشاريعنا
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => {
              // Find matching project with slug from shared data
              const projectWithSlug = projectsData.find(p => p.id === project.id);
              const slug = projectWithSlug ? projectWithSlug.slug : null;
              
              const cardContent = (
                <Card 
                  className="bg-[#2E5AAC] border-0 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-right">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {project.description}
                    </p>
                  </div>
                </Card>
              );
              
              return slug ? (
                <Link to={`/portfolio/${slug}`} key={project.id}>
                  {cardContent}
                </Link>
              ) : (
                <div key={project.id}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-[#1e3a61]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              شهادات من عملائنا
            </h2>
            <p className="text-xl text-[#FFB366]">
              اكتشف ما يقوله عملاؤنا عن تجربتهم مع شركة البريق
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card 
                key={testimonial.id} 
                className="bg-[#1a2f52] border-0 p-8 text-right hover:shadow-xl transition-all duration-300"
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

      {/* Innovation Section */}
      <section className="py-20 px-6 bg-[#1a2f52]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFB366] mb-4">
              أفكار أبداعية
            </h2>
            <p className="text-xl text-gray-200">
              نهج معياري لبناء الثقة في العمل
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                alt="أفكار أبداعية" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="text-right space-y-8">
              {innovationPoints.map((point, index) => (
                <div key={index} className="bg-[#2E5AAC] p-6 rounded-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-white flex-1">
                      {point.title}
                    </h3>
                    <span className="text-4xl font-bold text-[#FFB366]">
                      {point.number}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {point.points.map((item, idx) => (
                      <li key={idx} className="text-gray-200 text-base leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#FFB366] to-[#FFA04D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ابدأ مشروعك معنا اليوم
          </h2>
          <p className="text-2xl text-white mb-8">
            دع شركة البريق تساعدك في تحويل أفكارك إلى واقع مبهر
          </p>
          <Link to="/contact">
            <Button className="bg-[#2E5AAC] hover:bg-[#1e3a61] text-white px-12 py-6 text-xl rounded-full">
              تواصل معنا الآن
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AlbareqServices;
