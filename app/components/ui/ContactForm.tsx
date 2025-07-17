"use client";
import React, { useState } from "";
import { motion } from "framer-motion";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import Button from "./Button";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setSubmitStatus({
        success: true,
        message:
          "آپ کا پیغام کامیابی سے بھیج دیا گیا ہے۔ ہم جلد ہی آپ سے رابطہ کریں گے۔",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "پیغام بھیجنے میں مسئلہ پیش آیا۔ براہ کرم دوبارہ کوشش کریں۔",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-900">
        ہم سے رابطہ کریں
      </h3>

      {submitStatus.message && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitStatus.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              نام
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="اپنا نام درج کریں"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              ای میل
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="اپنا ای میل درج کریں"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-gray-700 mb-2">
            موضوع
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">موضوع منتخب کریں</option>
            <option value="general">عام استفسار</option>
            <option value="services">خدمات کے بارے میں</option>
            <option value="donation">عطیات</option>
            <option value="volunteer">رضاکارانہ خدمات</option>
            <option value="other">دیگر</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">
            پیغام
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="اپنا پیغام یہاں لکھیں"
          ></textarea>
        </div>

        <div className="text-left">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-8"
            icon={
              isSubmitting ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <FaPaperPlane />
              )
            }
            iconPosition="left"
          >
            {isSubmitting ? "بھیجا جا رہا ہے..." : "پیغام بھیجیں"}
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
