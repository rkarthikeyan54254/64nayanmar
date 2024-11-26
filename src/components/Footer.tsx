import React from 'react';
import { Mail, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-orange-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold font-tamil mb-4">தொடர்புக்கு</h3>
            <div className="space-y-2">
              <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-orange-200">
                <Phone size={20} />
                <span>+91 1234567890</span>
              </a>
              <a href="mailto:info@example.com" className="flex items-center space-x-2 hover:text-orange-200">
                <Mail size={20} />
                <span>info@example.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-tamil mb-4">விரைவு இணைப்புகள்</h3>
            <ul className="space-y-2">
              <li>
                <a href="/gallery" className="hover:text-orange-200">புகைப்படங்கள்</a>
              </li>
              <li>
                <a href="/videos" className="hover:text-orange-200">காணொளிகள்</a>
              </li>
              <li>
                <a href="/books" className="hover:text-orange-200">நூல்கள்</a>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <h3 className="text-xl font-bold font-tamil mb-4">பதிப்புரிமை</h3>
            <p className="font-tamil">
              © {new Date().getFullYear()} பிரதோஷ சிவநாயன்மார். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;