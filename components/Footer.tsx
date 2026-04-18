import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-primary-600 mb-4">CareBridge AI</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Helping patients navigate healthcare with clarity, support, and confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-primary-600 transition-colors">Services</Link></li>
              <li><Link href="/features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-primary-600 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Email: support@carebridge.ai</li>
              <li>Phone: +1 (555) 019-8273</li>
              <li>123 Navigation Way<br />Health District, SF 94107</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center md:flex md:justify-between md:text-left items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} CareBridge AI. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-primary-600 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary-600 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
