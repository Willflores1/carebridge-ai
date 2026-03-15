import Link from 'next/link';

export default function About() {
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
              <Link href="/about" className="text-primary-600 font-semibold text-sm transition-colors">About</Link>
              <Link href="/services" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">Services</Link>
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
            About <span className="text-primary-600">CareBridge AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-medium">
            We believe that navigating healthcare should be simple, clear, and focused on the patient.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-primary-50 text-primary-600 p-2 rounded-lg mr-4">📘</span>
            Our Story
          </h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4 leading-relaxed">
              CareBridge AI was created from a simple observation: healthcare is already complex enough, and managing the logistics around it shouldn't add to the burden. From remembering appointments to understanding post-visit instructions, the patient journey is often filled with confusion and missed connections.
            </p>
            <p className="leading-relaxed">
              We started CareBridge AI to build a supportive bridge between patients and their care. Our platform is designed to seamlessly guide you through your healthcare experience, ensuring you always know where you need to be and what steps to take next.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-accent-50 text-accent-600 p-2 rounded-lg mr-4">🎯</span>
            Our Mission
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xl text-gray-700 leading-relaxed font-medium italic">
              "To make healthcare navigation simpler, more accessible, and profoundly less stressful for everyone."
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="bg-primary-50 text-primary-600 p-2 rounded-lg mr-4">⭐</span>
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clarity First</h3>
              <p className="text-gray-600">We communicate clearly, replacing medical jargon with understandable, actionable guidance.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patient-Centered</h3>
              <p className="text-gray-600">Everything we build starts with the patient's needs, reducing anxiety and improving focus on health.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Reliability</h3>
              <p className="text-gray-600">We provide consistent, timely, and supportive reminders you can rely on completely.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Calm Compassion</h3>
              <p className="text-gray-600">Our platform is designed to be a calming presence in what can often be a stressful journey.</p>
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p className="font-medium text-gray-700 mb-2">CareBridge AI</p>
          <p className="text-sm">© {new Date().getFullYear()} CareBridge AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
