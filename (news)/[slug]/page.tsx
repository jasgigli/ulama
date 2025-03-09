// app/(news)/[slug]/page.tsx
import React from "react";
import { format } from "date-fns";
import Section from "../../components/ui/Section";
import { notFound } from "next/navigation";
import { NewsArticle } from "../../lib/types"; // Import type

interface NewsArticlePageProps {
  params: { slug: string };
}
const NewsArticlePage: React.FC<NewsArticlePageProps> = ({ params }) => {
  // Sample news data (replace with data fetching from your API or CMS)
  const news: NewsArticle[] = [
    {
      slug: "sheikh-naqeebullah-mosque-issue",
      title: "شیخ نقیب اللہ مسجد کا مسئلہ",
      content: "یہاں خبر کی تفصیل ہوگی۔ یہاں مزید تفصیلات شامل کی جا سکتی ہیں۔",
      date: "2024-08-08",
    },
    {
      slug: "important-meeting",
      title: "اہم اجلاس",
      content:
        "تمام علماء کرام سے درخواست ہے کہ آج کے اجلاس میں اپنی شرکت کو یقینی بنائیں۔ اجلاس میں اہم امور پر تبادلہ خیال کیا جائے گا۔",
      date: "2024-08-08",
    },
    {
      slug: "new-dars-e-quran-series",
      title: "درس قرآن کا نیا سلسلہ",
      content:
        "مجلس اتحاد العلماء کی جانب سے درس قرآن کا ایک نیا سلسلہ شروع کیا جا رہا ہے۔  اس سلسلے میں مشہور عالم دین مولانا [عالم کا نام] ہر ہفتے درس دیں گے۔ درس قرآن میں شرکت عام ہے اور تمام اہل علاقہ کو شرکت کی دعوت دی جاتی ہے۔",
      date: "2024-08-15",
    },
    {
      slug: "eid-ul-adha-celebrations",
      title: "عید الاضحی کی تقریبات",
      content:
        "مجلس اتحاد العلماء کے زیر اہتمام عید الاضحی کی پروقار تقریبات کا انعقاد کیا گیا۔  نماز عید کے بعد علماء کرام نے عید الاضحی کی اہمیت اور قربانی کے فلسفے پر روشنی ڈالی۔  اس موقع پر اجتماعی قربانی کا بھی اہتمام کیا گیا اور گوشت غرباء و مساکین میں تقسیم کیا گیا۔",
      date: "2024-07-10",
    },
  ];

  const article = news.find((a) => a.slug === params.slug);

  if (!article) {
    notFound(); // Use Next.js's notFound function
  }

  return (
    <div className="container mx-auto py-8">
      <Section>
        <h1 className="text-3xl font-bold mb-4 text-teal-700">
          {article.title}
        </h1>
        <p className="text-gray-600 text-sm mb-4">
          {format(new Date(article.date), "PPP", {
            locale: require("date-fns/locale/ur"),
          })}
        </p>
        <p className="text-lg leading-relaxed text-justify">
          {article.content}
        </p>
      </Section>
    </div>
  );
};

export default NewsArticlePage;
