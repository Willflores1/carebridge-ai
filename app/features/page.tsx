import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Features() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">CareBridge AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">About</Link>
              <Link href="/services" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">Services</Link>
              <Link href="/features" className="text-primary-600 font-semibold text-sm transition-colors">Features</Link>
              <Link href="/faq" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">FAQ</Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">Our Features</h1>
        <p className="text-xl text-gray-600 mb-12">A detailed look at the tools CareBridge AI is building to support you.</p>

        <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">📅 Smart Scheduling</h3>
            <p className="text-gray-600">Smart appointment booking and scheduling.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">🔔 Automated Reminders</h3>
            <p className="text-gray-600">Automated reminders by email or text.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">🧭 AI Care Navigation</h3>
            <p className="text-gray-600">AI-powered symptom or care navigation support.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">💡 Personalized Guidance</h3>
            <p className="text-gray-600">Personalized follow-up care instructions.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-2">🖥️ Patient Dashboard</h3>
            <p className="text-gray-600">Patient dashboard for appointments and health tasks.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
