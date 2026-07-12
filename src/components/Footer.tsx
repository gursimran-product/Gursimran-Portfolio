import { Linkedin, Mail, Heart } from 'lucide-react';
import { highlights } from '../data/highlights';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm max-w-md">
              Product Manager focused on building thoughtful B2B experiences.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={highlights.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${highlights.contact.email}`}
              className="text-gray-500 hover:text-emerald-600 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            Designed & built with <Heart className="w-4 h-4 mx-1 text-emerald-600 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
