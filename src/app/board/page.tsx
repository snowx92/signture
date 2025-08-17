import { Award, Calendar, Mail, Phone, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BoardPage() {
  const boardMembers = [
    {
      id: 1,
      name: "Dr. Tarek",
      title: "Chairman of the Board",
      image: "/tarek.jpg",
      bio: "Dr. Tarek is a distinguished leader in educational excellence with over 30 years of experience in international education and quality assurance. He has been instrumental in establishing Signature Academy&apos;s reputation as a world-class educational institution. His vision for innovative learning methodologies and commitment to academic excellence has shaped the academy&apos;s strategic direction.",
      expertise: [
        "Educational Leadership",
        "Quality Assurance Systems",
        "International Standards",
        "Strategic Planning",
      ],
      achievements: [
        "30+ years in educational excellence",
        "ISO 21001:2018 Implementation Leader",
        "International Education Consultant",
        "Award-winning Academic Administrator",
      ],
    },
    {
      id: 2,
      name: "Dr. Amal",
      title: "Vice Chairman & Academic Director",
      image: "/amal.jpg",
      bio: "Dr. Amal brings exceptional expertise in curriculum development and educational innovation to Signature Academy. With her extensive background in academic administration and student development, she has been pivotal in designing our cutting-edge programs that prepare students for global success. Her dedication to fostering a nurturing learning environment has made her a beloved figure among students and faculty alike.",
      expertise: [
        "Curriculum Development",
        "Academic Innovation",
        "Student Development",
        "Educational Psychology",
      ],
      achievements: [
        "Leading Curriculum Designer",
        "Student Success Champion",
        "Educational Innovation Expert",
        "Faculty Development Specialist",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#3791b9]/10 text-[#021982] rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Leadership Team
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Board of </span>
            <span className="bg-gradient-to-r from-[#3791b9] to-[#021982] bg-clip-text text-transparent">
              Directors
            </span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Meet the visionary leaders who guide Signature Academy&apos;s
            mission to provide world-class education and shape the future of
            learning.
          </p>
        </div>

        {/* Board Members */}
        <div className="space-y-16">
          {boardMembers.map((member, index) => (
            <div
              key={member.id}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`lg:flex ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div className="relative h-96 lg:h-full">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="space-y-6">
                    {/* Name and Title */}
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h2>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#3791b9] to-[#021982] text-white rounded-full text-sm font-semibold">
                        {member.title}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {member.bio}
                    </p>

                    {/* Expertise */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-[#3791b9]" />
                        Areas of Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-[#3791b9]/10 text-[#021982] rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-[#3791b9]" />
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start">
                            <div className="w-2 h-2 bg-[#3791b9] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 bg-gradient-to-r from-[#3791b9] to-[#021982] rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Connect with Our Leadership
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our board members are committed to educational excellence and are
            always open to discussing opportunities for collaboration and
            growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+201275444617"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              0227757515
            </a>
            <a
              href="mailto:info@signatureacademyedu.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              info@signatureacademyedu.com
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#3791b9] text-white rounded-full font-semibold hover:bg-[#021982] transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
