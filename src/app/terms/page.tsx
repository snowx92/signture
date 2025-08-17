import { AlertCircle, FileText, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Legal Information
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Please read these terms carefully before using our educational
            services
          </p>

          <div className="text-sm text-gray-500 mt-4">
            Last updated: December 2024
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-8">
          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-600" />
              1. Acceptance of Terms
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                By enrolling in any program or using any service provided by
                Signature Academy, you agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use
                our services.
              </p>
              <p>
                These terms apply to all students, parents, guardians, and users
                of our educational services and website.
              </p>
            </div>
          </section>

          {/* Educational Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-3 text-blue-600" />
              2. Educational Services
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>2.1 Service Description:</strong> Signature Academy
                provides educational programs for students aged 3-18 years,
                including early childhood, elementary, and secondary education
                programs.
              </p>
              <p>
                <strong>2.2 Program Delivery:</strong> We offer various learning
                formats including in-person classes, online sessions, and hybrid
                programs. The specific format will be communicated during
                enrollment.
              </p>
              <p>
                <strong>2.3 Curriculum Standards:</strong> Our curriculum meets
                international standards and is accredited by recognized
                educational bodies including ISO 21001:2018, ISO 9001:2015, NQA,
                and CINPAA.
              </p>
            </div>
          </section>

          {/* Student Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="w-6 h-6 mr-3 text-blue-600" />
              3. Student and Parent Responsibilities
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>3.1 Attendance:</strong> Students are expected to
                maintain regular attendance as specified in their program
                requirements.
              </p>
              <p>
                <strong>3.2 Academic Integrity:</strong> Students must maintain
                academic honesty and integrity in all coursework and
                assessments.
              </p>
              <p>
                <strong>3.3 Code of Conduct:</strong> Students and parents must
                adhere to our code of conduct, which promotes respect,
                responsibility, and positive learning environment.
              </p>
              <p>
                <strong>3.4 Communication:</strong> Parents/guardians are
                responsible for maintaining current contact information and
                responding to academy communications in a timely manner.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>For questions regarding these terms, please contact us:</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p>
                  <strong>Phone:</strong> 0227757515
                </p>
                <p>
                  <strong>Email:</strong> info@signatureacademyedu.com
                </p>
                <p>
                  <strong>Address:</strong> ٢ / أأ. عبدالرحمن رشدي الدور الارضي
                  مكتب ١ بجوار مسجد ابو بكر الصديق بجوار قسم النزهه
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
