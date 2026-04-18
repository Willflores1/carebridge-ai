import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Services() {
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
              <Link href="/services" className="text-primary-600 font-semibold text-sm transition-colors">Services</Link>
              <Link href="/features" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">Features</Link>
              <Link href="/faq" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">FAQ</Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Our <span className="text-primary-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-medium">
            Discover how CareBridge AI provides smart, structured support to guide you through every stage of your healthcare journey.
          </p>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-3xl mb-6">📅</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointment Reminders</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Stay on top of your schedule with our intelligent reminder system. We provide timely, personalized notifications for upcoming visits, lab tests, and imaging appointments, so you never miss a critical step in your care plan.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-center">✓ Automated scheduling alerts</li>
              <li className="flex items-center">✓ Pre-visit preparation checklists</li>
              <li className="flex items-center">✓ Multi-channel notifications</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-3xl mb-6">🧭</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Care Navigation Support</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Finding the right specialist and coordinating care can be overwhelming. We streamline the logistics by guiding you to appropriate providers and helping you organize referrals and care transfers efficiently.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-center">✓ Provider matching assistance</li>
              <li className="flex items-center">✓ Referral tracking</li>
              <li className="flex items-center">✓ Care coordination tools</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-3xl mb-6">💡</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Follow-Up Guidance</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The time between appointments is crucial for your health. We help clarify post-visit physician instructions, ensuring you know exactly when to schedule follow-ups or what lifestyle modifications were recommended.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-center">✓ Post-visit summary organization</li>
              <li className="flex items-center">✓ Next-step task management</li>
              <li className="flex items-center">✓ Progress check-ins</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-3xl mb-6">📚</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Information Support</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We translate complex medical logistics into plain summary terms you can understand. While we do not provide medical advice or diagnosis, we do provide structured educational support to help you better understand the logistics of your health journey.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-center">✓ Plain-language summaries</li>
              <li className="flex items-center">✓ Educational resource curation</li>
              <li className="flex items-center">✓ Insurance & billing navigation</li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Section */}
        <div className="mt-16 bg-blue-50/50 rounded-2xl p-8 border border-blue-100 text-center max-w-3xl mx-auto">
          <p className="text-sm text-gray-600 italic">
            <strong>Important Note:</strong> CareBridge AI provides administrative support, logistics management, and general healthcare navigation. We do not provide medical diagnoses, treatment plans, or emergency medical services. Always consult your primary care physician for medical advice.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
