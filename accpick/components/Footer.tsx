import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-900 p-6 mt-auto w-full">
      <div className="flex flex-col md:flex-row md:justify-between items-center max-w-6xl mx-auto">
        {/* Copyright */}
        <p className="text-sm mb-3 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} Accpick. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 mb-3 md:mb-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600" aria-label="Facebook">
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600" aria-label="YouTube">
            <FaYoutube size={20} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
