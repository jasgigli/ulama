"use client";
import React from "react";
import Button from "@/app/components/ui/Button";

const ContactPage: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus("loading");
    setErrorMessage(null);
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmissionStatus("success");
        // Optionally, reset the form: event.currentTarget.reset();
      } else {
        setSubmissionStatus("error");
        setErrorMessage(data.message || "An unexpected error occurred.");
      }
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("An error occurred while sending the message.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-blue-700 mb-6">
            ہم سے رابطہ کریں
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            براہ مہربانی نیچے دیا گیا فارم پُر کریں اور ہم جلد از جلد آپ سے
            رابطہ کریں گے۔
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-800 text-right"
              >
                نام
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="اپنا نام درج کریں"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 text-right"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-800 text-right"
              >
                ای میل
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="اپنا ای میل درج کریں"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 text-right"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-800 text-right"
              >
                فون نمبر
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="اپنا فون نمبر درج کریں"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 text-right"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-800 text-right"
              >
                پیغام
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="اپنا پیغام لکھیں"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 text-right"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={submissionStatus === "loading"}
                className="px-8 py-3 text-lg"
              >
                {submissionStatus === "loading" ? "بھیج رہا ہے..." : "بھیجیں"}
              </Button>
            </div>
          </form>
          {submissionStatus === "success" && (
            <div className="mt-6 text-center text-green-600 text-xl font-semibold">
              پیغام کامیابی سے بھیج دیا گیا ہے۔
            </div>
          )}
          {submissionStatus === "error" && (
            <div className="mt-6 text-center text-red-600 text-xl font-semibold">
              {errorMessage ||
                "پیغام بھیجنے میں مسئلہ پیش آیا۔ براہ کرم دوبارہ کوشش کریں۔"}
            </div>
          )}
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">ہمارا پتہ:</h2>
          <p className="mt-2 text-gray-700">مجلس اتحاد العلماء</p>
          <p className="text-gray-700">خالصہ 2، قاضی آباد</p>
          <p className="text-gray-700">پشاور، پاکستان</p>
          <p className="mt-4 text-gray-700">فون:03460921637</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
