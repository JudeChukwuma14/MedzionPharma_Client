import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

const TermsPage = () => {
  return (
    <div className="py-8 container-custom md:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-[#2196F3]">
          Home
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-700">Terms & Conditions</span>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md md:p-8">
        <h1 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">Terms & Conditions</h1>
        <p className="mb-6 text-gray-600">Last Updated: May 15, 2023</p>

        <div className="prose text-gray-600 max-w-none">
          <p>
            Welcome to MedzionPharma. These Terms and Conditions govern your use of our website and services. By accessing or
            using our website, you agree to be bound by these Terms. If you do not agree with any part of these terms,
            you may not use our website or services.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">1. Definitions</h2>
          <ul className="pl-6 space-y-2 list-disc">
            <li>
              <strong>"MedzionPharma"</strong> refers to our company, including our website, mobile applications, and all
              services provided.
            </li>
            <li>
              <strong>"User"</strong> refers to any individual who accesses or uses our website or services.
            </li>
            <li>
              <strong>"Products"</strong> refers to all items available for purchase on our website.
            </li>
            <li>
              <strong>"Prescription Medications"</strong> refers to pharmaceutical products that require a valid
              prescription from a licensed healthcare provider.
            </li>
          </ul>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">2. Account Registration</h2>
          <p>
            To access certain features of our website, you may need to register for an account. You agree to provide
            accurate, current, and complete information during the registration process and to update such information
            to keep it accurate, current, and complete.
          </p>
          <p className="mt-3">
            You are responsible for safeguarding your account password and for any activities or actions under your
            account. MedzionPharma will not be liable for any loss or damage arising from your failure to comply with this
            security obligation.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">3. Ordering and Purchasing</h2>
          <p>
            When placing an order through our website, you warrant that all information provided is accurate and
            complete. MedzionPharma reserves the right to refuse or cancel any order for any reason, including but not
            limited to product availability, errors in product or pricing information, or identification of fraudulent
            activity.
          </p>
          <p className="mt-3">
            For prescription medications, you must provide a valid prescription from a licensed healthcare provider. We
            reserve the right to verify all prescriptions with the issuing healthcare provider before processing your
            order.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">4. Pricing and Payment</h2>
          <p>
            All prices are listed in Nigerian Naira (NGN) and are subject to change without notice. MedzionPharma strives to
            ensure all pricing information is accurate, but errors may occur. If we discover an error in the price of
            products you have ordered, we will inform you as soon as possible and give you the option of reconfirming
            your order at the correct price or canceling it.
          </p>
          <p className="mt-3">
            Payment must be made in full at the time of ordering. We accept various payment methods as indicated on our
            website. By providing payment information, you represent and warrant that you have the legal right to use
            the payment method provided.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">5. Delivery</h2>
          <p>
            MedzionPharma will make every effort to deliver products within the estimated timeframes provided at checkout.
            However, delivery times are not guaranteed and may vary based on location, product availability, and other
            factors beyond our control.
          </p>
          <p className="mt-3">
            For orders placed before 12pm, same-day delivery is available in Lagos State only. Cash on Delivery option
            is only applicable in Lagos State.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">6. Returns and Refunds</h2>
          <p>
            Our return and refund policy is detailed in our separate Returns Policy document. By using our services, you
            agree to the terms of our Returns Policy.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">7. Intellectual Property</h2>
          <p>
            All content on our website, including but not limited to text, graphics, logos, images, and software, is the
            property of MedzionPharma or its content suppliers and is protected by Nigerian and international copyright laws.
          </p>
          <p className="mt-3">
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
            republish, download, store, or transmit any of the material on our website without our prior written
            consent.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">8. Limitation of Liability</h2>
          <p>
            MedzionPharma shall not be liable for any direct, indirect, incidental, special, consequential, or punitive
            damages resulting from your access to or use of, or inability to access or use, our website or any content
            thereon.
          </p>
          <p className="mt-3">
            The information provided on our website is for general informational purposes only and should not be
            considered as medical advice. Always consult with a qualified healthcare professional regarding any medical
            questions or conditions.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">9. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of
            Nigeria, without regard to its conflict of law provisions.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">10. Changes to Terms</h2>
          <p>
            MedzionPharma reserves the right to modify these Terms at any time. We will provide notice of any material
            changes by updating the "Last Updated" date at the top of this page. Your continued use of our website after
            such modifications will constitute your acknowledgment of the modified Terms and agreement to be bound by
            them.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">11. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p className="mt-2">
            Email: legal@MedzionPharma.com
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

export default TermsPage
