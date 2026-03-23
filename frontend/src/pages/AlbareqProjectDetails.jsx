import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Calendar, MapPin, User } from 'lucide-react';
import { projectsData } from '../data/projects-data';

const AlbareqProjectDetails = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#1a2f52] pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#2E5AAC] border-0 p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">تفاصيل المشروع قريباً</h2>
            <p className="text-xl text-gray-200 mb-8">
              نعمل حالياً على إضافة تفاصيل كاملة لهذا المشروع. يمكنك العودة قريباً أو تصفح مشاريعنا الأخرى.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/portfolio">
                <Button className="bg-[#FFB366] hover:bg-[#FFA04D] text-white px-8 py-4">
                  <ArrowRight className="w-5 h-5 ml-2" />
                  العودة إلى الأعمال
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
