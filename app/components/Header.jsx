import { HeartHandshake, Menu } from "lucide-react";

const navItems = [
  { href: "#about", label: "من نحن" },
  { href: "#pillars", label: "برامجنا" },
  { href: "#initiatives", label: "مبادرات" },
  { href: "#impact", label: "الأثر" },
  { href: "#contact", label: "تواصل" },
];

export default function Header(){
  return (
    <header className="relative bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-slate-200/70 shadow-sm">
      <div className="absolute inset-x-6 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-slate-400/60 to-transparent pointer-events-none" aria-hidden />
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brandBlue to-blue-600 text-white flex items-center justify-center shadow-lg border border-slate-400/60">
            <HeartHandshake className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-slate-600 font-semibold">جمعية إنماء</p>
            <p className="font-bold text-brandBlue">العطاء المستدام</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-semibold text-slate-700">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-brandBlue transition">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm font-semibold text-brandBlue">تسجيل الدخول</a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brandBlue text-white px-5 py-2 text-sm font-semibold shadow-lg hover:-translate-y-0.5 transition"
          >
            تبرع الآن
          </a>
        </div>
        <button className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
