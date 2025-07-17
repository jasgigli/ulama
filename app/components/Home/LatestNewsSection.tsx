"use client";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaEye, FaRegCalendarAlt, FaShare } from "react-icons/fa";
import Button from "../ui/Button";

interface NewsArticle {
  slug: string;
  title: string;
  content: string;
  date: string;
  image?: string;
  category?: string;
}

const LatestNewsSection: React.FC = () => {
  // Sample news data – replace with your API/CMS data.
  const news: NewsArticle[] = [
    {
      slug: "sheikh-naqeebullah-mosque-issue",
      title: "شیخ نقیب اللہ مسجد کے مسائل اور حل",
      content:
        "مجلس اتحاد العلماء نے مسجد کے چیلنجز اور ممکنہ حل پر تفصیلی گفتگو کی ہے۔ اس میں جامع تجزیہ اور پیشہ ورانہ نقطہ نظر شامل ہے۔",
      date: "2024-08-08",
      image: "/majlis.png",
      category: "مساجد",
    },
    {
      slug: "important-meeting",
      title: "اہم اجلاس: شرعی مسائل پر تبصرہ",
      content: "آج کے اجلاس میں شرعی مسائل اور ان کے حل پر جامع تبصرہ کیا گیا۔",
      date: "2024-08-08",
      image: "/majlis.png",
      category: "اجلاس",
    },
    {
      slug: "new-dars-e-quran-series",
      title: "درس قرآن کا نیا سلسلہ",
      content:
        "درس قرآن کے نئے سلسلے کا آغاز معیاری دینی تعلیم کے فروغ کا ذریعہ ہے۔ اس سلسلے میں جدید طریقے اور روایتی اصولوں کا امتزاج دکھایا گیا ہے۔",
      date: "2024-08-15",
      image: "/majlis.png",
      category: "تعلیم",
    },
    {
      slug: "eid-ul-adha-celebrations",
      title: "عید الاضحی کی تقریبات",
      content:
        "عید الاضحی کی تقریبات میں سماجی اور مذہبی اقدار کو اجاگر کیا گیا۔ اس موقع پر خصوصی تقریبات اور سماجی پروگرامز کا انعقاد کیا گیا۔",
      date: "2024-07-10",
      image: "/majlis.png",
      category: "تقریبات",
    },
  ];

  const sortedNews = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Featured article (latest)
  const featuredArticle = sortedNews[0];
  // Rest of the articles
  const otherArticles = sortedNews.slice(1);

  return (
    <div>
      {/* Featured News Article */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src={featuredArticle.image || "/majlis.png"}
                alt={featuredArticle.title}
                fill
                className="object-cover"
              />
              {featuredArticle.category && (
                <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {featuredArticle.category}
                </span>
              )}
            </div>
            <div className="p-8">
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <FaRegCalendarAlt className="ml-2" />
                <span>{format(new Date(featuredArticle.date), "PPP")}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                {featuredArticle.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredArticle.content}
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href={`/news/${featuredArticle.slug}`}
                  className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  مزید پڑھیں <FaArrowLeft className="mr-2" />
                </Link>
                <div className="flex items-center gap-4">
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <FaEye />
                  </button>
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <FaShare />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherArticles.map((article, idx) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image
                src={article.image || "/majlis.png"}
                alt={article.title}
                fill
                className="object-cover"
              />
              {article.category && (
                <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {article.category}
                </span>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <FaRegCalendarAlt className="ml-2" />
                <span>{format(new Date(article.date), "PPP")}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.content}
              </p>
              <Link
                href={`/news/${article.slug}`}
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                مزید پڑھیں <FaArrowLeft className="mr-2" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All News Button */}
      <div className="mt-12 text-center">
        <Button href="/news" variant="outline">
          تمام خبریں دیکھیں
        </Button>
      </div>
    </div>
  );
};

export default LatestNewsSection;
