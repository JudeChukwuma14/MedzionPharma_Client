import { Link } from "react-router-dom"
import { ChevronRight, AlertTriangle } from "lucide-react"

const DisclaimerPage = () => {
  return (
    <div className="py-8 container-custom md:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-[#2196F3]">
          Home
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-700">Disclaimer</span>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md md:p-8">
        <div className="flex items-center mb-6">
          <AlertTriangle className="text-[#FFC107] mr-3" size={32} />
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">Disclaimer</h1>
        </div>
        <p className="mb-6 text-gray-600">Last Updated: May 15, 2023</p>

        <div className="prose text-gray-600 max-w-none">
          <div className="p-4 mb-6 border-l-4 border-yellow-500 bg-yellow-50">
            <p className="font-medium text-yellow-700">
              PLEASE READ THIS DISCLAIMER CAREFULLY BEFORE USING OUR WEBSITE OR SERVICES.
            </p>
          </div>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">1. Medical Disclaimer</h2>
          <p>
            The information provided on MedzionPharma's website, including but not limited to text, graphics, images, and
            other material, is for informational purposes only and is not intended to be a substitute for professional
            medical advice, diagnosis, or treatment.
          </p>
          <p className="mt-3">
            Always seek the advice of a qualified healthcare provider with any questions you may have regarding a
            medical condition or medication. Never disregard professional medical advice or delay in seeking it because
            of something you have read on our website.
          </p>
          <p className="mt-3">
            If you think you may have a medical emergency, call your doctor or emergency services immediately. MedzionPharma
            does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other
            information that may be mentioned on our website.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">2. Product Information Disclaimer</h2>
          <p>
            MedzionPharma makes every effort to ensure that product information is accurate and up-to-date. However, product
            information, including but not limited to product descriptions, ingredients, directions, and warnings, is
            provided by manufacturers and suppliers.
          </p>
          <p className="mt-3">
            MedzionPharma does not warrant that product descriptions or other content on our website is accurate, complete,
            reliable, current, or error-free. If a product offered by MedzionPharma is not as described, your sole remedy is
            to return it in unused condition.
          </p>
          <p className="mt-3">
            Always read labels, warnings, directions, and other information provided with the product before using or
            consuming it. For additional information about a product, please contact the manufacturer.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">3. Pricing and Availability Disclaimer</h2>
          <p>
            All prices displayed on our website are in Nigerian Naira (NGN) and are subject to change without notice.
            MedzionPharma reserves the right to modify or discontinue any product or service without notice.
          </p>
          <p className="mt-3">
            We do not warrant that product descriptions or other content on this site is accurate, complete, reliable,
            current, or error-free. In the event of a pricing error, MedzionPharma reserves the right to cancel any orders
            placed for products listed at the incorrect price.
          </p>
          <p className="mt-3">
            Product availability is not guaranteed and is subject to change without notice. MedzionPharma reserves the right
            to limit quantities of any product purchased by any customer.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">4. Third-Party Links Disclaimer</h2>
          <p>
            Our website may contain links to third-party websites or services that are not owned or controlled by
            MedzionPharma. We have no control over, and assume no responsibility for, the content, privacy policies, or
            practices of any third-party websites or services.
          </p>
          <p className="mt-3">
            You acknowledge and agree that MedzionPharma shall not be responsible or liable, directly or indirectly, for any
            damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such
            content, goods, or services available on or through any such websites or services.
          </p>
          <p className="mt-3">
            We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or
            services that you visit.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, MedzionPharma and its suppliers shall not be liable for any
            direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to,
            damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use of or
            inability to use our services.
          </p>
          <p className="mt-3">
            In no event shall MedzionPharma's total liability to you for all damages, losses, and causes of action exceed the
            amount paid by you, if any, for accessing our website or purchasing products from us.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">6. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless MedzionPharma, its affiliates, licensors, and service
            providers, and its and their respective officers, directors, employees, contractors, agents, licensors,
            suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
            losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
            violation of these Terms or your use of the Website.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">7. Changes to Disclaimer</h2>
          <p>
            MedzionPharma reserves the right to modify this disclaimer at any time. We will notify users of any changes by
            updating the "Last Updated" date at the top of this page. You are advised to review this disclaimer
            periodically for any changes.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">8. Contact Information</h2>
          <p>If you have any questions about this disclaimer, please contact us at:</p>
          <p className="mt-2">
            Email: legal@MedzionPharma.com
            <br />
            Phone: 080-1234-5678
            <br />
            Address: 123 Health Street, Lagos, Nigeria
          </p>

          <div className="p-4 mt-8 border-l-4 border-gray-500 bg-gray-50">
            <p className="font-medium text-gray-700">
              By using MedzionPharma's website and services, you acknowledge that you have read, understood, and agree to be
              bound by this disclaimer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisclaimerPage
