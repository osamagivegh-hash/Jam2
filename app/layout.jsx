import './globals.css';

export const metadata = {
  title: "جمعية إنماء | العطاء المستدام",
  description: "جمعية إنماء الخيرية - برامج تنموية ومستدامة في المياه والتعليم والرعاية المجتمعية.",
};

export default function RootLayout({children}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-brandGray">{children}</body>
    </html>
  );
}
