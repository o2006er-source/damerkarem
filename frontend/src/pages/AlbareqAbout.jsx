import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const AlbareqAbout = () => {
  const skills = [
    { name: 'تصميم الشعارات', value: 90 },
    { name: 'الهويات البصرية', value: 85 },
    { name: 'المطبوعات والتغليف', value: 80 },
    { name: 'تحسين محركات البحث', value: 85 },
    { name: 'التصوير', value: 88 },
    { name: 'تصاميم السوشيال ميديا', value: 90 },
    { name: 'المواقع والمتاجر الالكترونية', value: 75 },
    { name: 'التسويق الالكتروني', value: 88 },
    { name: 'الاعلانات الممولة', value: 75 }
  ];

  const whyUs = [
    'فريق متخصص: نخبة من المصممين المبدعين يعملون بشغف واحترافية.',
    'خبرة واسعة: مشاريع ناجحة مع شركات محلية وعالمية.',
    'تصاميم مخصصة: نركز على فهم احتياجات العملاء وتقديم حلول تتناسب مع أهدافهم.',
    'التزام بالمواعيد: نحرص على التسليم في الوقت المحدد دون المساومة على الجودة.',
    'تقنيات متطورة: نستخدم أحدث الأدوات والبرمجيات في عالم التصميم لضمان تقديم أعمال إبداعية بجودة عالية.',
    'دعم مستمر: نؤمن بأهمية التواصل الدائم مع عملائنا لضمان تحقيق رؤيتهم وتحويل أفكارهم إلى واقع ملموس.'
  ];

  const teamMembers = [
    { name: 'علي أحمد', position: 'المدير الإبداعي', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
    { name: 'سارة محمد', position: 'مصممة جرافيك', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
    { name: 'محمد حسن', position: 'مصمم جرافيك', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
    { name: 'ليلى عبدالله', position: 'مسؤولة المشاريع', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' },
    { name: 'أحمد خالد', position: 'موشن جرافيك', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop' },
    { name: 'فاطمة علي', position: 'مصممة UX/UI', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop' },
    { name: 'عمر يوسف', position: 'مطور ويب', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
    { name: 'نور الدين', position: 'مدير التسويق الرقمي', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop' },
    { name: 'رنا محمود', position: 'أخصائية إعلانات ممولة', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
    { name: 'خالد سعيد', position: 'متخصص SEO', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop' },
    { name: 'مريم أحمد', position: 'كاتبة محتوى', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop' },
    { name: 'حسين علي', position: 'فوتوغرافي/فيديوغرافي', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-[#1a2f52]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#FFB366] mb-6">
            حول شركة البريق
          </h1>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 px-6 bg-[#1e3a61]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/team-work.png" 
                alt="فريق شركة البريق" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                من نحن
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                نحن شركة البريق للتصميم والدعاية والإعلان، تأسست في عام 2022 ومقرها في العراق، نطمح إلى تقديم خدمات متكاملة في مجال التصميم بجودة عالية ومعايير عالمية تميز عملائنا.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                نتخصص في تصميم الشعارات والهويات البصرية لتعزيز وضوح الشركات في سوقها التنافسي.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                نقدم تصميمات مواقع الويب والمتاجر الإلكترونية الحديثة وسهلة الاستخدام مع التركيز على تجربة المستخدم وتوافقها مع جميع الأجهزة.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                نوفر أيضًا خدمات تصميم المطبوعات والتغليف لتعكس هوية العلامة التجارية، بالإضافة إلى تصميم منشورات مواقع التواصل الاجتماعي لجذب التفاعل وزيادة الوعي بالعلامة التجارية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 px-6 bg-[#1a2f52]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFB366] mb-6">
                أهداف شركتنا
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                نهدف في شركة البريق إلى تحقيق التميز من خلال تقديم حلول تصميم مبتكرة تساعد عملائنا على بناء هويات بصرية قوية ومؤثرة. نلتزم بتقديم أعلى معايير الجودة والابتكار لضمان رضا العملاء وتلبية توقعاتهم.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                نركز على تطوير تصاميم حديثة وجذابة سواء في مواقع الويب أو المتاجر الإلكترونية لضمان تجربة مستخدم سلسة ومميزة.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                كما نعمل على تصميم منشورات وسائل التواصل الاجتماعي التي ترفع من التفاعل وتزيد من الوعي بالعلامة التجارية.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                هدفنا الأساسي هو دعم عملائنا في تحقيق النجاح والتميز من خلال تصاميم مبدعة وفعالة تعزز من نموهم واستدامتهم في السوق.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                alt="أهداف الشركة" 
                className="w-full rounded-2xl shadow-2xl"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-[#FFB366] border-0 overflow-hidden text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-[#2E5AAC]">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-200">{member.position}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-6 bg-[#1a2f52]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
                alt="لماذا نحن" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFB366] mb-8">
                لماذا نحن؟
              </h2>
              <div className="space-y-4">
                {whyUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#FFB366] flex-shrink-0 mt-1" />
                    <p className="text-gray-200 text-lg leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-[#FFB366] hover:bg-[#FFA04D] text-white px-8 py-4 text-lg rounded-full">
                    تواصل معنا اليوم
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Tools Section */}
      <section className="py-20 px-6 bg-[#1a2f52]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFB366] mb-6">
              البرامج التي نستخدمها
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto">
              نحن نستخدم أحدث برامج التصميم والبرمجة والتسويق الإلكتروني لضمان حصولك على أفضل النتائج
            </p>
          </div>
          
          {/* Animated Software Icons Carousel */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {/* First Set */}
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/120px-Adobe_Photoshop_CC_icon.svg.png" alt="Photoshop" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/120px-Adobe_Illustrator_CC_icon.svg.png" alt="Illustrator" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/120px-Adobe_InDesign_CC_icon.svg.png" alt="InDesign" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/120px-Adobe_After_Effects_CC_icon.svg.png" alt="After Effects" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/120px-Adobe_Premiere_Pro_CC_icon.svg.png" alt="Premiere Pro" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/WordPress_logo.svg/120px-WordPress_logo.svg.png" alt="WordPress" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png" alt="React" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/120px-Node.js_logo.svg.png" alt="Node.js" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Google_Ads_logo.svg/120px-Google_Ads_logo.svg.png" alt="Google Ads" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/120px-Canva_icon_2021.svg.png" alt="Canva" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Notion_app_logo.png/120px-Notion_app_logo.png" alt="Notion" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/120px-Visual_Studio_Code_1.35_icon.svg.png" alt="VS Code" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Duplicate Set for Seamless Loop */}
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/120px-Adobe_Photoshop_CC_icon.svg.png" alt="Photoshop" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/120px-Adobe_Illustrator_CC_icon.svg.png" alt="Illustrator" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/120px-Adobe_InDesign_CC_icon.svg.png" alt="InDesign" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/120px-Adobe_After_Effects_CC_icon.svg.png" alt="After Effects" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/120px-Adobe_Premiere_Pro_CC_icon.svg.png" alt="Premiere Pro" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/WordPress_logo.svg/120px-WordPress_logo.svg.png" alt="WordPress" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png" alt="React" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/120px-Node.js_logo.svg.png" alt="Node.js" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Google_Ads_logo.svg/120px-Google_Ads_logo.svg.png" alt="Google Ads" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/120px-Canva_icon_2021.svg.png" alt="Canva" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Notion_app_logo.png/120px-Notion_app_logo.png" alt="Notion" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-shrink-0 mx-4">
                <div className="w-32 h-32 bg-[#2E5AAC] rounded-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/120px-Visual_Studio_Code_1.35_icon.svg.png" alt="VS Code" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-[#1e3a61]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              نحن محترفون في عملنا
            </h2>
            <h3 className="text-2xl text-[#FFB366]">
              أكتشف مهاراتنا
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-[#2E5AAC] p-6 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white text-lg font-semibold">{skill.name}</span>
                  <span className="text-[#FFB366] text-2xl font-bold">{skill.value}</span>
                </div>
                <div className="w-full bg-[#1a2f52] rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-[#FFB366] h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#FFB366] to-[#FFA04D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            وفِّر المال، واحصل على الأفضل الآن
          </h2>
          <p className="text-2xl text-white mb-8">
            فكِّر في عملك أو علامتك التجارية وحاول تجسيدها، ونحن هنا لمساعدتك في تحقيق أي أفكار
          </p>
          <Link to="/services">
            <Button className="bg-[#2E5AAC] hover:bg-[#1e3a61] text-white px-12 py-6 text-xl rounded-full">
              تحقق من خدماتنا
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AlbareqAbout;
