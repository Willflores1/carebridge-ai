import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
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
              <Link href="/faq" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">FAQ</Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">Contact</Link>
              <Link href="/auth/signup" className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Healthcare guidance made simpler, <span className="text-primary-600">faster, and more personal.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium max-w-3xl mx-auto">
            Smarter support for every step of the patient journey.
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            CareBridge AI helps patients find the right care, stay organized with appointments, and better understand next steps with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Empowering Your Healthcare Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Care Navigation"
              description="Find the right specialists and coordinate care seamlessly without the confusion."
              icon="🧭"
            />
            <FeatureCard
              title="Appointment Reminders"
              description="Never miss a beat with smart, timely notifications for all your healthcare visits."
              icon="📅"
            />
            <FeatureCard
              title="Follow-up Guidance"
              description="Clear, easy-to-understand post-visit instructions and health information."
              icon="💡"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white border text-center border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-primary-100 transition-all duration-300 transform hover:-translate-y-1">
      <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary-50 rounded-full text-3xl mb-6">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
