import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Contact() {
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
              <Link href="/features" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">Features</Link>
              <Link href="/faq" className="text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">FAQ</Link>
              <Link href="/contact" className="text-primary-600 font-semibold text-sm transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600">Reach out at support@carebridge.ai or +1 (555) 019-8273.</p>
      </section>

      <Footer />
    </main>
  );
}
