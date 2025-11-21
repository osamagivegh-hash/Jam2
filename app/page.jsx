import { ArrowRight, Droplet, HeartHandshake, Sparkles, BookOpenCheck, ShieldCheck, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const stats = [
  { label: "مستفيد مباشر", value: "120,000+", description: "وصلتهم الخدمات الصحية والتعليمية" },
  { label: "بئر مكتمل", value: "430", description: "تم حفرها وتشغيلها في مناطق عطشى" },
  { label: "يتيم مكفول", value: "2,700", description: "يتلقون رعاية شاملة ومستدامة" },
  { label: "حلقات تحفيظ", value: "180", description: "تخرّج منها حفظة للقرآن" },
];

const pillars = [
  {
    title: "آبار الحياة",
    description: "من الدراسات الفنية وحتى حفل التدشين، نوفّر مياه نقية تعيد الحياة للقرى البعيدة.",
    icon: Droplet,
    color: "from-sky-100 via-sky-50 to-white",
  },
  {
    title: "كفالة اليتيم",
    description: "برامج رعاية متكاملة تشمل التعليم، الصحة، والدعم النفسي لضمان مستقبل أفضل.",
    icon: HeartHandshake,
    color: "from-indigo-100 via-indigo-50 to-white",
  },
  {
    title: "تحفيظ القرآن",
    description: "نرعى حلقات تحفيظ عصرية مجهّزة بالمعلمين والمصاحف والمقار الآمنة.",
    icon: BookOpenCheck,
    color: "from-blue-100 via-blue-50 to-white",
  },
];

const highlights = [
  "حَوْكمة مالية بشفافية وتقارير دورية للمانحين.",
  "شراكات معتمدة مع جهات دولية ومحلية.",
  "مسارات تبرع سريعة وآمنة عبر قنوات متعددة.",
  "فرق ميدانية مدربة تعمل وفق معايير السلامة والجودة.",
];

const initiatives = [
  {
    title: "مضخة الأمل",
    desc: "حفر بئر سطحي مع خزان ومضخة كهربائية لتأمين المياه لـ 250 مستفيد يوميًا.",
    badge: "المياه",
    amount: "5,500 ر.س",
  },
  {
    title: "كفالة يتيم لعام",
    desc: "تغطية مصروفات التعليم والرعاية الصحية والبرامج الوجدانية ليتم واحد لمدة 12 شهرًا.",
    badge: "رعاية",
    amount: "2,400 ر.س",
  },
  {
    title: "حِلْقة نور",
    desc: "تجهيز حلقة تحفيظ كاملة بالمصاحف، الوسائل التقنية، وحوافز التميز لمدة فصل دراسي.",
    badge: "القرآن",
    amount: "3,200 ر.س",
  },
];

export default function Home(){
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brandBlue via-blue-700 to-slate-900 text-white py-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#60a5fa,_transparent_45%),_radial-gradient(circle_at_bottom,_#c7d2fe,_transparent_40%)]" />
        <div
          className="pointer-events-none absolute inset-5 rounded-[32px] border border-slate-400/35 shadow-[0_0_0_1px_rgba(148,163,184,0.2)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-12 right-12 h-14 w-14 rounded-full border border-slate-400/40 shadow-[0_15px_40px_rgba(15,23,42,0.25)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-10 left-12 h-16 w-16 rounded-3xl border border-slate-400/45 rotate-6"
          aria-hidden
        />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur border border-white/20">
                <Sparkles className="h-4 w-4 text-brandLight" />
                <span>مبادرات إنسانية بمعايير عالمية</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                نصنع أثرًا إنسانيًا مستدامًا <span className="text-brandLight">يرتقي بالحياة</span>
              </h1>
              <p className="text-lg text-slate-100 leading-relaxed max-w-xl">
                نعزز قيم العطاء عبر مشاريع مياه، كفالة الأيتام، وحلقات تحفيظ تواكب احتياجات المجتمعات الأشد حاجة.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-brandBlue px-6 py-3 font-semibold shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5">
                  تبرع الآن <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#pillars" className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 font-semibold transition hover:bg-white/10">
                  استكشف البرامج
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-100/90">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-brandLight" />
                  <span>معايير حوكمة وشفافية</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5 text-brandLight" />
                  <span>أثر فوري وقابل للقياس</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur shadow-2xl shadow-blue-900/40">
              <h3 className="text-2xl font-semibold mb-4">رحلة العطاء بخطوات سهلة</h3>
              <div className="space-y-4">
                {["اختر المجال الذي يلهمك", "حدد مبلغ التبرع المناسب", "تابع الأثر عبر تقارير شفافة"].map((step, index) => (
                  <div key={step} className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brandLight/20 text-white font-bold border border-white/20">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{step}</p>
                      <p className="text-sm text-slate-100/80">نضمن لك تجربة رقمية موثوقة ودعمًا مباشرًا من فريقنا.</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-100/90">
                <div className="rounded-2xl bg-white/10 p-3 border border-white/10">طرق دفع متعددة</div>
                <div className="rounded-2xl bg-white/10 p-3 border border-white/10">متابعة لحظية للمشاريع</div>
                <div className="rounded-2xl bg-white/10 p-3 border border-white/10">شراكات معتمدة</div>
                <div className="rounded-2xl bg-white/10 p-3 border border-white/10">تقارير موثقة بالصور</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-white py-12 shadow-inner overflow-hidden">
        <div
          className="pointer-events-none absolute inset-3 rounded-[28px] border border-slate-400/40 shadow-[0_0_0_1px_rgba(148,163,184,0.18)]"
          aria-hidden
        />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-brandGray p-6 text-center border border-slate-200">
                <p className="text-3xl font-extrabold text-brandBlue">{stat.value}</p>
                <p className="text-sm font-semibold text-slate-700 mt-2">{stat.label}</p>
                <p className="text-xs text-slate-500 mt-1">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section bg-gradient-to-b from-brandGray to-white relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-4 -top-6 h-24 rounded-full border border-slate-400/30 blur-3xl"
          aria-hidden
        />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center relative">
          <div className="space-y-6">
            <h2 className="section-title">من نحن</h2>
            <p className="section-sub text-left lg:text-right leading-relaxed">
              نحن جمعية إنماء الخيرية، نؤمن بأن لكل إنسان الحق في الماء والتعليم والكرامة. فريقنا يعمل بمعايير دولية معتمدة، ويعتمد على الابتكار في تصميم البرامج التي تصل بأمان وفاعلية إلى المستفيدين.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-brandLight/40 text-brandBlue font-bold">✓</span>
                  <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brandLight to-brandGray rounded-3xl blur-3xl opacity-60" />
            <div className="relative rounded-3xl bg-white p-8 shadow-xl border border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">أحدث تقرير أثر</p>
                  <p className="text-xl font-bold text-brandBlue">ربع سنوي - 2024</p>
                </div>
                <ShieldCheck className="h-10 w-10 text-brandBlue" />
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-brandGray p-3">
                  <p className="text-slate-500">مياه نقية</p>
                  <p className="text-lg font-semibold text-brandBlue">+3.1M لتر</p>
                </div>
                <div className="rounded-2xl bg-brandGray p-3">
                  <p className="text-slate-500">جلسات تعليمية</p>
                  <p className="text-lg font-semibold text-brandBlue">8,500</p>
                </div>
                <div className="rounded-2xl bg-brandGray p-3">
                  <p className="text-slate-500">وجبات تغذية</p>
                  <p className="text-lg font-semibold text-brandBlue">42,000</p>
                </div>
                <div className="rounded-2xl bg-brandGray p-3">
                  <p className="text-slate-500">حالات طوارئ</p>
                  <p className="text-lg font-semibold text-brandBlue">96%</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-sm text-brandBlue font-semibold">
                <span>اطلع على تفاصيل أكثر</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="pillars" className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">برامجنا الرئيسية</h2>
            <p className="section-sub">
              نصمم برامج متكاملة تستجيب للاحتياج الفعلي للمجتمع، مع متابعة دقيقة لمؤشرات الأداء والأثر.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className={`rounded-3xl bg-gradient-to-br ${pillar.color} p-6 border border-slate-100 shadow-md hover:shadow-xl transition` }>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-white text-brandBlue flex items-center justify-center shadow">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brandBlue">{pillar.title}</h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">{pillar.description}</p>
                <div className="flex items-center gap-2 text-brandBlue font-semibold">
                  استكشف التفاصيل <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section id="initiatives" className="section bg-gradient-to-br from-brandGray via-white to-brandGray">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="section-title">مبادرات جاهزة للتبرع</h2>
              <p className="section-sub text-left lg:text-right">
                اختر المبادرة التي تلامس قلبك وساهم في تغيير حياة المستفيدين اليوم.
              </p>
            </div>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-brandBlue text-white px-5 py-3 font-semibold shadow hover:-translate-y-0.5 transition">
              اطلب استشارة <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {initiatives.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-6 shadow-lg border border-slate-100 hover:shadow-2xl transition">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold bg-brandLight/70 text-brandBlue px-3 py-1 rounded-full border border-brandLight">{item.badge}</span>
                  <span className="text-sm text-slate-500">موثقة</span>
                </div>
                <h3 className="text-xl font-bold text-brandBlue mb-2">{item.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="flex items-center justify-between mt-6">
                  <p className="text-lg font-extrabold text-brandBlue">{item.amount}</p>
                  <a href="#contact" className="text-sm font-semibold text-brandBlue inline-flex items-center gap-1">تبرع الآن <ArrowRight className="h-3 w-3" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="section bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="section-title">الأثر الميداني</h2>
            <p className="section-sub text-left lg:text-right">
              نعمل بشراكات محلية موثوقة ونستخدم أنظمة مراقبة رقمية للتأكد من وصول المساعدات للجهات المستهدفة في الوقت المناسب.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["تقييم احتياج ميداني موثق", "توريد وتجهيز وفق المعايير", "متابعة تشغيل وصيانة مستمرة", "تقارير صور وفيديو للأثر"].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 p-4 bg-brandGray text-slate-800 font-semibold shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <div className="inline-flex items-center gap-3 rounded-full bg-brandBlue text-white px-5 py-3 font-semibold shadow">
              نعدك بتجربة عطاء شفافة وآمنة
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-tr from-brandLight to-blue-100 rounded-3xl blur-2xl opacity-70" />
            <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">آخر تحديث</p>
                  <p className="text-lg font-bold text-brandBlue">المحطة الميدانية - شرق إفريقيا</p>
                </div>
                <Sparkles className="h-6 w-6 text-brandBlue" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-brandGray p-4">
                  <p className="text-slate-500">مسارات المياه</p>
                  <p className="text-xl font-bold text-brandBlue">32 مشروعًا</p>
                </div>
                <div className="rounded-2xl bg-brandGray p-4">
                  <p className="text-slate-500">حالات طارئة</p>
                  <p className="text-xl font-bold text-brandBlue">12 تدخلًا</p>
                </div>
                <div className="rounded-2xl bg-brandGray p-4">
                  <p className="text-slate-500">برامج تعليمية</p>
                  <p className="text-xl font-bold text-brandBlue">18 فصلًا</p>
                </div>
                <div className="rounded-2xl bg-brandGray p-4">
                  <p className="text-slate-500">متطوعون</p>
                  <p className="text-xl font-bold text-brandBlue">+540</p>
                </div>
              </div>
              <div className="rounded-2xl bg-brandBlue text-white p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">وقت استجابة البلاغات</p>
                  <p className="text-2xl font-extrabold"><span className="text-brandLight">48</span> ساعة فقط</p>
                </div>
                <ArrowUpRight className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section bg-gradient-to-br from-brandBlue via-blue-800 to-slate-900 text-white relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-4 rounded-[34px] border border-slate-400/35 shadow-[0_0_0_1px_rgba(148,163,184,0.2)]"
          aria-hidden
        />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center relative">
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold">تواصل معنا</h2>
            <p className="text-slate-100/90 leading-relaxed">
              فريقنا جاهز للإجابة عن أسئلتك وتقديم الاستشارة حول أفضل مسارات العطاء.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-brandLight" /><span>+966 555 123 456</span></div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-brandLight" /><span>support@enmaa.org</span></div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-brandLight" /><span>الرياض - المملكة العربية السعودية</span></div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+966555123456" className="inline-flex items-center gap-2 rounded-full bg-white text-brandBlue px-5 py-3 font-semibold shadow-lg">
                اتصال مباشر
              </a>
              <a href="mailto:support@enmaa.org" className="inline-flex items-center gap-2 rounded-full border border-white/70 px-5 py-3 font-semibold text-white hover:bg-white/10">
                أرسل بريدًا
              </a>
            </div>
          </div>
          <div className="bg-white/8 border border-slate-300/40 rounded-3xl p-8 shadow-2xl shadow-slate-900/30 backdrop-blur space-y-5">
            <h3 className="text-xl font-bold">مستعد للعطاء؟</h3>
            <p className="text-slate-100/90 text-sm leading-relaxed">
              شارك بياناتك وسيتم التواصل معك خلال 24 ساعة لتحديد أفضل فرصة تبرع تناسب أهدافك.
            </p>
            <form className="space-y-4">
              <input type="text" placeholder="الاسم الكامل" className="w-full rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-slate-200" />
              <input type="email" placeholder="البريد الإلكتروني" className="w-full rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-slate-200" />
              <textarea placeholder="كيف يمكننا مساعدتك؟" rows="3" className="w-full rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-slate-200" />
              <button type="button" className="w-full rounded-2xl bg-brandLight text-brandBlue font-bold py-3 shadow-lg hover:-translate-y-0.5 transition">
                أرسل الطلب الآن
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
