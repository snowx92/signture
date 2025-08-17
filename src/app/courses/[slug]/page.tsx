"use client";

import {
  ArrowLeft,
  Award,
  CheckCircle,
  Clock,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { useLanguage } from "../../../components/ClientIntlProvider";
import Message from "../../../components/Message";

interface CourseData {
  id: string;
  title: string;
  fullDescription: string;
  duration: string;
  level: string;
  image: string;
  color: string;
  category: string;
  highlights: string[];
  curriculum: string[];
  prerequisites: string[];
  certification: string;
  rating: number;
  students: number;
  accreditation?: string;
  upcoming?: boolean;
}

const coursesData: { [key: string]: CourseData } = {
  "motivational-skills": {
    id: "motivational-skills",
    title: "Motivational Skills",
    fullDescription:
      "This diploma program will equip you with the skills to develop and communicate a compelling shared vision for your team. You will learn how to set clear, effective goals and expectations that align with this vision and empower your team to achieve it. Additionally, the program explores key drivers of performance across different cultural contexts and teaches you how to align incentives and rewards with desired behaviors to foster motivation and commitment.\n\nMotivation is a critical challenge in today's organizations. According to a recent Gallup poll, only 13% of employees globally are highly engaged and motivated at work. This course challenges the notion that low motivation stems from individual shortcomings. Instead, it emphasizes how motivation is shaped by workplace conditions, goal structure, and reward systems. Through this course, you will gain practical tools to diagnose and address motivational challenges, enabling you to create an environment where your team can thrive and perform at their best.",
    duration: "3-6 months",
    level: "Intermediate",
    image: "/programs/motivational.jpeg",
    color: "from-blue-500 to-blue-700",
    category: "Leadership",
    upcoming: true,
    highlights: [
      "Develop compelling shared visions",
      "Set effective goals and expectations",
      "Understand cultural drivers of performance",
      "Design incentive and reward systems",
      "Diagnose motivational challenges",
    ],
    curriculum: [
      "Introduction to Motivational Leadership",
      "Vision Development and Communication",
      "Goal Setting and Performance Management",
      "Cultural Context in Motivation",
      "Incentive Design and Implementation",
      "Diagnostic Tools for Motivation",
      "Creating High-Performance Environments",
    ],
    prerequisites: [
      "Basic management experience",
      "Understanding of team dynamics",
    ],
    certification: "Professional Motivational Skills Diploma",
    rating: 4.8,
    students: 2150,
  },
  "branding-diploma": {
    id: "branding-diploma",
    title: "Branding Diploma",
    fullDescription:
      "In today's competitive marketplace, strong branding is essential for capturing attention, building trust, and creating lasting customer loyalty. This comprehensive Branding Diploma program is designed to equip you with the strategic and creative skills needed to build, manage, and grow powerful brands.\n\nThroughout the program, you will explore the core principles of brand identity, positioning, and storytelling. You will learn how to develop a unique brand voice, create cohesive visual and verbal branding across channels, and align brand strategy with business objectives. The curriculum also covers critical topics such as consumer behavior, brand equity, digital branding, and reputation management.\n\nBy the end of this diploma, you will have the tools to conduct brand audits, craft compelling brand strategies, and lead brand initiatives that resonate with target audiences and stand out in a crowded marketplace. Whether you are building a new brand from the ground up or revitalizing an existing one, this program will prepare you to drive meaningful and measurable impact through effective branding.",
    duration: "6-8 months",
    level: "Beginner to Advanced",
    image: "/programs/branding .jpg",
    color: "from-blue-400 to-blue-600",
    category: "Marketing",
    upcoming: true,
    highlights: [
      "Master brand identity and positioning",
      "Develop unique brand voice and storytelling",
      "Create cohesive visual branding",
      "Understand consumer behavior",
      "Build brand equity and manage reputation",
    ],
    curriculum: [
      "Fundamentals of Branding",
      "Brand Strategy and Positioning",
      "Brand Identity Development",
      "Visual Brand Design",
      "Brand Storytelling and Communication",
      "Consumer Psychology and Behavior",
      "Digital Branding Strategies",
      "Brand Management and Reputation",
    ],
    prerequisites: ["Basic marketing knowledge helpful but not required"],
    certification: "Professional Branding Diploma",
    rating: 4.9,
    students: 3200,
  },
  "business-english": {
    id: "business-english",
    title: "Business English Communication",
    fullDescription:
      "This diploma program is designed to develop learners' ability to communicate effectively and professionally in a variety of business contexts. Through the exploration of key business concepts and real-world scenarios, participants will enhance their linguistic proficiency while building confidence in both written and spoken English within a professional environment.\n\nThe curriculum integrates essential language skills—including listening, reading, writing, speaking, grammar, and vocabulary—tailored specifically to business applications. Learners will be encouraged to think critically and communicate creatively, applying language tools to authentic business situations.\n\nKey topics covered include branding, corporate travel, organizational structures, advertising, commerce, cross-cultural communication, and employment. By the end of the program, participants will be well-equipped to navigate diverse business environments with clarity, professionalism, and cultural awareness.",
    duration: "4-6 months",
    level: "All Levels",
    image: "/programs/business english.jpg",
    color: "from-blue-500 to-blue-700",
    category: "Communication",
    upcoming: true,
    highlights: [
      "Professional business communication",
      "Cross-cultural communication skills",
      "Business writing and presentations",
      "Industry-specific vocabulary",
      "Confidence in professional settings",
    ],
    curriculum: [
      "Business Communication Fundamentals",
      "Professional Writing Skills",
      "Presentation and Public Speaking",
      "Cross-Cultural Business Communication",
      "Industry-Specific English",
      "Business Correspondence",
      "Negotiation and Meeting Skills",
    ],
    prerequisites: ["Intermediate English level"],
    certification: "Business English Communication Diploma",
    rating: 4.7,
    students: 1890,
  },
  "professional-branding": {
    id: "professional-branding",
    title: "Professional Branding & Brand Management",
    fullDescription:
      "Designed for Beginners and Aspiring Professionals. This diploma program is tailored for beginners as well as professionals with some experience in marketing and management who are looking to enhance their skills and drive impactful change within organizations. Whether you are just starting out or seeking to refine your expertise, this program offers a comprehensive foundation in brand management.\n\nThe course is rich in practical insights and up-to-date knowledge, introducing participants to modern strategies, case studies, techniques, and tools essential for building and managing successful brands. It is designed to help learners deepen their understanding of branding while gaining actionable skills that can be immediately applied in their professional roles.",
    duration: "6-9 months",
    level: "Beginner",
    image: "/programs/professional branding diploma.jpg",
    color: "from-blue-400 to-blue-600",
    category: "Marketing",
    upcoming: true,
    highlights: [
      "Comprehensive brand management foundation",
      "Modern branding strategies and tools",
      "Real-world case studies",
      "Practical skill development",
      "Immediate application opportunities",
    ],
    curriculum: [
      "Brand Management Fundamentals",
      "Brand Strategy Development",
      "Brand Identity and Design",
      "Brand Communication",
      "Brand Performance Measurement",
      "Digital Brand Management",
      "Brand Crisis Management",
    ],
    prerequisites: ["No prior experience required"],
    certification: "Professional Brand Management Diploma",
    rating: 4.8,
    students: 2780,
  },
  "leadership-diploma": {
    id: "leadership-diploma",
    title: "Leadership Diploma",
    fullDescription:
      "The Leadership Diploma is designed to equip participants with the foundational skills and insights necessary to influence others, confront challenges, and achieve organizational goals. This introductory course is tailored for individuals from diverse professional backgrounds, including both military and civilian sectors.\n\nThroughout the program, you will embark on an engaging and transformative journey, gaining a deeper understanding of leadership principles and their practical application. Emphasis is placed on the development of social character and interpersonal skills essential for effective leadership across boundaries—whether or not you hold formal authority.\n\nThe course covers key leadership concepts, including self-management, authority, power, influence, organizational politics, negotiation, change management, diversity, and various leadership styles. By clarifying the relationships between these elements, the program provides a comprehensive theoretical framework grounded in real-world application.",
    duration: "6-8 months",
    level: "All Levels",
    image: "/programs/leadership.jpg",
    color: "from-blue-600 to-blue-800",
    category: "Leadership",
    upcoming: true,
    highlights: [
      "Foundational leadership skills",
      "Influence without authority",
      "Change management expertise",
      "Organizational politics navigation",
      "Cross-sector applicability",
    ],
    curriculum: [
      "Leadership Fundamentals",
      "Self-Management and Emotional Intelligence",
      "Power, Authority, and Influence",
      "Team Leadership and Dynamics",
      "Change Management",
      "Organizational Politics and Negotiation",
      "Leadership Styles and Adaptability",
    ],
    prerequisites: ["Basic organizational experience helpful"],
    certification: "Professional Leadership Diploma",
    rating: 4.9,
    students: 4120,
  },
  "ecommerce-diploma": {
    id: "ecommerce-diploma",
    title: "Online eCommerce Diploma",
    fullDescription:
      "Our comprehensive Online eCommerce Diploma equips learners with the essential skills and knowledge required to design, develop, and manage successful eCommerce platforms. As our most advanced offering in this field, the program covers a wide range of key topics, including user experience (UX) design, search engine optimization (SEO), customer relationship management (CRM), payment systems, and more.\n\nDesigned to accommodate both beginners and experienced professionals from various backgrounds, the program also includes foundational courses in eCommerce marketing. These introductory modules offer valuable insights into launching and managing effective digital commerce campaigns.\n\nBy the end of the diploma program, participants will gain a solid understanding of how to identify and engage target audiences, craft strategic marketing plans, and operate a profitable eCommerce business. This course provides the practical knowledge and tools necessary to succeed in today's competitive online marketplace.",
    duration: "8-12 months",
    level: "Advanced",
    image: "/programs/online ecommerce .jpeg",
    color: "from-blue-500 to-blue-700",
    category: "Digital Business",
    upcoming: true,
    highlights: [
      "Complete eCommerce platform management",
      "UX design and optimization",
      "SEO and digital marketing",
      "Payment systems integration",
      "Profitable business operations",
    ],
    curriculum: [
      "eCommerce Fundamentals",
      "Platform Development and Design",
      "User Experience Optimization",
      "Search Engine Optimization",
      "Digital Marketing for eCommerce",
      "Customer Relationship Management",
      "Payment Systems and Security",
      "Analytics and Performance Optimization",
    ],
    prerequisites: [
      "Basic digital literacy",
      "Some business experience preferred",
    ],
    certification: "Advanced eCommerce Management Diploma",
    rating: 4.8,
    students: 1650,
  },
  "human-resources": {
    id: "human-resources",
    title: "Human Resources Diploma",
    fullDescription:
      "The Diploma in Human Resources offers a comprehensive understanding of key HR functions, processes, and emerging technologies shaping the modern workplace. This program is designed to enhance both personal and professional competencies through skill-based modules focused on communication, critical thinking, and effective decision-making.\n\nParticipants will gain experience in applying research and data analysis techniques, drawing on academic literature, industry reports, and case studies to inform strategic HR practices. The curriculum enables learners to build and strengthen capabilities across core HR domains, aligned with individual career goals and organizational needs.\n\nIdeal for current HR professionals seeking to expand their expertise, the program is also well-suited for individuals looking to transition into the HR field from related or unrelated disciplines.",
    duration: "6-9 months",
    level: "All Levels",
    image: "/programs/HR.jpeg",
    color: "from-blue-400 to-blue-600",
    category: "Management",
    upcoming: true,
    highlights: [
      "Comprehensive HR functions understanding",
      "Emerging HR technologies",
      "Data analysis and research skills",
      "Strategic HR practices",
      "Career transition support",
    ],
    curriculum: [
      "HR Fundamentals and Ethics",
      "Recruitment and Selection",
      "Performance Management",
      "Employee Relations",
      "Compensation and Benefits",
      "Training and Development",
      "HR Analytics and Technology",
      "Employment Law and Compliance",
    ],
    prerequisites: ["No prior HR experience required"],
    certification: "Human Resources Management Diploma",
    rating: 4.7,
    students: 2340,
  },
  "soft-skills": {
    id: "soft-skills",
    title: "Soft Skills Diploma",
    fullDescription:
      "The Soft Skills Diploma equips learners with the essential competencies required for personal growth and professional effectiveness. Foundational modules focus on core skills such as communication, teamwork, problem-solving, and time management—critical to success in any career path.\n\nFor more advanced learners, the program offers specialized training in areas including leadership, emotional intelligence, and conflict resolution. Earning certifications through these modules demonstrates proficiency in navigating interpersonal dynamics and managing diverse workplace environments.\n\nFull-time study options provide immersive, practical training designed to prepare participants for roles involving leadership, collaborative work, and project coordination. This comprehensive diploma supports individuals in developing the behavioral and interpersonal capabilities vital for today's dynamic and team-oriented professional settings.",
    duration: "4-6 months",
    level: "All Levels",
    image: "/programs/soft skills.jpg",
    color: "from-blue-500 to-blue-700",
    category: "Personal Development",
    upcoming: true,
    highlights: [
      "Essential professional competencies",
      "Communication and teamwork skills",
      "Emotional intelligence development",
      "Conflict resolution techniques",
      "Leadership readiness",
    ],
    curriculum: [
      "Communication Excellence",
      "Teamwork and Collaboration",
      "Problem-Solving and Critical Thinking",
      "Time Management and Organization",
      "Emotional Intelligence",
      "Leadership Foundations",
      "Conflict Resolution",
      "Professional Etiquette",
    ],
    prerequisites: ["No prerequisites required"],
    certification: "Professional Soft Skills Diploma",
    rating: 4.8,
    students: 3890,
  },
  "marketing-diploma": {
    id: "marketing-diploma",
    title: "Marketing Diploma",
    fullDescription:
      "The Marketing Diploma is structured as a transformative learning journey, guiding participants through eight strategically designed courses across four key phases: analysis, strategic decision-making, implementation, and evaluation. This comprehensive approach equips learners with both the theoretical foundation and practical tools required for effective marketing leadership.\n\nThe Advanced Marketing Management Diploma further deepens this journey by addressing contemporary marketing challenges and opportunities. Participants benefit from a balanced curriculum that integrates relevant conceptual frameworks with hands-on application, enabling them to confidently navigate complex marketing environments.\n\nCore areas of study include the role of marketing in business strategy, marketing planning, consumer behavior, promotional strategies, implementation of the marketing mix, and survey design. Learners will apply key marketing concepts through case study analysis, gaining the insight and experience needed to tackle real-world marketing problems and opportunities.",
    duration: "8-12 months",
    level: "Intermediate to Advanced",
    image: "/programs/marketing.jpg",
    color: "from-blue-600 to-blue-800",
    category: "Marketing",
    upcoming: true,
    highlights: [
      "Comprehensive marketing strategy",
      "Consumer behavior analysis",
      "Marketing mix implementation",
      "Case study application",
      "Leadership development",
    ],
    curriculum: [
      "Marketing Fundamentals",
      "Market Research and Analysis",
      "Consumer Behavior",
      "Brand Management",
      "Digital Marketing",
      "Marketing Strategy",
      "Campaign Planning and Execution",
      "Marketing Analytics",
    ],
    prerequisites: ["Basic business knowledge helpful"],
    certification: "Advanced Marketing Management Diploma",
    rating: 4.9,
    students: 2950,
  },
  "advertising-diploma": {
    id: "advertising-diploma",
    title: "Advertising Diploma",
    fullDescription:
      "The Diploma in Advertising provides a comprehensive understanding of fundamental marketing principles and practices, with a focus on how the marketing environment influences various marketing activities. The program explores the core responsibilities, challenges, and decision-making processes faced by marketing managers.\n\nParticipants will examine contemporary issues and strategies related to product management, distribution channels, sales techniques, pricing strategies, promotional activities, and consumer behavior. Emphasizing an integrated marketing approach, the course aims to equip learners with the skills necessary to develop and implement an effective and balanced marketing mix.",
    duration: "6-8 months",
    level: "Intermediate",
    image: "/programs/advertisements.jpg",
    color: "from-blue-400 to-blue-600",
    category: "Marketing",
    upcoming: true,
    highlights: [
      "Comprehensive advertising principles",
      "Marketing environment analysis",
      "Promotional strategy development",
      "Consumer behavior insights",
      "Integrated marketing approach",
    ],
    curriculum: [
      "Advertising Fundamentals",
      "Creative Strategy and Development",
      "Media Planning and Buying",
      "Digital Advertising",
      "Brand Communications",
      "Consumer Psychology",
      "Campaign Management",
      "Advertising Analytics",
    ],
    prerequisites: ["Basic marketing knowledge recommended"],
    certification: "Professional Advertising Diploma",
    rating: 4.7,
    students: 2180,
  },
  "digital-marketing": {
    id: "digital-marketing",
    title: "Digital Marketing Diploma",
    fullDescription:
      "The Digital Marketing Diploma offers a comprehensive learning pathway designed for both beginners and professionals seeking to enhance their digital marketing expertise. Foundational courses introduce essential topics such as search engine optimization (SEO), social media strategy, and content marketing.\n\nFor advanced learners, the program provides opportunities to earn specialized certifications in areas including Google Ads, email marketing, and data analytics. These certifications validate proficiency in paid advertising, campaign management, and conversion optimization.\n\nFull-time study options incorporate practical projects and internship placements, equipping participants with the hands-on experience necessary to excel in roles such as social media management, digital strategy, and brand development.",
    duration: "6-9 months",
    level: "All Levels",
    image: "/programs/digital marketing.jpg",
    color: "from-blue-500 to-blue-700",
    category: "Digital Marketing",
    upcoming: true,
    highlights: [
      "Complete digital marketing expertise",
      "SEO and content marketing",
      "Social media strategy",
      "Google Ads certification",
      "Analytics and optimization",
    ],
    curriculum: [
      "Digital Marketing Foundations",
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Content Marketing Strategy",
      "Pay-Per-Click Advertising",
      "Email Marketing",
      "Digital Analytics",
      "Conversion Optimization",
    ],
    prerequisites: ["Basic computer skills required"],
    certification: "Professional Digital Marketing Diploma",
    rating: 4.8,
    students: 4250,
  },
  "food-safety": {
    id: "food-safety",
    title: "Food Safety & Hygiene Diploma",
    fullDescription:
      "Egypt's First Accredited Food Safety and Hygiene Diploma. Are you seeking a globally recognized certification in Food Safety and Hygiene? Now is your opportunity to enroll in a comprehensive diploma program led by Dr. Tarek Issa—an esteemed expert and consultant with over 30 years of industry experience and more than 15,000 hours of professional training.\n\nThis diploma is designed to equip you with the critical knowledge and skills to advance your career in food safety and hygiene. The program features 65 hours of in-depth, practical training with dual accreditation from the UK and Finland, certified trainer accredited by the Ministry of Manpower, and recognized expert in international cooperation protocols.",
    duration: "3-4 months",
    level: "All Levels",
    image: "/programs/food safety.jpeg",
    color: "from-blue-500 to-blue-700",
    category: "Health & Safety",
    accreditation: "UK and Finland Dual Accreditation",
    highlights: [
      "65 hours of practical training",
      "Dual UK and Finland accreditation",
      "Expert instruction with 30+ years experience",
      "Ministry of Manpower certification",
      "International cooperation protocols",
    ],
    curriculum: [
      "Food Safety Fundamentals",
      "HACCP Principles",
      "Food Hygiene Standards",
      "Contamination Prevention",
      "Food Storage and Handling",
      "Regulatory Compliance",
      "Risk Assessment",
      "International Standards",
    ],
    prerequisites: ["No prerequisites required"],
    certification: "Accredited Food Safety & Hygiene Diploma",
    rating: 4.9,
    students: 1560,
  },
  "artificial-intelligence": {
    id: "artificial-intelligence",
    title: "Artificial Intelligence Diploma",
    fullDescription:
      "The Artificial Intelligence Diploma provides a comprehensive foundation in the principles, technologies, and applications of AI. Designed for aspiring professionals and those seeking to deepen their expertise, this program covers essential topics such as machine learning, neural networks, natural language processing, computer vision, and data analytics.\n\nThrough a combination of theoretical instruction and practical hands-on projects, participants will develop the skills needed to design, implement, and manage AI-driven solutions across various industries. The curriculum also addresses ethical considerations, AI governance, and the impact of AI on business and society.\n\nGraduates of this diploma will be equipped to pursue roles such as AI specialist, data scientist, machine learning engineer, and AI project manager, empowering them to contribute to innovation and digital transformation in their organizations.",
    duration: "8-12 months",
    level: "Intermediate to Advanced",
    image: "/programs/artificial intelligence.jpg",
    color: "from-blue-600 to-blue-800",
    category: "Technology",
    upcoming: true,
    highlights: [
      "Comprehensive AI foundation",
      "Machine learning and neural networks",
      "Natural language processing",
      "Computer vision applications",
      "Ethical AI considerations",
    ],
    curriculum: [
      "Introduction to Artificial Intelligence",
      "Machine Learning Fundamentals",
      "Deep Learning and Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "AI Ethics and Governance",
      "AI Project Management",
      "Industry Applications",
    ],
    prerequisites: ["Programming basics", "Mathematics foundation"],
    certification: "Professional AI Specialist Diploma",
    rating: 4.8,
    students: 1890,
  },
  "vendor-management": {
    id: "vendor-management",
    title: "Vendor Management Diploma",
    fullDescription:
      "This Vendor Management Diploma is designed to equip professionals with the knowledge and skills required to effectively manage vendor relationships and drive optimal business outcomes. Participants will gain a thorough understanding of the procurement lifecycle, with a focus on the three foundational pillars of successful vendor management: commitments, relationships, and performance metrics.\n\nThe curriculum covers essential topics including fundamental concepts of vendor management, the strategic importance of fostering positive vendor and partner relationships within organizations, criteria for vendor selection and evaluation, proven strategies for developing and maintaining mutually beneficial partnerships, the role and implementation of Service Level Agreements (SLAs), and effective communication techniques for engaging with vendors and service providers.",
    duration: "4-6 months",
    level: "Intermediate",
    image: "/programs/vendor management.jpeg",
    color: "from-blue-400 to-blue-600",
    category: "Management",
    upcoming: true,
    highlights: [
      "Complete vendor lifecycle management",
      "Relationship building strategies",
      "Performance metrics and SLAs",
      "Vendor evaluation criteria",
      "Strategic partnership development",
    ],
    curriculum: [
      "Vendor Management Fundamentals",
      "Vendor Selection and Evaluation",
      "Contract Negotiation",
      "Relationship Management",
      "Performance Monitoring",
      "Service Level Agreements",
      "Risk Management",
      "Vendor Communication",
    ],
    prerequisites: [
      "Basic business experience",
      "Understanding of procurement",
    ],
    certification: "Professional Vendor Management Diploma",
    rating: 4.7,
    students: 1420,
  },
  "first-100-days": {
    id: "first-100-days",
    title: "First 100 Days as a Manager",
    fullDescription:
      "This diploma is designed to support professionals transitioning into new leadership roles by providing structured guidance and strategic frameworks to effectively navigate their first 100 days. The program equips emerging managers with the tools and insights necessary to establish a strong foundation for sustained career success.\n\nKey topics covered include understanding the critical importance of the initial leadership period as a determinant of long-term effectiveness, practical strategies to accelerate learning, foster key relationships, and create a meaningful early impact, and step-by-step methodologies for managing the transition, including situational assessment, strategic planning, securing early wins, and building credibility with stakeholders.",
    duration: "2-3 months",
    level: "Intermediate",
    image: "/programs/100 as brand manager.jpg",
    color: "from-blue-600 to-blue-800",
    category: "Leadership",
    upcoming: true,
    highlights: [
      "Strategic transition planning",
      "Rapid relationship building",
      "Early wins identification",
      "Credibility establishment",
      "Long-term success foundation",
    ],
    curriculum: [
      "Transition Planning",
      "Situational Assessment",
      "Stakeholder Mapping",
      "Quick Wins Strategy",
      "Team Building",
      "Communication Plans",
      "Performance Frameworks",
      "Leadership Presence",
    ],
    prerequisites: [
      "Promotion to management role",
      "Basic leadership experience",
    ],
    certification: "New Manager Success Diploma",
    rating: 4.8,
    students: 980,
  },
  "finance-non-financial": {
    id: "finance-non-financial",
    title: "Finance for Non-Financial Managers",
    fullDescription:
      "This diploma is designed to equip non-financial professionals, particularly middle managers within small and medium-sized enterprises (SMEs), with essential financial knowledge and skills. Through a blend of conceptual instruction, practical exercises, and case study analysis, participants will gain a solid foundation in key financial principles and tools relevant to their managerial roles.\n\nThe program covers fundamental financial literacy through real-world case studies, a comprehensive understanding of how financial processes underpin business operations, in-depth analysis and interpretation of financial statements, skills to actively contribute to enhancing the financial performance of their organization, insight into critical financial performance metrics and their implications, and the ability to participate effectively in financial planning and assess the feasibility of financial initiatives.",
    duration: "4-6 months",
    level: "Beginner to Intermediate",
    image: "/programs/finance for non finance.jpeg",
    color: "from-blue-700 to-blue-900",
    category: "Finance",
    upcoming: true,
    highlights: [
      "Financial literacy for non-financial managers",
      "Financial statement analysis",
      "Performance metrics understanding",
      "Financial planning participation",
      "Business case evaluation",
    ],
    curriculum: [
      "Financial Fundamentals",
      "Reading Financial Statements",
      "Budgeting and Forecasting",
      "Cost Management",
      "Financial Analysis",
      "Investment Decisions",
      "Risk Management",
      "Financial Communication",
    ],
    prerequisites: ["Management role", "Basic business understanding"],
    certification: "Finance for Managers Diploma",
    rating: 4.7,
    students: 1650,
  },
  "digital-transformation-finance": {
    id: "digital-transformation-finance",
    title: "Digital Transformation in Financial Services",
    fullDescription:
      "This diploma provides an in-depth exploration of the intersection between business strategy and technological innovation within the financial services sector. The program focuses on the selection and seamless implementation of Information Systems (IS) and Enterprise Resource Planning (ERP) solutions, alongside the development of performance monitoring frameworks to support informed decision-making and corrective action.\n\nKey areas of study include strategic planning and implementation tailored to both large corporations and start-ups, comprehensive analysis of emerging technologies transforming the financial services industry, criteria and best practices for selecting appropriate IS and ERP systems, and designing and utilizing key performance reports to effectively monitor and enhance organizational performance.",
    duration: "6-8 months",
    level: "Advanced",
    image: "/programs/digital transformation.jpeg",
    color: "from-blue-700 to-blue-900",
    category: "Technology",
    upcoming: true,
    highlights: [
      "Digital strategy in financial services",
      "IS and ERP implementation",
      "Performance monitoring frameworks",
      "Emerging technology analysis",
      "Strategic planning expertise",
    ],
    curriculum: [
      "Digital Transformation Strategy",
      "Financial Technology Trends",
      "Systems Implementation",
      "Performance Management",
      "Change Management",
      "Risk and Compliance",
      "Customer Experience",
      "Innovation Management",
    ],
    prerequisites: [
      "Financial services experience",
      "Technology background helpful",
    ],
    certification: "Digital Finance Transformation Diploma",
    rating: 4.8,
    students: 750,
  },
  "sustainable-hospitality": {
    id: "sustainable-hospitality",
    title: "Sustainable Hospitality Diploma",
    fullDescription:
      "This diploma is designed to equip hospitality professionals with the knowledge and skills necessary to lead sustainable operations and transform their organizations into purpose-driven enterprises. The program emphasizes creating sustainable destinations, enhancing investor engagement, and integrating sustainability across all facets of hospitality management.\n\nKey areas of focus include sustainable practices in food and beverage, housekeeping, procurement, policy development, data monitoring and measurement, building operations, health and wellness, eco-friendly sales and marketing, and stakeholder engagement strategies. Participants will gain a comprehensive understanding of how the hospitality industry contributes to the United Nations Sustainable Development Goals (SDGs) and learn pathways to achieve eco-certifications that reinforce sustainability commitments.\n\nThe program uses a hybrid training format with 40 hours of interactive learning sessions, real-world case studies, and insights from industry guest speakers.",
    duration: "5-6 months",
    level: "All Levels",
    image: "/programs/sustainablity.jpeg",
    color: "from-blue-400 to-blue-600",
    category: "Hospitality",
    upcoming: true,
    highlights: [
      "Comprehensive sustainability integration",
      "UN SDGs alignment",
      "Eco-certification pathways",
      "Stakeholder engagement strategies",
      "Industry best practices",
    ],
    curriculum: [
      "Sustainability in Hospitality",
      "Sustainable Building Practices",
      "Food & Beverage Sustainability",
      "Internal Operations",
      "Marketing and Sales",
      "Performance Monitoring",
      "Certification Processes",
      "Industry Case Studies",
    ],
    prerequisites: ["Hospitality industry experience preferred"],
    certification: "Sustainable Hospitality Management Diploma",
    rating: 4.9,
    students: 890,
  },
  psychometrics: {
    id: "psychometrics",
    title: "Psychometrics Diploma",
    fullDescription:
      "The Psychometrics Diploma is a specialized training program that aims to qualify participants to use psychometric tools professionally, according to internationally recognized standards in psychological diagnosis. This diploma has been carefully designed to combine in-depth theory with intensive practical application, ensuring trainees are able to interpret results and prepare psychological reports with high accuracy and professionalism.\n\nThe program covers a group of the most popular psychological scales used to assess mental abilities, psychological disorders, and behavioral aspects, with a focus on practical training on how to apply these tools in real-world situations.\n\nThe diploma is suitable for psychologists, students and graduates of psychology and education colleges, and anyone seeking to develop their skills in the field of psychological measurement and diagnosis. At the end of the program, participants receive an accredited certificate demonstrating their proficiency in using psychometric tools, opening up broad career prospects in the fields of mental health, education, and behavioral support.",
    highlights: [
      "Professional use of psychometric tools",
      "Interpretation of psychological test results",
      "Preparation of accurate psychological reports",
      "Assessment of mental abilities and disorders",
      "Practical application in real-world situations",
    ],
    curriculum: [
      "Introduction to Psychometrics",
      "Psychological Testing Standards",
      "Mental Abilities Assessment Tools",
      "Personality Assessment Scales",
      "Behavioral and Emotional Assessment",
      "Report Writing and Interpretation",
      "Ethical Considerations in Psychological Testing",
      "Practical Applications and Case Studies",
    ],
    prerequisites: [
      "Background in psychology or education helpful but not required",
      "Interest in psychological assessment and measurement",
    ],
    certification: "Professional Psychometrics Diploma",
    image: "/programs/Psychological measures.jpeg",
    level: "Intermediate",
    duration: "4-6 months",
    category: "Special Education",
    color: "from-blue-400 to-blue-600",
    rating: 4.7,
    students: 850,
  },
  "behavior-modification": {
    id: "behavior-modification",
    title: "Behavior Modification Diploma",
    fullDescription:
      "The Behavior Modification Diploma is a specialized professional training program that aims to enable participants to understand and analyze patterns of human behavior and apply the latest behavior modification strategies using effective scientific and practical methods.\n\nThis diploma is designed to provide trainees with the skills necessary to deal with undesirable behaviors in children, adolescents, and individuals with special needs, using well-studied methods and techniques based on the principles of behavioral psychology.\n\nThe diploma is suitable for psychologists, special education specialists, teachers, parents, and anyone interested in developing their skills in effectively managing human behavior. At the end of the program, the trainee will receive an accredited certificate that qualifies them for practical application in the field of behavior modification, and work in schools, psychological centers, and care institutions.",
    highlights: [
      "Understanding human behavior patterns",
      "Applied behavior analysis techniques",
      "Designing individual treatment plans",
      "Strategies of reinforcement and modeling",
      "Managing challenging behaviors",
    ],
    curriculum: [
      "Principles and Methods of Behavior Modification",
      "Applied Behavior Analysis (ABA)",
      "Designing Individual Treatment Plans",
      "Reinforcement and Punishment Strategies",
      "Dealing with Aggressive Behaviors",
      "Managing Attention-Deficit/Hyperactivity Disorder",
      "Working with Special Needs Cases",
      "Behavior Modification in Educational Settings",
    ],
    prerequisites: [
      "Interest in behavioral psychology",
      "Basic understanding of human development",
    ],
    certification: "Professional Behavior Modification Diploma",
    image: "/programs/motivational.jpeg",
    level: "All Levels",
    duration: "3-5 months",
    category: "Special Education",
    color: "from-blue-400 to-blue-600",
    rating: 4.6,
    students: 920,
  },
  "learning-difficulties": {
    id: "learning-difficulties",
    title: "Learning Difficulties Diploma",
    fullDescription:
      "The Learning Difficulties Diploma is an integrated training program designed to qualify trainees to understand, diagnose, and treat learning difficulties in children and adolescents, using scientific methods and approved practical tools.\n\nThe program aims to enable participants to differentiate between developmental and academic learning difficulties and design therapeutic educational programs that help improve students' educational and behavioral performance.\n\nThe diploma is intended for psychologists and educational specialists, teachers, special education specialists, and parents interested in supporting their children academically and behaviorally. At the end of the diploma, the trainee will receive an accredited certificate that qualifies them to work efficiently in schools, educational centers, and psychological and educational support centers.",
    highlights: [
      "Diagnosing learning difficulties",
      "Designing individual treatment plans",
      "Educational intervention strategies",
      "Addressing reading and writing difficulties",
      "Supporting students with learning challenges",
    ],
    curriculum: [
      "Basic Concepts of Learning Difficulties",
      "Diagnostic and Assessment Skills",
      "Individual Treatment Plan Design",
      "Educational Intervention Strategies",
      "Reading and Writing Difficulties",
      "Mathematical Learning Challenges",
      "Attention and Concentration Disorders",
      "Classroom Accommodations and Support",
    ],
    prerequisites: [
      "Interest in education and learning support",
      "Basic understanding of child development",
    ],
    certification: "Professional Learning Difficulties Diploma",
    image: "/programs/Learning difficulties.jpeg",
    level: "Intermediate",
    duration: "4-6 months",
    category: "Special Education",
    color: "from-blue-500 to-blue-700",
    rating: 4.8,
    students: 1050,
  },
  montessori: {
    id: "montessori",
    title: "Montessori Diploma",
    fullDescription:
      "The Montessori Diploma is a specialized training program aimed at preparing qualified educational personnel to implement the Montessori methodology in early childhood education, in accordance with the philosophy established by Dr. Maria Montessori, which is based on respecting the child's individuality and developing their personal abilities through a stimulating and carefully calibrated educational environment.\n\nThe program focuses on understanding the stages of mental, sensory, and motor development of children and how to use Montessori educational tools to develop their skills in various areas, such as language, mathematics, practical life, and science, in a manner that takes into account individual differences and promotes independence and self-confidence.\n\nThe diploma is intended for teachers, educational specialists, mothers, educators, and anyone interested in early childhood education and development. At the end of the program, the trainee will receive an accredited certificate that qualifies them to work in Montessori nurseries and schools, or to implement the curriculum.",
    highlights: [
      "Montessori educational philosophy",
      "Child-centered learning approaches",
      "Designing Montessori learning environments",
      "Sensory, linguistic, and mathematical education",
      "Supporting child independence and development",
    ],
    curriculum: [
      "Montessori Educational Philosophy",
      "Child Development Stages",
      "Designing the Montessori Classroom",
      "Practical Life Activities",
      "Sensorial Education Materials",
      "Language Development Approaches",
      "Mathematical Concepts in Montessori",
      "Observation and Assessment Skills",
    ],
    prerequisites: [
      "Interest in early childhood education",
      "Passion for child-centered learning approaches",
    ],
    certification: "Professional Montessori Education Diploma",
    image: "/programs/Montessori.jpeg",
    level: "All Levels",
    duration: "3-6 months",
    category: "Special Education",
    color: "from-blue-400 to-blue-600",
    rating: 4.9,
    students: 780,
  },
  "family-counseling": {
    id: "family-counseling",
    title: "Family Educational Psychological Counseling",
    fullDescription:
      "The Diploma in Family Educational Psychological Counseling is an integrated training program that aims to qualify trainees to work in the field of psychological counseling from a comprehensive perspective, integrating psychological, educational, and family aspects.\n\nThe program focuses on providing participants with the theoretical knowledge and practical skills necessary to understand the behavior of individuals within family and educational contexts, and to provide psychological and counseling support in a scientific and effective manner.\n\nThe diploma is intended for psychologists, teachers, those interested in education and mental health, and parents seeking a deeper understanding of the psychological and educational needs of families. At the end of the program, the trainee will receive an accredited certificate that qualifies them to work in the fields of psychological, educational, and family counseling, within educational institutions, psychological centers, and social organizations.",
    highlights: [
      "Comprehensive counseling approaches",
      "Understanding family dynamics",
      "Educational support strategies",
      "Psychological intervention techniques",
      "Supporting children and adolescents",
    ],
    curriculum: [
      "Foundations of Psychological Counseling",
      "Family Dynamics and Relationships",
      "Educational Counseling Approaches",
      "Interview and Communication Skills",
      "Behavior Modification Techniques",
      "Child and Adolescent Psychology",
      "Crisis Intervention Strategies",
      "Ethical Considerations in Counseling",
    ],
    prerequisites: [
      "Interest in psychology and family support",
      "Basic understanding of human development",
    ],
    certification:
      "Professional Family Educational Psychological Counseling Diploma",
    image: "/programs/Family educational psychological counseling.jpeg",
    level: "Intermediate",
    duration: "4-6 months",
    category: "Special Education",
    color: "from-blue-500 to-blue-700",
    rating: 4.7,
    students: 620,
  },
  "occupational-safety": {
    id: "occupational-safety",
    title: "Occupational Safety and Crisis Management",
    fullDescription:
      "The Occupational Safety and Security and Crisis Management Training Program aims to prepare personnel capable of applying the highest safety standards in various work environments, efficiently handling incidents and emergencies, and mitigating potential risks to ensure the protection of lives and property and operational continuity.\n\nThe program focuses on building an effective security and safety system within organizations by training participants on prevention, response, and emergency planning procedures, as well as providing them with crisis and disaster management skills in accordance with international standards.\n\nThe program is designed for occupational safety officers in facilities, employees in the industrial, service, and educational sectors, and security supervisors, engineering departments, and emergency departments. Participants will gain the knowledge and skills necessary to create safer work environments and respond effectively to emergencies.",
    highlights: [
      "Occupational safety standards implementation",
      "Risk assessment and management",
      "Emergency response planning",
      "Crisis management strategies",
      "Safety system development",
    ],
    curriculum: [
      "Occupational Safety Concepts",
      "Risk Assessment and Control",
      "Evacuation Plans and Procedures",
      "Fire Safety and Hazardous Materials",
      "First Aid and Incident Management",
      "ISO 45001 Safety Management Systems",
      "Crisis and Disaster Management",
      "Emergency Communication Strategies",
    ],
    prerequisites: [
      "Interest in safety and security",
      "Basic understanding of organizational operations",
    ],
    certification:
      "Professional Occupational Safety and Crisis Management Diploma",
    image:
      "/programs/Training Program in Occupational Safety and Security and Crisis Management.jpeg",
    level: "All Levels",
    duration: "3-4 months",
    category: "Special Education",
    color: "from-blue-400 to-blue-600",
    rating: 4.6,
    students: 890,
  },
};

// Add more course data here for other courses...

export default function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const course = coursesData[resolvedParams.slug];
  const { direction } = useLanguage();

  const handleEnrollment = (courseTitle: string) => {
    const phoneNumber = "+201275444617";
    // Note: WhatsApp message can be internationalized using a translation library
    // For now, keeping English as it's a direct communication
    const message = `Hello, I'm interested in enrolling in the ${courseTitle} course. Could you please provide more information?`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      "+",
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            <Message id="course.notFound" fallback="Course Not Found" />
          </h1>
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            <Message id="course.returnHome" fallback="Return to Home" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className={`bg-gradient-to-br ${course.color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8"
          >
            <ArrowLeft
              className={`w-5 h-5 ${direction === "rtl" ? "ml-2" : "mr-2"}`}
            />
            <Message id="course.backToCourses" fallback="Back to Courses" />
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {course.category}
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {course.level}
                </span>
                {course.upcoming && (
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    <Message
                      id="course.upcomingSoon"
                      fallback="Upcoming Soon"
                    />
                  </span>
                )}
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <Message
                  id={`programs.${course.id}.title`}
                  fallback={course.title}
                />
              </h1>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>
                    <Message
                      id={`programs.${course.id}.duration`}
                      fallback={course.duration}
                    />
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>
                    {course.students.toLocaleString()}{" "}
                    <Message id="course.students" fallback="students" />
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span>{course.rating}/5</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>
                    <Message id="programs.certified" fallback="Certified" />
                  </span>
                </div>
              </div>

              {course.upcoming ? (
                <button
                  className="bg-white/60 text-gray-900 px-8 py-4 rounded-xl font-semibold cursor-not-allowed opacity-60 inline-flex items-center space-x-2"
                  disabled
                >
                  <span>
                    <Message
                      id="course.upcomingSoon"
                      fallback="Upcoming Soon"
                    />
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => handleEnrollment(course.title)}
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                >
                  <span>
                    <Message id="course.enrollNow" fallback="Enroll Now" />
                  </span>
                  <ArrowLeft
                    className={`w-5 h-5 ${
                      direction === "rtl" ? "rotate-0" : "rotate-180"
                    }`}
                  />
                </button>
              )}
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center`;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-black mb-6">
                <Message id="course.overview" fallback="Course Overview" />
              </h2>
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-800 leading-relaxed">
                  <Message
                    id={`programs.${course.id}.fullDesc`}
                    fallback={course.fullDescription}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                <Message
                  id="course.whatYouLearn"
                  fallback="What You'll Learn"
                />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`flex items-start ${
                      direction === "rtl" ? "space-x-reverse" : ""
                    } space-x-3`}
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium">
                      <Message
                        id={`programs.${course.id}.highlight.${index}`}
                        fallback={highlight}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                <Message id="course.curriculum" fallback="Curriculum" />
              </h2>
              <div className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      direction === "rtl" ? "space-x-reverse" : ""
                    } space-x-4 p-4 bg-blue-50 rounded-lg`}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 font-semibold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-gray-800 font-medium">
                      <Message
                        id={`programs.${course.id}.curriculum.${index}`}
                        fallback={module}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <Message
                  id="course.information"
                  fallback="Course Information"
                />
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">
                    <Message id="course.duration" fallback="Duration" />
                  </span>
                  <span className="font-semibold text-gray-900">
                    <Message
                      id={`programs.${course.id}.duration`}
                      fallback={course.duration}
                    />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">
                    <Message id="course.level" fallback="Level" />
                  </span>
                  <span className="font-semibold text-gray-900">
                    <Message
                      id={`programs.${course.id}.level`}
                      fallback={course.level}
                    />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">
                    <Message id="course.students" fallback="Students" />
                  </span>
                  <span className="font-semibold text-gray-900">
                    {course.students.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">
                    <Message id="course.rating" fallback="Rating" />
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-blue-500 fill-current" />
                    <span className="font-semibold text-gray-900">
                      {course.rating}/5
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <Message id="course.certification" fallback="Certification" />
              </h3>
              <div
                className={`flex items-center ${
                  direction === "rtl" ? "space-x-reverse" : ""
                } space-x-3 mb-4`}
              >
                <Award className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-gray-900">
                  <Message
                    id={`programs.${course.id}.certificationName`}
                    fallback={course.certification}
                  />
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                <Message
                  id="course.certificationDesc"
                  fallback="Upon successful completion, you'll receive an industry-recognized certificate that validates your expertise."
                />
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <Message id="course.readyToStart" fallback="Ready to Start?" />
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <Message
                  id="course.joinProfessionals"
                  fallback="Join thousands of professionals who have advanced their careers with our programs."
                />
              </p>
              {course.upcoming ? (
                <button
                  className={`w-full bg-gradient-to-r ${course.color} text-white py-3 rounded-xl font-semibold opacity-60 cursor-not-allowed`}
                  disabled
                >
                  <Message id="course.upcomingSoon" fallback="Upcoming Soon" />
                </button>
              ) : (
                <button
                  onClick={() => handleEnrollment(course.title)}
                  className={`w-full bg-gradient-to-r ${course.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  <Message id="course.enrollNow" fallback="Enroll Now" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
