import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Send } from 'lucide-react';
import { companyInfo } from '../data/albareq-mock';

const AlbareqContact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    designType: '',
    projectDetails: '',
    budget: '',
    contactMethod: ''
  });

  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    try {
      // استخدام Formspree لإرسال النموذج
      // استبدل 'YOUR_FORMSPREE_ID' بمعرفك من formspree.io
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // إعادة تعيين النموذج بعد 3 ثوانٍ
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            companyName: '',
            designType: '',
            projectDetails: '',
            budget: '',
            contactMethod: ''
          });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('خطأ في إرسال النموذج:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const designTypes = [
    'تصميم شعار وهوية بصرية',
    'تصميم منشورات سوشيال ميديا',
    'تصميم مطبوعات (بروشورات، فلايرات، كروت أعمال)',
    'تصميم موقع إلكتروني أو متجر إلكتروني',
    'تصميم إعلان رقمي أو حملة تسويقية',
    'خدمة أخرى'
  ];

  const budgetRanges = [
    '100 - 300$',
    '300 - 500$',
    '500 - 700$',
    '700 - 1000$',
    'أكثر من 1000$'
  ];

  const contactMethods = [
    'مكالمة هاتفية',
    'واتساب',
    'بريد إلكتروني'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com', color: 'hover:text-[#1877F2]' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: 'hover:text-[#E4405F]' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-[#1DA1F2]' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:text-[#0A66C2]' }
  ];

  return (
    <div className="min-h-screen bg-[#1a2f52]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-[#2E5AAC] to-[#1a2f52]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFB366] mb-6">
            هل لديك فكرة لمشروع تصميمي؟
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8">
            تواصل معنا الآن وسنساعدك في تحقيقه
          </p>
          <a 
            href={`https://wa.me/${companyInfo.whatsapp.replace(/\s/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-12 py-6 text-xl rounded-full flex items-center gap-3 mx-auto">
              <Send className="w-6 h-6" />
              تواصل عبر واتساب
            </Button>
          </a>
          <p className="text-gray-200 text-lg mt-6">
            يمكنك أيضًا بدء مشروعك مباشرة من خلال تعبئة النموذج التالي
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-[#2E5AAC] border-0 p-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-right">
                  ابدأ مشروعك الآن
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-white text-lg font-semibold mb-2 text-right">
                      الاسم الكامل *
                    </label>
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="أدخل اسمك الكامل"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="bg-[#1a2f52] border-[#2d4268] text-white placeholder:text-gray-400 focus:border-[#FFB366] text-right"
                      required
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-lg font-semibold mb-2 text-right">
                        البريد الإلكتروني *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-[#1a2f52] border-[#2d4268] text-white placeholder:text-gray-400 focus:border-[#FFB366] text-right"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white text-lg font-semibold mb-2 text-right">
                        رقم الهاتف *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="07XXXXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-[#1a2f52] border-[#2d4268] text-white placeholder:text-gray-400 focus:border-[#FFB366] text-right"
                        required
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-white text-lg font-semibold mb-2 text-right">
                      اسم الشركة أو النشاط التجاري
                    </label>
                    <Input
                      type="text"
                      name="companyName"
                      placeholder="اسم شركتك"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="bg-[#1a2f52] border-[#2d4268] text-white placeholder:text-gray-400 focus:border-[#FFB366] text-right"
                    />
                  </div>

                  {/* Design Type */}
                  <div>
                    <label className="block text-white text-lg font-semibold mb-2 text-right">
                      نوع التصميم المطلوب *
                    </label>
                    <select
                      name="designType"
                      value={formData.designType}
                      onChange={handleChange}
                      className="w-full bg-[#1a2f52] border border-[#2d4268] text-white rounded-md px-4 py-2 focus:border-[#FFB366] focus:outline-none text-right"
                      required
                    >
                      <option value="">اختر نوع التصميم</option>
                      {designTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-white text-lg font-semibold mb-2 text-right">
                      تفاصيل مشروعك *
                    </label>
                    <Textarea
                      name="projectDetails"
                      placeholder="اكتب وصفاً تفصيلياً لمشروعك..."
                      value={formData.projectDetails}
                      onChange={handleChange}
                      className="bg-[#1a2f52] border-[#2d4268] text-white placeholder:text-gray-400 focus:border-[#FFB366] text-right min-h-32"
                      required
                    />
                  </div>

                  {/* Budget & Contact Method */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-lg font-semibold mb-2 text-right">
                        الميزانية المتوقعة
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-[#1a2f52] border border-[#2d4268] text-white rounded-md px-4 py-2 focus:border-[#FFB366] focus:outline-none text-right"
                      >
                        <option value="">اختر نطاق الميزانية</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white text-lg font-semibold mb-2 text-right">
                        طريقة التواصل المفضلة *
                      </label>
                      <select
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        className="w-full bg-[#1a2f52] border border-[#2d4268] text-white rounded-md px-4 py-2 focus:border-[#FFB366] focus:outline-none text-right"
                        required
                      >
                        <option value="">اختر طريقة التواصل</option>
                        {contactMethods.map((method, index) => (
                          <option key={index} value={method}>{method}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    className="w-full bg-[#FFB366] hover:bg-[#FFA04D] text-white py-6 text-xl rounded-full flex items-center justify-center gap-2"
                    disabled={submitStatus === 'loading'}
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        <span>أرسل طلبك الآن</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  {/* رسائل الحالة */}
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-500 text-white rounded-lg text-center">
                      ✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-500 text-white rounded-lg text-center">
                      ❌ حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.
                    </div>
                  )}
                </form>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Email Card */}
              <Card className="bg-[#2E5AAC] border-0 p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#FFB366] rounded-full p-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">راسلنا على</h3>
                <a href={`mailto:${companyInfo.email}`} className="text-gray-200 hover:text-[#FFB366] transition-colors block mb-2">
                  {companyInfo.email}
                </a>
              </Card>

              {/* Phone Card */}
              <Card className="bg-[#2E5AAC] border-0 p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#FFB366] rounded-full p-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">اتصل بنا</h3>
                <a href={`tel:${companyInfo.phone}`} className="text-gray-200 hover:text-[#FFB366] transition-colors block mb-2 text-lg">
                  {companyInfo.phone}
                </a>
                <a href={`https://wa.me/${companyInfo.whatsapp.replace(/\s/g, '')}`} className="text-gray-200 hover:text-[#FFB366] transition-colors block text-sm" target="_blank" rel="noopener noreferrer">
                  واتساب: {companyInfo.whatsapp}
                </a>
              </Card>

              {/* Address Card */}
              <Card className="bg-[#2E5AAC] border-0 p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#FFB366] rounded-full p-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">قم بزيارتنا</h3>
                <p className="text-gray-200 leading-relaxed">
                  {companyInfo.address}
                </p>
              </Card>

              {/* Social Media Card */}
              <Card className="bg-[#2E5AAC] border-0 p-6 text-center hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">ابقَ على تواصل</h3>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-[#1a2f52] p-3 rounded-full text-white transition-all duration-300 ${social.color} hover:scale-110`}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - can be added later with Google Maps API) */}
      <section className="py-16 px-6 bg-[#1e3a61]">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-[#2E5AAC] border-0 p-4 overflow-hidden">
            <div className="w-full h-96 bg-[#1a2f52] rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-lg">خريطة الموقع (يمكن إضافة Google Maps هنا)</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AlbareqContact;
