import { Link } from "react-router-dom"
import { Shield, Award, Users, CheckCircle, MapPin, Phone, Mail, ArrowRight } from "lucide-react"

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Dr. Adebayo Johnson",
      role: "Founder & Chief Pharmacist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dr. Johnson has over 15 years of experience in pharmaceutical care and is passionate about making quality healthcare accessible to all Nigerians.",
    },
    {
      name: "Chioma Okonkwo",
      role: "Operations Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Chioma oversees the day-to-day operations of MedzionPharma, ensuring timely delivery and excellent customer service.",
    },
    {
      name: "Michael Osei",
      role: "Head of Digital Health",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael leads our digital health initiatives, focusing on innovative ways to improve healthcare delivery through technology.",
    },
    {
      name: "Dr. Sarah Tanko",
      role: "Clinical Pharmacist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dr. Tanko provides expert clinical advice and ensures all our products meet the highest standards of quality and safety.",
    },
  ]

  // Timeline/milestones data
  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description:
        "MedzionPharma was founded with a mission to make quality healthcare products accessible to all Nigerians.",
    },
    {
      year: "2019",
      title: "Digital Expansion",
      description: "Launched our first e-commerce platform, allowing customers to order medications online.",
    },
    {
      year: "2020",
      title: "COVID-19 Response",
      description:
        "Expanded our delivery services nationwide to ensure essential medications reached those in need during the pandemic.",
    },
    {
      year: "2021",
      title: "Telemedicine Integration",
      description:
        "Introduced virtual consultations with licensed pharmacists to provide professional healthcare advice.",
    },
    {
      year: "2022",
      title: "Mobile App Launch",
      description:
        "Released our mobile application for iOS and Android, making it even easier to order medications on-the-go.",
    },
    {
      year: "2023",
      title: "National Recognition",
      description: "Received the 'Excellence in Healthcare Innovation' award from the Nigerian Healthcare Federation.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#E3F2FD] py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                About <span className="text-[#2196F3]">MedzionPharma</span>
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                We're on a mission to make quality healthcare accessible to every Nigerian through innovative digital
                solutions and reliable pharmaceutical services.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white px-4 py-2 rounded-full text-sm flex items-center shadow-sm">
                  <Shield size={16} className="text-[#4CAF50] mr-1" />
                  <span>PCN Registered</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full text-sm flex items-center shadow-sm">
                  <Award size={16} className="text-[#2196F3] mr-1" />
                  <span>Award Winning Service</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-full text-sm flex items-center shadow-sm">
                  <Users size={16} className="text-[#FF9800] mr-1" />
                  <span>50,000+ Happy Customers</span>
                </div>
              </div>
              <Link to="/contact" className="btn-accent">
                Contact Us
              </Link>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="MedzionPharma Team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600">
              The journey of MedzionPharma began with a simple yet powerful vision: to bridge the gap in healthcare
              accessibility in Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Founded in 2018 by Dr. Adebayo Johnson, MedzionPharma emerged from a personal experience that highlighted the
                challenges many Nigerians face in accessing quality medications. After witnessing his mother struggle to
                find essential medications during a health crisis, Dr. Johnson was determined to create a solution.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small pharmacy in Lagos has evolved into Nigeria's leading online pharmaceutical
                platform, serving thousands of customers nationwide. Our growth has been driven by our unwavering
                commitment to quality, accessibility, and customer care.
              </p>
              <p className="text-gray-600">
                Today, MedzionPharma continues to innovate in the healthcare space, combining technology with pharmaceutical
                expertise to ensure that every Nigerian has access to the medications they need, when they need them.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="MedzionPharma Journey"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600">
              At MedzionPharma, our mission and values guide everything we do, from the products we offer to the way we serve
              our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To improve the health and wellbeing of Nigerians by providing convenient access to quality, affordable
                medications and healthcare products through innovative digital solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Make healthcare accessible to all Nigerians</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Provide only genuine, high-quality medications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Leverage technology to improve healthcare delivery</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h3>
              <ul className="space-y-6">
                <li>
                  <div className="flex items-center mb-2">
                    <div className="bg-[#E3F2FD] p-2 rounded-full mr-3">
                      <Shield size={20} className="text-[#2196F3]" />
                    </div>
                    <h4 className="font-medium text-gray-800">Integrity</h4>
                  </div>
                  <p className="text-gray-600 pl-10">We uphold the highest ethical standards in all our operations.</p>
                </li>
                <li>
                  <div className="flex items-center mb-2">
                    <div className="bg-[#E3F2FD] p-2 rounded-full mr-3">
                      <Users size={20} className="text-[#2196F3]" />
                    </div>
                    <h4 className="font-medium text-gray-800">Customer-Centric</h4>
                  </div>
                  <p className="text-gray-600 pl-10">
                    Our customers' needs and satisfaction are at the heart of everything we do.
                  </p>
                </li>
                <li>
                  <div className="flex items-center mb-2">
                    <div className="bg-[#E3F2FD] p-2 rounded-full mr-3">
                      <Award size={20} className="text-[#2196F3]" />
                    </div>
                    <h4 className="font-medium text-gray-800">Excellence</h4>
                  </div>
                  <p className="text-gray-600 pl-10">
                    We strive for excellence in our products, services, and customer interactions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-gray-600">
              From a small pharmacy to Nigeria's leading online pharmaceutical platform, our journey has been marked by
              continuous growth and innovation.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#E3F2FD]"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#2196F3] flex items-center justify-center z-10">
                    <span className="text-white font-bold">{milestone.year.slice(2)}</span>
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              Our dedicated team of healthcare professionals is committed to providing you with the best pharmaceutical
              care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">{member.name}</h3>
                  <p className="text-[#2196F3] mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Certifications</h2>
            <p className="text-gray-600">
              MedzionPharma is fully licensed and accredited by relevant regulatory bodies in Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <img src="/placeholder.svg?height=100&width=100" alt="PCN Certification" className="h-16 mx-auto mb-4" />
              <h3 className="font-medium text-gray-800">PCN Registered</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <img src="/placeholder.svg?height=100&width=100" alt="NAFDAC Approval" className="h-16 mx-auto mb-4" />
              <h3 className="font-medium text-gray-800">NAFDAC Approved</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <img src="/placeholder.svg?height=100&width=100" alt="ISO Certification" className="h-16 mx-auto mb-4" />
              <h3 className="font-medium text-gray-800">ISO 9001:2015</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <img
                src="/placeholder.svg?height=100&width=100"
                alt="Healthcare Federation"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="font-medium text-gray-800">HFN Member</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-[#E3F2FD]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Get In Touch With Us</h2>
              <p className="text-gray-600 mb-6">
                Have questions about our products or services? Our team is here to help you.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <MapPin size={20} className="text-[#2196F3] mr-3 mt-1" />
                  <span className="text-gray-600">123 Health Street, Lagos, Nigeria</span>
                </li>
                <li className="flex items-start">
                  <Phone size={20} className="text-[#2196F3] mr-3 mt-1" />
                  <span className="text-gray-600">+234 800 123 4567</span>
                </li>
                <li className="flex items-start">
                  <Mail size={20} className="text-[#2196F3] mr-3 mt-1" />
                  <span className="text-gray-600">support@MedzionPharma.com</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-accent flex items-center w-fit">
                Contact Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="MedzionPharma Contact"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
