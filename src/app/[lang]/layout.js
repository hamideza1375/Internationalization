import "./globals.css";
import LanguageSwitcher from "@/src/components/LanguageSwitcher";

export const metadata = {
  title: "Quiz App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params }) {
  const { lang } = await params;

  return (
    <html lang={lang} dir={lang.startsWith("fa") ? "rtl" : "ltr"}>
      <body>
        <header>
          <LanguageSwitcher />
        </header>
        {children}
      </body>
    </html>
  );
}