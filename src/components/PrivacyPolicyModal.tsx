'use client';

import { FaTimes } from 'react-icons/fa';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  emailAddress: string;
  phoneNumber: string;
}

// date to be updated whenever the privacy policy is changed
const LAST_UPDATED = 'November 24, 2025';

export default function PrivacyPolicyModal({ isOpen, onClose, emailAddress, phoneNumber }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gray-800 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Close privacy policy"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold mb-4">MDSN Privacy Policy</h3>
            <p className="text-gray-600 mb-4">
                Last updated: {LAST_UPDATED}
            </p>
            <div className="space-y-6">
              <section>
                <h4 className="text-lg font-semibold mb-2">1. Information We Collect</h4>
                <p className="text-gray-700">
                  We collect information that you provide directly to us, including name, email address, 
                  phone number, and project details when you contact us through our website forms, 
                  booking system, or other communication channels.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-semibold mb-2">2. How We Use Your Information</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>To provide and maintain our services</li>
                  <li>To communicate with you about your projects</li>
                  <li>To send you updates and marketing communications (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h4 className="text-lg font-semibold mb-2">3. Data Protection</h4>
                <p className="text-gray-700">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-semibold mb-2">4. Third-Party Services</h4>
                <p className="text-gray-700">
                  We use third-party services like Calendly for booking consultations and Google Analytics for website analytics. These services have their own privacy policies governing how they handle your information.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-semibold mb-2">5. Your Rights</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h4 className="text-lg font-semibold mb-2">6. Contact Us</h4>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-gray-700 mt-2">
                  Email: {emailAddress}<br />
                  Phone: {phoneNumber}
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 p-6 border-t border-gray-200">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}