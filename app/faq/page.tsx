import Link from 'next/link';
import Footer from '@/components/Footer';

export default function FAQ() {
  const faqs = [
    {
      question: "What does CareBridge AI do?",
      answer: "CareBridge AI is a healthcare support platform designed to simplify the patient journey. We offer structured appointment reminders, assistance with care navigation (such as referrals and finding providers), help clarifying post-visit instructions, and easy-to-understand summaries of complex healthcare logistics."
    },
    {
      question: "Who is CareBridge AI for?",
      answer: "Our platform is for any patient or caregiver who feels overwhelmed by the logistical aspects of managing healthcare. Whether you're managing a complex chronic condition or simply trying to stay on top of routing check-ups, we help you stay organized and focused on what matters most: your health."
    },
    {
      question: "How does CareBridge AI help patients?",
      answer: "We help by removing the administrative burden from healthcare. Instead of worrying about when your next follow-up should be scheduled, what preparation is needed for a lab test, or who to contact for a referral, CareBridge AI tracks these logistical tasks and provides timely, clear guidance every step of the way."
    },
    {
      question: "Does CareBridge AI replace my doctor or provide medical advice?",
      answer: "No. CareBridge AI is strictly an administrative and logistical support tool. We do not provide medical diagnosis, treatment plans, or emergency services. Our goal is to support your healthcare journey by organizing information, but you should always consult your healthcare provider for any medical advice or health-related concerns."
    },
    {
      question: "How can I get started?",
      answer: "Getting started is easy! You can reach out to our team via the Contact page to set up an initial consultation. We'll learn about your specific healthcare logistics needs and customize a support plan to ensure your care journey is as smooth and stress-free as possible."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">
                CareBridge AI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">About</Link>
              <Link href="/services" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">Services</Link>
              <Link href="/features" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">Features</Link>
              <Link href="/faq" className="text-primary-600 font-semibold text-sm transition-colors">FAQ</Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Frequently Asked <span className="text-primary-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-medium">
            Find quick answers to common questions about how CareBridge AI can support your healthcare journey.
          </p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                <span className="text-primary-600 mr-3 mt-1 text-2xl leading-none">•</span>
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed pl-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-primary-50 to-white rounded-2xl p-10 border border-primary-100 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We're here to help clarify any aspect of our services. Reach out to our support team for more information.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
