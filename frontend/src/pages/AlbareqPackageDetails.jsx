import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Check, X } from 'lucide-react';
import { getPackageBySlug } from '../data/packages-data';

const AlbareqPackageDetails = () => {
  const { slug } = useParams();
  const packageData = getPackageBySlug(slug);

  if (!packageData) {
    return (
      <div className="min-h-screen bg-[#1a2f52] pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#2E5AAC] border-0 p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">تفاصيل الباقة قريباً</h2>
            <p className="text-xl text-gray-200 mb-8">
              نعمل حالياً على إضافة تفاصيل كاملة لهذه الباقة. يمكنك العودة قريباً أو تصفح باقاتنا الأخرى.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/packages">
                <Button className="bg-[#FFB366] hover:bg-[#FFA04D] text-white px-8 py-4">
                  <ArrowRight className="w-5 h-5 ml-2" />
                  العودة إلى الباقات
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-white hover:bg-gray-100 text-[#2E5AAC] px-8 py-4">
                  تواصل معنا
                </Button>
              </Link>
            </div>
          </Card>
        </div>
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
            <Link to="/packages" className="hover:text-[#FFB366] transition-colors">الباقات</Link>
            <span>/</span>
            <span className="text-[#FFB366]">{packageData.title}</span>
          </div>
        </div>
      </section>

      {/* Package Header */}
      <section className="py-12 px-6 bg-[#1e3a61]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">{packageData.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              {packageData.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto text-center leading-relaxed">
              {packageData.subtitle}
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packageData.packages.map((pkg) => (
              <Card 
                key={pkg.id}
                className={`border-0 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-[#FFB366] to-[#FFA04D] relative' 
                    : 'bg-[#2E5AAC]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#2E5AAC] text-white text-center py-2 text-sm font-bold">
                    الأكثر طلباً ⭐
                  </div>
                )}
                
                <div className={`p-8 text-right ${pkg.popular ? 'pt-16' : ''}`}>
                  {/* Package Name & Subtitle */}
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-[#FFB366]'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-sm ${pkg.popular ? 'text-white/90' : 'text-gray-200'}`}>
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/20">
                    <div className="flex items-baseline justify-end gap-2">
                      <span className={`text-sm ${pkg.popular ? 'text-white/90' : 'text-gray-200'}`}>ريال</span>
                      <span className={`text-5xl font-bold ${pkg.popular ? 'text-white' : 'text-[#FFB366]'}`}>
                        {pkg.price}
                      </span>
                    </div>
                    <p className={`text-sm mt-2 ${pkg.popular ? 'text-white/80' : 'text-gray-300'}`}>
                      مدة التنفيذ: {pkg.duration}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-right">
                        {feature.included ? (
                          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-white' : 'text-[#FFB366]'}`} />
                        ) : (
                          <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400" />
                        )}
                        <span className={`flex-1 text-sm ${
                          feature.included 
                            ? (pkg.popular ? 'text-white' : 'text-white')
                            : 'text-gray-400 line-through'
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link to="/contact">
                    <Button 
                      className={`w-full py-6 text-lg rounded-lg transition-all ${
                        pkg.popular 
                          ? 'bg-[#2E5AAC] hover:bg-[#1e3a61] text-white' 
                          : 'bg-[#FFB366] hover:bg-[#FFA04D] text-white'
                      }`}
                    >
                      اطلب الآن
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* FAQs Section */}
          {packageData.faqs && packageData.faqs.length > 0 && (
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  الأسئلة الشائعة
                </h2>
                <p className="text-xl text-[#FFB366]">
                  إجابات على أكثر الأسئلة شيوعاً حول {packageData.title}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
                {packageData.faqs.map((faq, index) => (
                  <Card key={index} className="bg-[#2E5AAC] border-0 p-6 text-right hover:shadow-xl transition-all duration-300">
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
          )}

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="bg-gradient-to-r from-[#FFB366] to-[#FFA04D] border-0 p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                جاهز لبدء مشروعك؟
              </h2>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                تواصل معنا الآن واختر الباقة المناسبة لاحتياجاتك، وسيقوم فريقنا بالرد عليك في أقرب وقت
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/contact">
                  <Button className="bg-[#2E5AAC] hover:bg-[#1e3a61] text-white px-12 py-6 text-lg rounded-full">
                    تواصل معنا الآن
                  </Button>
                </Link>
                <Link to="/packages">
                  <Button className="bg-white hover:bg-gray-100 text-[#2E5AAC] px-12 py-6 text-lg rounded-full flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    <span>عرض جميع الباقات</span>
                  </Button>
                </Link>
              </div>
            </Card>
          </div>

          {/* Back to Packages */}
          <div className="mt-12 text-center">
            <Link to="/packages">
              <Button className="bg-[#2E5AAC] hover:bg-[#3d6fc4] text-white px-8 py-4 rounded-full flex items-center gap-2 mx-auto">
                <ArrowRight className="w-5 h-5" />
                <span>العودة إلى الباقات</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlbareqPackageDetails;
