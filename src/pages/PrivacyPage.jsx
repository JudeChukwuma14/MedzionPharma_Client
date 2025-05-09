import { Link } from "react-router-dom"
import { ChevronRight, Shield } from "lucide-react"

const PrivacyPage = () => {
  return (
    <div className="py-8 container-custom md:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-[#2196F3]">
          Home
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-700">Privacy Policy</span>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md md:p-8">
        <div className="flex items-center mb-6">
          <Shield className="text-[#2196F3] mr-3" size={32} />
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">Privacy Policy</h1>
        </div>
        <p className="mb-6 text-gray-600">Last Updated: May 15, 2023</p>

        <div className="prose text-gray-600 max-w-none">
          <p>
            At MedzionPharma, we are committed to protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
            you visit our website or use our services.
          </p>
          <p className="mt-3">
            Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that you have
            read, understood, and agree to be bound by all the terms of this Privacy Policy.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">1. Information We Collect</h2>
          <p>We may collect several types of information from and about users of our website, including:</p>
          <h3 className="mt-4 mb-2 text-lg font-medium text-gray-800">1.1 Personal Information</h3>
          <ul className="pl-6 space-y-2 list-disc">
            <li>
              <strong>Contact Information:</strong> Name, email address, postal address, phone number.
            </li>
            <li>
              <strong>Account Information:</strong> Username, password, account preferences.
            </li>
            <li>
              <strong>Payment Information:</strong> Credit card details, billing address, transaction history.
            </li>
            <li>
              <strong>Health Information:</strong> Prescription details, medication history, health conditions (when you
              provide them).
            </li>
            <li>
              <strong>Demographic Information:</strong> Age, gender, location.
            </li>
          </ul>

          <h3 className="mt-4 mb-2 text-lg font-medium text-gray-800">1.2 Non-Personal Information</h3>
          <ul className="pl-6 space-y-2 list-disc">
            <li>
              <strong>Usage Data:</strong> Browser type, IP address, device information, operating system, time and date
              of visits, pages viewed, links clicked, and browsing patterns.
            </li>
            <li>
              <strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to
              track activity on our website and hold certain information.
            </li>
          </ul>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">2. How We Collect Information</h2>
          <p>We collect information through various methods, including:</p>
          <ul className="pl-6 space-y-2 list-disc">
            <li>Direct interactions when you create an account, place an order, or contact us.</li>
            <li>Automated technologies or interactions through cookies and similar tracking technologies.</li>
            <li>Third parties or publicly available sources, such as payment processors or analytics providers.</li>
          </ul>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">3. How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul className="pl-6 space-y-2 list-disc">
            <li>Process and fulfill your orders, including delivery and payment processing.</li>
            <li>Create and manage your account, including verifying your identity.</li>
            <li>Verify and process prescription medications in compliance with regulatory requirements.</li>
            <li>Provide customer support and respond to your inquiries.</li>
            <li>Send you transactional emails, such as order confirmations and delivery updates.</li>
            <li>
              Send you marketing communications about our products, services, and promotions (with your consent where
              required by law).
            </li>
            <li>Improve our website, products, and services.</li>
            <li>Detect, prevent, and address technical issues, fraud, or illegal activity.</li>
            <li>Comply with legal obligations and enforce our terms and policies.</li>
          </ul>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">4. Disclosure of Your Information</h2>
          <p>We may disclose your personal information to:</p>
          <ul className="pl-6 space-y-2 list-disc">
            <li>
              <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as
              payment processing, delivery services, and IT support.
            </li>
            <li>
              <strong>Healthcare Providers:</strong> To verify prescriptions and ensure appropriate medication
              dispensing.
            </li>
            <li>
              <strong>Business Partners:</strong> Trusted third parties who help us operate our business, such as
              marketing partners or analytics providers.
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law, court order, or governmental regulation.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business.
            </li>
          </ul>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access,
            alteration, disclosure, or destruction. These measures include encryption, secure socket layer technology
            (SSL), regular security assessments, and restricted access to personal information.
          </p>
          <p className="mt-3">
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive
            to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute
            security.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">6. Data Retention</h2>
          <p>
            We will retain your personal information only for as long as necessary to fulfill the purposes for which it
            was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
          <p className="mt-3">
            For prescription medications, we are required by law to retain prescription records for a minimum period as
            specified by Nigerian pharmacy regulations.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">7. Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="pl-6 space-y-2 list-disc">
            <li>The right to access your personal information.</li>
            <li>The right to correct inaccurate or incomplete information.</li>
            <li>The right to request deletion of your personal information.</li>
            <li>The right to restrict or object to processing of your personal information.</li>
            <li>The right to data portability.</li>
            <li>The right to withdraw consent at any time, where we rely on consent to process your information.</li>
          </ul>
          <p className="mt-3">
            To exercise these rights, please contact us using the information provided in the "Contact Us" section
            below.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">8. Children's Privacy</h2>
          <p>
            Our website is not intended for children under 18 years of age. We do not knowingly collect personal
            information from children under 18. If you are a parent or guardian and believe your child has provided us
            with personal information, please contact us, and we will delete such information from our records.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">9. Changes to Our Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
            Policy periodically for any changes.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us
            at:
          </p>
          <p className="mt-2">
            Email: privacy@MedzionPharma.com
            <br />
            Phone: 080-1234-5678
            <br />
            Address: 123 Health Street, Lagos, Nigeria
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage
