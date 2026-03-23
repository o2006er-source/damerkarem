// Package details data
export const packagesDetailsData = [
  {
    id: 1,
    slug: 'logo-packages',
    title: 'باقات تصميم الشعارات والهويات البصرية',
    subtitle: 'صمّم هوية متكاملة تعكس قيم علامتك وتبني حضورًا قويًا في أذهان عملائك، بدءًا من الشعار وحتى دليل الاستخدام',
    icon: '🎨',
    packages: [
      {
        id: 1,
        name: 'شعار فقط',
        subtitle: 'للافراد او المنتج',
        price: '199',
        duration: '5 أيام عمل',
        popular: true,
        features: [
          { text: 'تصميم 2 نموذج شعار', included: true },
          { text: '2 تعديل مجاني', included: true },
          { text: 'تسليم الملفات (AI – PNG – PDF)', included: true },
          { text: 'ملف الخطوط والألوان', included: false },
          { text: 'شعار متحرك', included: false },
          { text: 'بطاقة عمل', included: false },
          { text: 'مطبوعات أو مواد تسويقية', included: false },
          { text: 'دليل استخدام الهوية', included: false }
        ]
      },
      {
        id: 2,
        name: 'شعار وهوية بسيطة',
        subtitle: 'للشركات المتوسطة',
        price: '299',
        duration: '10 أيام عمل',
        popular: false,
        features: [
          { text: 'تصميم 3 نماذج شعار', included: true },
          { text: '3 تعديلات مجانية', included: true },
          { text: 'تسليم الملفات (AI – PNG – PDF)', included: true },
          { text: 'ملف الخطوط والألوان', included: true },
          { text: 'شعار متحرك', included: true },
          { text: 'تصميم بطاقة عمل', included: true },
          { text: 'مطبوعات أو مواد تسويقية', included: false },
          { text: 'دليل استخدام الهوية', included: false }
        ]
      },
      {
        id: 3,
        name: 'هوية بصرية كاملة',
        subtitle: 'للشركات الكبيرة',
        price: '499',
        duration: '15 يوم عمل',
        popular: false,
        features: [
          { text: 'تصميم 3 نماذج شعار', included: true },
          { text: '4 تعديلات مجانية', included: true },
          { text: 'تسليم الملفات (AI – PNG – PDF)', included: true },
          { text: 'ملف الخطوط والألوان', included: true },
          { text: 'شعار متحرك', included: true },
          { text: 'تصميم المطبوعات', included: true },
          { text: 'مواد تسويقية كاملة', included: true },
          { text: 'دليل استخدام الهوية', included: true }
        ]
      }
    ],
    faqs: [
      {
        q: 'ماهو الفرق بين الشعار والهوية؟',
        a: 'الشعار هو رمز أو تصميم يمثل العلامة التجارية ويعبر عنها بشكل مختصر ومميز أما الهوية البصرية فهي مجموعة العناصر المرئية التي تشمل الألوان والخطوط والأنماط والصور المستخدمة لتقديم صورة متسقة وشاملة عن العلامة التجارية حيث يكون الشعار جزءًا من الهوية وليس الهوية بأكملها'
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
  }
];

export const getPackageBySlug = (slug) => {
  return packagesDetailsData.find(pkg => pkg.slug === slug);
};
