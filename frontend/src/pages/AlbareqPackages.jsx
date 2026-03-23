import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Check, ArrowLeft } from 'lucide-react';

const AlbareqPackages = () => {
  const [activeTab, setActiveTab] = useState('packages');

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
      category: 'الأسئلة العامة عن جميع الباقات',
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
        },
        {
          q: 'كيف أبدأ بطلب التصميم؟',
          a: 'يمكنك اختيار الخطة المناسبة والتواصل معنا عبر الموقع أو البريد الإلكتروني، وسيتم توجيهك خطوة بخطوة لاختيار الخطة المناسبة لمتطلباتك.'
        }
      ]
    },
    {
      category: 'الأسئلة الشائعة عن باقات السوشيال ميديا',
      questions: [
        {
          q: 'ما الفرق بين الخطة الأساسية والمتوسطة والمتقدمة؟',
          a: 'الخطة الأساسية تناسب المشاريع الصغيرة وتوفر عددًا محدودًا من المنشورات (5 منشورات شهريًا). الخطة المتوسطة تقدم عددًا أكبر من المنشورات (15 منشورًا شهريًا) مع تعديلات إضافية. الخطة المتقدمة تناسب الشركات الكبيرة التي تحتاج إلى محتوى يومي تقريبًا (30 منشورًا شهريًا) مع تعديلات غير محدودة.'
        },
        {
          q: 'ما نوع المنشورات التي تشملها الخطط؟',
          a: 'تصميم المنشورات يشمل الإعلانات، العروض الترويجية، المعلوماتية، ومحتوى العلامة التجارية، ويتم تصميمها حسب هوية شركتك.'
        },
        {
          q: 'كم مدة التنفيذ لكل منشور؟',
          a: 'يتم تسليم المنشورات خلال 2-3 أيام عمل من طلب التصميم.'
        },
        {
          q: 'هل يمكنني مراجعة التصميمات قبل اعتمادها بشكل نهائي؟',
          a: 'بالطبع، نقدم لك نماذج أولية للتصميمات لنتأكد من أنها تتناسب مع رؤيتك وأهدافك. بإمكانك طلب التعديلات اللازمة قبل اعتماد التصميم النهائي.'
        },
        {
          q: 'هل تقومون بنشر التصاميم على جميع المنصات؟',
          a: 'بالطبع، تتضمن خططنا نشر التصاميم على المنصات المدرجة في الخطة المختارة.'
        }
      ]
    },
    {
      category: 'الأسئلة الشائعة عن باقات الشعارات',
      questions: [
        {
          q: 'ماهو الفرق بين الشعار والهوية؟',
          a: 'الشعار هو رمز أو تصميم يمثل العلامة التجارية ويعبر عنها بشكل مختصر ومميز أما الهوية البصرية فهي مجموعة العناصر المرئية التي تشمل الألوان والخطوط والأنماط والصور المستخدمة لتقديم صورة متسقة وشاملة عن العلامة التجارية حيث يكون الشعار جزءًا من الهوية وليس الهوية بأكملها.'
        },
        {
          q: 'هل يتم تقديم أكثر من نموذج للشعار في الخطط؟',
          a: 'نعم، نقدم 2-3 نماذج للشعار للاختيار من بينها حسب الخطة المختارة.'
        },
        {
          q: 'ما الذي تتضمنه الهوية البصرية الكاملة؟',
          a: 'الهوية البصرية تشمل الشعار، بطاقات العمل، الأوراق الرسمية، الأغلفة، والخطوط والألوان الرسمية.'
        },
        {
          q: 'هل أستطيع تعديل الشعار بعد التسليم؟',
          a: 'نعم، نوفر عددًا معينًا من التعديلات حسب الخطة، ويمكن طلب تعديلات إضافية مقابل تكلفة إضافية.'
        },
        {
          q: 'هل يمكنني طلب الشعار بصيغة معينة؟',
          a: 'بالطبع، نقدم الشعار بجميع الصيغ المطلوبة مثل PNG، JPG، وملفات المصدر مثل AI أو PSD.'
        }
      ]
    },
    {
      category: 'الأسئلة الشائعة عن باقات المواقع والمتاجر',
      questions: [
        {
          q: 'هل تتضمن الخطط استضافة الموقع؟',
          a: 'نعم تشمل الخطط الاستضافة في السيرفر الخاص بنا ذو السرعة العالية، لضمان تشغيل الموقع بأداء عالي ويمكن تجديد الاشتراك في السيرفر بعد سنة من الانطلاق.'
        },
        {
          q: 'هل يمكنني تحديث الموقع بنفسي بعد الانتهاء؟',
          a: 'نعم، يتم تصميم المواقع بواجهة سهلة الاستخدام بحيث يمكنك إدارتها بنفسك. نوفر تدريبًا مبدئيًا إذا لزم الأمر.'
        },
        {
          q: 'ما الفرق بين موقع شخصي وموقع شركة؟',
          a: 'الموقع الشخصي عادة يتكون من عدد صفحات قليلة تعرض المعلومات الشخصية أو الأعمال، بينما موقع الشركة يحتوي على عدة صفحات تشمل الخدمات، المشاريع، والمدونة.'
        },
        {
          q: 'هل يتم تصميم الموقع ليكون متجاوبًا مع الهواتف؟',
          a: 'نعم، جميع المواقع التي نصممها متوافقة مع الأجهزة المختلفة مثل الهواتف المحمولة والأجهزة اللوحية والشاشات الكبيرة.'
        },
        {
          q: 'هل تشمل خطط المتاجر الإلكترونية بوابات الدفع؟',
          a: 'نعم، يتم تضمين إعداد بوابات الدفع الرئيسية مثل PayPal أو بطاقات الائتمان في خطط المتاجر الإلكترونية.'
        }
      ]
    },
    {
      category: 'الأسئلة الشائعة عن باقات التسويق والادارة',
      questions: [
        {
          q: 'هل توفرون إدارة الإعلانات الممولة ضمن الخطط؟',
          a: 'نعم، يتم تضمين إدارة الإعلانات الممولة في الخطتين المتوسطة والمتقدمة، مع تحديد الميزانية المناسبة بالتنسيق مع العميل.'
        },
        {
          q: 'هل أحتاج إلى محتوى خاص بي أم يتم إنشاؤه من قبلكم؟',
          a: 'جميع الخطط تتضمن إنشاء محتوى حصري يتماشى مع هوية علامتك التجارية، أو يمكننا العمل على تحسين محتوى موجود مسبقًا.'
        },
        {
          q: 'ما المنصات التي يتم إدارة الحملات عليها؟',
          a: 'تشمل إدارة الحملات منصات رئيسية مثل فيسبوك، إنستغرام، تويتر، لينكد إن، وتيك توك، حسب الخطة المختارة.'
        },
        {
          q: 'ما نوع التقارير التي توفرها الخطط؟',
          a: 'توفر الخطط تقارير شهرية تشمل عدد المشاهدات، معدل التفاعل، وأداء الحملات الإعلانية، مع توصيات للتحسين.'
        },
        {
          q: 'هل أحتاج إلى خطة تسويق متقدمة إذا كنت أبدأ مشروعًا صغيرًا؟',
          a: 'إذا كنت تبدأ مشروعًا صغيرًا، ننصح بالخطة الأساسية لتجربة الخدمات والتأكد من تحقيق نتائج أولية قبل الترقية.'
        }
      ]
    },
    {
      category: 'الأسئلة الشائعة عن باقات المطبوعات',
      questions: [
        {
          q: 'ما أنواع المطبوعات التي تقدمونها؟',
          a: 'نقدم تصاميم الكتيبات، البروشورات، بطاقات العمل، البوسترات، التغليف، والأوراق الرسمية.'
        },
        {
          q: 'هل تشمل الخدمة الطباعة أيضًا؟',
          a: 'نوفر التصاميم جاهزة للطباعة بجودة عالية، ويمكننا التنسيق مع مطابع موثوقة إذا رغبت بذلك.'
        },
        {
          q: 'كم يستغرق تصميم المطبوعات؟',
          a: 'يعتمد ذلك على نوع وحجم المشروع، لكن عادة ما يستغرق من 3-5 أيام عمل.'
        },
        {
          q: 'هل يمكنني الحصول على ملفات المصدر؟',
          a: 'نعم، نوفر ملفات المصدر (AI، PSD) ضمن بعض الخطط أو مقابل رسوم إضافية.'
        }
      ]
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
      text: 'نود أن نعبر عن امتناننا الكبير لشركة البريق على تصميمها المميز لقائمة الطعام الخاصة بمطعمنا. لقد أبدعوا في تقديم تصميم احترافي يعكس هوية مطعمنا بطريقة مبتكرة وجذابة. التعامل معهم كان سلسًا واحترافيًا، والنتيجة فاقت توقعاتنا.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'علي النجار',
      position: 'مدير تسويق في سبارز',
      text: 'تعاملنا مع شركة البريق لتنفيذ تصاميم لحساباتنا على مواقع التواصل الاجتماعي، وكانت التجربة ممتازة بكل المقاييس. التصاميم المقدمة مبتكرة وجذابة وتعبر بوضوح عن هوية شركتنا، مما ساعد في تحسين تفاعل جمهورنا وزيادة عدد المتابعين بشكل كبير.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'ليلى الحسن',
      position: 'مدير علاقات في الابتسامة البيضاء',
      text: 'شركة البريق تمكنت من تحويل أفكارنا إلى تصاميم فريدة وجذابة. كانوا محترفين في كل مرحلة من مراحل العمل، مما جعل التعاون معهم تجربة ممتعة ومثمرة. نوصي بشدة بخدماتهم.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'خالد النهام',
      position: 'مؤسس شركة زالزال',
      text: 'شركة البريق قدمت لنا موقعًا إلكترونيًا متكاملًا يعكس هوية علامتنا التجارية بشكل مذهل. الفريق كان متعاونًا ومحترفًا في كل خطوة، من التصميم إلى التنفيذ. نحن راضون جدًا بالنتائج ونوصي بشدة بخدماتهم.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'د. روعه الشمري',
      position: 'مؤسس مركز روعة للدراسات',
      text: 'لقد عملنا مع شركة البريق على تطوير شعار وهوية بصرية جديدة لمركزنا، وكانت النتائج مذهلة. الفريق كان محترفًا للغاية واستطاعوا فهم رؤيتنا بسرعة وتحويلها إلى تصميمات تعكس جوهر علامتنا التجارية بدقة. نوصي بشدة بخدماتهم لكل من يبحث عن الإبداع والجودة العالية في التصميم.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    },
    {
      id: 7,
      name: 'د. ايمن الحداد',
      position: 'مؤسس شركة دار الخزف البابلي',
      text: 'عملنا مع شركة البريق على تطوير تصميمات تغليف لمنتجاتنا المطبوعة، وكانت التجربة استثنائية. الفريق كان مبدعًا ودقيقًا في تنفيذ الرؤية التي تصورناها. تصميمات التغليف التي قاموا بإنشائها كانت جذابة وتلبي تمامًا متطلباتنا التجارية. نشكر شركة البريق على احترافيتهم وجودة عملهم.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop'
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

      {/* Tabs Navigation */}
      <section className="py-8 px-6 bg-[#1e3a61] sticky top-0 z-40">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center gap-8">
            <button
              onClick={() => setActiveTab('packages')}
              className={`text-2xl font-bold pb-4 border-b-4 transition-all duration-300 ${
                activeTab === 'packages'
                  ? 'text-[#FFB366] border-[#FFB366]'
                  : 'text-gray-300 border-transparent hover:text-white'
              }`}
            >
              الباقات
            </button>
            <Link
              to="/blog"
              className="text-2xl font-bold pb-4 border-b-4 border-transparent text-gray-300 hover:text-white transition-all duration-300"
            >
              المقالات
            </Link>
            <Link
              to="/faq"
              className="text-2xl font-bold pb-4 border-b-4 border-transparent text-gray-300 hover:text-white transition-all duration-300"
            >
              الأسئلة الشائعة
            </Link>
          </div>
        </div>
      </section>

      {/* Package Categories with Menu */}
      <section className="py-16 px-6 bg-[#1a2f52]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Menu */}
            <div className="lg:col-span-1">
              <Card className="bg-[#2E5AAC] border-0 p-6 sticky top-32">
                <h3 className="text-2xl font-bold text-white mb-6 text-right">اختر الباقة المناسبة لمشروعك</h3>
                <div className="space-y-2">
                  {packageCategories.map((category) => (
                    <a
                      key={category.id}
                      href={category.link}
                      className="block p-4 bg-[#1a2f52] hover:bg-[#1e3a61] rounded-lg transition-all duration-300 text-right group"
                    >
                      <div className="flex items-center gap-3 justify-end">
                        <span className="text-white font-semibold group-hover:text-[#FFB366] transition-colors">
                          {category.title}
                        </span>
                        <span className="text-2xl">{category.icon}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* Package Categories Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {packageCategories.map((pkg) => (
                  <Card 
                    key={pkg.id} 
                    id={pkg.link.replace('#', '')}
                    className="bg-[#2E5AAC] border-0 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer scroll-mt-32"
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
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {pkg.title}
                      </h3>
                      <p className="text-gray-200 text-base leading-relaxed mb-4">
                        {pkg.description}
                      </p>
                      <Button className="bg-[#FFB366] hover:bg-[#FFA04D] text-white w-full rounded-lg flex items-center justify-center gap-2">
                        استكشف الباقات
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Categories Grid */}
      <section className="py-16 px-6 bg-[#1e3a61] hidden">
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
            <div key={catIndex} className="mb-12">
              <h3 className="text-3xl font-bold text-[#FFB366] mb-8 text-center">
                {faqCategory.category}
              </h3>
              <div className="space-y-6">
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
