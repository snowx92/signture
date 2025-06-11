import React from 'react';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <Lock className="w-4 h-4 mr-2" />
            Privacy & Security
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          
          <div className="text-sm text-gray-500 mt-4">
            Last updated: December 2024
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-8">
          
          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-green-600" />
              1. Information We Collect
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>1.1 Student Information:</strong> We collect basic student information including name, age, contact details, academic records, and educational assessments necessary for providing our educational services.
              </p>
              <p>
                <strong>1.2 Parent/Guardian Information:</strong> We collect parent and guardian contact information, emergency contacts, and relevant family information to ensure proper communication and student safety.
              </p>
              <p>
                <strong>1.3 Educational Records:</strong> We maintain academic progress records, attendance records, and assessment results as part of our educational services.
              </p>
              <p>
                <strong>1.4 Website Usage:</strong> We may collect information about how you use our website, including IP addresses, browser information, and pages visited for website improvement purposes.
              </p>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <UserCheck className="w-6 h-6 mr-3 text-green-600" />
              2. How We Use Your Information
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>2.1 Educational Services:</strong> We use student information to provide educational services, track academic progress, and customize learning experiences.
              </p>
              <p>
                <strong>2.2 Communication:</strong> We use contact information to communicate with parents/guardians about student progress, academy updates, and important notifications.
              </p>
              <p>
                <strong>2.3 Safety and Security:</strong> We use information to ensure student safety and maintain a secure learning environment.
              </p>
              <p>
                <strong>2.4 Legal Compliance:</strong> We may use information to comply with legal requirements and educational regulations.
              </p>
            </div>
          </section>

          {/* Information Protection */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-green-600" />
              3. How We Protect Your Information
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>3.1 Security Measures:</strong> We implement appropriate technical and organizational security measures to protect personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                <strong>3.2 Access Controls:</strong> Access to student information is limited to authorized staff members who need the information to perform their educational duties.
              </p>
              <p>
                <strong>3.3 Data Storage:</strong> Student records are stored securely both in physical and digital formats, with regular backups and security updates.
              </p>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Information Sharing
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>4.1 Limited Sharing:</strong> We do not sell or rent student information to third parties. Information is only shared when necessary for educational purposes or as required by law.
              </p>
              <p>
                <strong>4.2 Educational Partners:</strong> We may share information with accredited educational partners and certification bodies as necessary for program delivery and certification.
              </p>
              <p>
                <strong>4.3 Legal Requirements:</strong> We may disclose information when required by law, court order, or other legal processes.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Your Rights
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>5.1 Access Rights:</strong> You have the right to access your student&apos;s educational records and request copies when appropriate.
              </p>
              <p>
                <strong>5.2 Correction Rights:</strong> You may request correction of inaccurate information in your student&apos;s records.
              </p>
              <p>
                <strong>5.3 Privacy Preferences:</strong> You may opt out of non-essential communications while maintaining necessary educational communications.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Data Retention
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                We retain student information for as long as necessary to provide educational services and comply with legal requirements. Academic records may be maintained for extended periods to support transcript requests and continuing education needs.
              </p>
            </div>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Policy Updates
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on our website and communicated to enrolled families. Your continued use of our services constitutes acceptance of any updates.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                If you have questions about this privacy policy or how we handle your information, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p><strong>Phone:</strong> +20 12 75444617</p>
                <p><strong>Email:</strong> signatureacademy30@gmail.com</p>
                <p><strong>Address:</strong> ٢ / أأ. عبدالرحمن رشدي الدور الارضي مكتب ١ بجوار مسجد ابو بكر الصديق بجوار قسم النزهه</p>
              </div>
            </div>
          </section>

        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 