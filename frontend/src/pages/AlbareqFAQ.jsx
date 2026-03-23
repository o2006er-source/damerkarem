import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const AlbareqFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [questionForm, setQuestionForm] = useState({ name: '', email: '', question: '' });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('سؤال جديد:', questionForm);
    // Here you would send the question to the backend
    alert('شكراً لك! سنرد على سؤالك قريباً.');
    setQuestionForm({ name: '', email: '', question: '' });
  };

  const faqs = [
    {
      question: 'ما الخدمات التي تقدمونها في وكالتكم؟',
      answer: 'نقدم مجموعة متكاملة من خدمات التصميم تشمل تصميم الشعارات، تطوير الهويات البصرية، تصميم منشورات السوشيال ميديا، تصاميم الطباعة، بالإضافة إلى تصميم مواقع الويب والمتاجر الإلكترونية بجودة عالية.'
    },
    {
      question: 'كيف يمكنني طلب خدمة تصميم شعار أو هوية بصرية؟',
      answer: 'يمكنك التواصل معنا عبر صفحة "اتصل بنا" على موقعنا الإلكتروني، أو إرسال استفسارك عبر البريد الإلكتروني أو الاتصال الهاتفي، وسنقوم بتوجيهك خلال خطوات طلب الخدمة وتفاصيلها.'
    },
    {
      question: 'ما هو متوسط المدة الزمنية لتنفيذ مشروع تصميم شعار أو هوية بصرية؟',
      answer: 'تختلف المدة حسب متطلبات المشروع، لكنها تتراوح عادة بين أسبوع إلى أسبوعين لضمان تحقيق أعلى جودة وإبداع في التصميم.'
    },
    {
      question: 'هل تقدمون خدمات تصميم مخصصة تلائم احتياجات شركتي؟',
      answer: 'نعم، نقدم حلول تصميم مخصصة تتناسب مع طبيعة عملك وهويتك التجارية لضمان تحقيق نتائج تتماشى مع رؤيتك وتوقعاتك.'
    },
    {
      question: 'هل تقدمون خدمات تصميم متاجر إلكترونية متكاملة؟',
      answer: 'بالتأكيد، نحن نقدم خدمات تصميم وتطوير المتاجر الإلكترونية مع التركيز على تجربة المستخدم، بما في ذلك التنظيم والتصميم الاحترافي ودعم تكامل أدوات الدفع والشحن.'
    },
    {
      question: 'هل تتيحون خدمات الدعم الفني بعد الانتهاء من تصميم الموقع أو المتجر الإلكتروني؟',
      answer: 'نعم، نحن نقدم خدمات الدعم الفني لضمان سير عمل الموقع أو المتجر بشكل سلس ولحل أي مشكلات تقنية قد تواجهها لمدة محددة بعد التسليم.'
    },
    {
      question: 'هل يمكنني مراجعة التصميمات قبل اعتمادها بشكل نهائي؟',
      answer: 'بالطبع، نقدم لك نماذج أولية للتصميمات لنتأكد من أنها تتناسب مع رؤيتك وأهدافك. بإمكانك طلب التعديلات اللازمة قبل اعتماد التصميم النهائي.'
    },
    {
      question: 'كيف تحددون تكلفة المشروع؟',
      answer: 'يتم تحديد تكلفة المشروع بناءً على متطلبات العميل وتعقيد العمل المطلوب. نقدم تسعيرًا مخصصًا يناسب مختلف الاحتياجات والميزانيات.'
    },
    {
      question: 'هل تعملون مع عملاء دوليين؟',
      answer: 'نعم، نحن نرحب بالعمل مع عملاء من جميع أنحاء العالم ونقدم خدماتنا باللغتين العربية والإنجليزية لضمان تواصل سلس وفعّال.'
    },
    {
      question: 'ما هي طرق الدفع المتاحة لديكم؟',
      answer: 'نقبل عدة طرق للدفع مثل التحويل البنكي والدفع عبر الإنترنت لضمان راحة عملائنا.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a2f52]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFB366] mb-6">
            الاسئلة والاجوبة الاكثر شيوعاً
          </h1>
          <p className="text-xl text-white leading-relaxed mb-4">
            نحن ندرك أن عملاءنا الحاليين والمحتملين قد يكون لديهم أسئلة حول خدماتنا وكيفية عملنا.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            لذلك، قمنا بتجميع قائمة بأكثر الأسئلة الشائعة التي نتلقاها من عملائنا لمساعدتكم في فهم أفضل لخدماتنا وكيفية الاستفادة منها.
          </p>
          <p className="text-lg text-[#FFB366] font-semibold">
            اذا كان لديك أي سؤال إضافي لم يتم تغطيته هنا، لا تتردد في التواصل معنا
          </p>
          <p className="text-base text-gray-300 mt-2">
            يسعدنا الاستماع إليك ومساعدتك في تحويل رؤيتك إلى واقع مبدع
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 px-6 bg-[#1e3a61]">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="bg-[#1a2f52] border-0 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-right flex items-start justify-between gap-4 hover:bg-[#2d4268] transition-colors"
                >
                  <h3 className="text-xl font-bold text-white flex-1">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 text-[#FFB366]">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-200 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ask Question Form Section */}
      <section className="py-20 px-6 bg-[#1a2f52]">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-[#2E5AAC] border-0 p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-[#FFB366] rounded-full p-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                هل لديك سؤال آخر؟
              </h2>
              <p className="text-gray-200 text-lg">
                اطرح سؤالك وسنرد عليك في أقرب وقت ممكن
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white text-lg font-semibold mb-2 text-right">
                  الاسم
                </label>
                <Input
                  type="text"
                  placeholder="أدخل اسمك"
                  value={questionForm.name}
                  onChange={(e) => setQuestionForm({ ...questionForm, name: e.target.value })}
                  className="bg-[#1a2f52] border-[#2d4268] text-white placeholder:text-gray-400 focus:border-[#FFB366] text-right"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-lg font-semibold mb-2 text-right">
                  البريد الإلكتروني
                </label>
                <Input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  value={questionForm.email}
                  onChange={(e) => setQuestionForm({ ...questionForm, email: e.target.value })}
                  className="bg-[#1a2f52] border-[#2d4268] text-white placeholder:text-gray-400 focus:border-[#FFB366] text-right"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-lg font-semibold mb-2 text-right">
                  سؤالك
                </label>
                <Textarea
                  placeholder="اكتب سؤالك هنا..."
                  value={questionForm.question}
                  onChange={(e) => setQuestionForm({ ...questionForm, question: e.target.value })}
                  className="bg-[#1a2f52] border-[#2d4268] text-white placeholder:text-gray-400 focus:border-[#FFB366] text-right min-h-32"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#FFB366] hover:bg-[#FFA04D] text-white py-6 text-lg rounded-full"
              >
                إرسال السؤال
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#FFB366] to-[#FFA04D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            جاهز للبدء معنا؟
          </h2>
          <p className="text-2xl text-white mb-8">
            تواصل معنا الآن وحول أفكارك إلى واقع إبداعي
          </p>
          <a href="/contact">
            <Button className="bg-[#2E5AAC] hover:bg-[#1e3a61] text-white px-12 py-6 text-xl rounded-full">
              تواصل معنا
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AlbareqFAQ;
