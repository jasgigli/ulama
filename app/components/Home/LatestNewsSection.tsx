// app/Home/LatestNewsSection.tsx
import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import Section from "../ui/Section";
import Card from "../ui/Section";
import { NewsArticle } from "../../lib/types"; // Import the type

const LatestNewsSection: React.FC = () => {
  // Sample news data (replace with data from your API or CMS)
  const news: NewsArticle[] = [
    {
      slug: "sheikh-naqeebullah-mosque-issue",
      title: "شیخ نقیب اللہ مسجد کا مسئلہ",
      content: "یہاں خبر کی تفصیل ہوگی۔",
      date: "2024-08-08",
    },
    {
      slug: "important-meeting",
      title: "اہم اجلاس",
      content:
        "تمام علماء کرام سے درخواست ہے کہ آج کے اجلاس میں اپنی شرکت کو یقینی بنائیں۔",
      date: "2024-08-08",
    },
    {
      slug: "new-dars-e-quran-series",
      title: "درس قرآن کا نیا سلسلہ",
      content:
        "مجلس اتحاد العلماء کی جانب سے درس قرآن کا ایک نیا سلسلہ شروع کیا جا رہا ہے۔",
      date: "2024-08-15",
    },
    {
      slug: "eid-ul-adha-celebrations",
      title: "عید الاضحی کی تقریبات",
      content:
        "مجلس اتحاد العلماء کے زیر اہتمام عید الاضحی کی پروقار تقریبات کا انعقاد کیا گیا۔",
      date: "2024-07-10",
    },
  ];

  // Sort news by date (most recent first)
  const sortedNews = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Section>
      <h2 className="text-3xl font-bold text-center mb-6 text-teal-700">
        تازہ ترین خبریں
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedNews.map((article) => (
          <Card key={article.slug}>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                <Link
                  href={`/news/${article.slug}`}
                  className="hover:text-teal-600"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                {format(new Date(article.date), "PPP", {
                  // locale: require("date-fns/locale/ur"),
                })}
              </p>
              <p className="text-gray-700 text-justify">
                {/* Display a short excerpt */}
                {article.content.length > 100
                  ? `${article.content.substring(0, 100)}...`
                  : article.content}
              </p>
              <Link
                href={`/news/${article.slug}`}
                className="text-teal-600 hover:underline block mt-2"
              >
                مزید پڑھیں
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default LatestNewsSection;
