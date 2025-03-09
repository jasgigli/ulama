import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { NewsArticle } from "../../lib/types";

const LatestNewsSection: React.FC = () => {
  // Sample news data – replace with your API/CMS data.
  const news: NewsArticle[] = [
    {
      slug: "sheikh-naqeebullah-mosque-issue",
      title: "شیخ نقیب اللہ مسجد کے مسائل اور حل",
      content:
        "مجلس اتحاد العلماء نے مسجد کے چیلنجز اور ممکنہ حل پر تفصیلی گفتگو کی ہے۔ اس میں جامع تجزیہ اور پیشہ ورانہ نقطہ نظر شامل ہے۔",
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
        "درس قرآن کے نئے سلسلے کا آغاز معیاری دینی تعلیم کے فروغ کا ذریعہ ہے۔ اس سلسلے میں جدید طریقے اور روایتی اصولوں کا امتزاج دکھایا گیا ہے۔",
      date: "2024-08-15",
    },
    {
      slug: "eid-ul-adha-celebrations",
      title: "عید الاضحی کی تقریبات",
      content:
        "عید الاضحی کی تقریبات میں سماجی اور مذہبی اقدار کو اجاگر کیا گیا۔ اس موقع پر خصوصی تقریبات اور سماجی پروگرامز کا انعقاد کیا گیا۔",
      date: "2024-07-10",
    },
  ];

  const sortedNews = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Section className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12"
        style={{ color: "var(--accent-color)" }}
      >
        تازہ ترین خبریں
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedNews.map((article, idx) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.3 }}
            className="transform hover:scale-105 transition-transform"
          >
            <Card className="rounded-2xl overflow-hidden shadow-xl">
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  {article.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <FaRegCalendarAlt className="mr-2" />
                  <span>{format(new Date(article.date), "PPP")}</span>
                </div>
                <p className="text-gray-700 flex-grow mb-4">
                  {article.content.length > 120
                    ? `${article.content.substring(0, 120)}...`
                    : article.content}
                </p>
                <div className="text-right">
                  <Link
                    href={`/news/${article.slug}`}
                    className="flex items-center text-[var(--accent-color)] hover:text-[var(--accent-hover)] font-medium"
                  >
                    مزید پڑھیں <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default LatestNewsSection;
