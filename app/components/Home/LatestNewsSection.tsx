import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { format } from "date-fns";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { NewsArticle } from "../../lib/types";

const LatestNewsSection: React.FC = () => {
  // Sample data – replace with your API/CMS data.
  const news: NewsArticle[] = [
    {
      slug: "sheikh-naqeebullah-mosque-issue",
      title: "شیخ نقیب اللہ مسجد کے مسائل اور حل",
      content:
        "مجلس اتحاد العلماء نے مسجد کے چیلنجز اور ممکنہ حل پر تفصیلی گفتگو کی ہے۔",
      date: "2024-08-08",
    },
    {
      slug: "important-meeting",
      title: "اہم اجلاس: شرعی مسائل پر تبصرہ",
      content: "آج کے اجلاس میں شرعی مسائل اور ان کے حل پر جامع تبصرہ کیا گیا۔",
      date: "2024-08-08",
    },
    {
      slug: "new-dars-e-quran-series",
      title: "درس قرآن کا نیا سلسلہ",
      content:
        "درس قرآن کے نئے سلسلے کا آغاز معیاری دینی تعلیم کے فروغ کا ذریعہ ہے۔",
      date: "2024-08-15",
    },
    {
      slug: "eid-ul-adha-celebrations",
      title: "عید الاضحی کی تقریبات",
      content:
        "عید الاضحی کی تقریبات میں سماجی اور مذہبی اقدار کو اجاگر کیا گیا۔",
      date: "2024-07-10",
    },
  ];

  const sortedNews = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Section className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-10"
        style={{ color: "var(--accent-color)" }}
      >
        تازہ ترین خبریں
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedNews.map((article, idx) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <Card>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  <Link
                    href={`/news/${article.slug}`}
                    className="hover:text-[var(--accent-hover)] transition"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {format(new Date(article.date), "PPP")}
                </p>
                <p className="text-gray-700 text-justify mb-4">
                  {article.content.length > 120
                    ? `${article.content.substring(0, 120)}...`
                    : article.content}
                </p>
                <Link
                  href={`/news/${article.slug}`}
                  className="text-[var(--accent-color)] hover:underline font-medium"
                >
                  مزید پڑھیں
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default LatestNewsSection;
