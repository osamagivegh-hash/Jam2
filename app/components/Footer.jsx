import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer(){
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
        <div className="space-y-3">
          <h3 className="text-lg font-bold">جمعية إنماء الخيرية</h3>
          <p className="text-sm text-slate-200 leading-relaxed">
            نعمل لنشر الأمل عبر برامج مستدامة في المياه والتعليم والرعاية المجتمعية، مع التزام كامل بالشفافية والحوكمة.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">روابط سريعة</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-200">
            <a href="#about" className="hover:text-brandLight">من نحن</a>
            <a href="#pillars" className="hover:text-brandLight">برامجنا</a>
            <a href="#initiatives" className="hover:text-brandLight">مبادرات</a>
            <a href="#impact" className="hover:text-brandLight">الأثر</a>
            <a href="#contact" className="hover:text-brandLight">تواصل</a>
            <a href="#contact" className="hover:text-brandLight">سياسة الخصوصية</a>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold">تواصل اجتماعي</h4>
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Instagram].map((Icon) => (
              <a
                key={Icon.displayName}
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
