import { Link } from "react-router-dom"
import { ChevronRight, RefreshCw } from "lucide-react"

const ReturnsPage = () => {
  return (
    <div className="py-8 container-custom md:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-[#2196F3]">
          Home
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-700">Returns Policy</span>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md md:p-8">
        <div className="flex items-center mb-6">
          <RefreshCw className="text-[#2196F3] mr-3" size={32} />
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">Returns Policy</h1>
        </div>
        <p className="mb-6 text-gray-600">Last Updated: May 15, 2023</p>

        <div className="prose text-gray-600 max-w-none">
          <p>
            At MedzionPharma, we strive to ensure your complete satisfaction with every purchase. We understand that
            sometimes you may need to return a product, and we've designed our returns policy to be fair and
            straightforward.
          </p>

          <div className="p-4 my-6 border-l-4 border-blue-500 bg-blue-50">
            <p className="font-medium text-blue-700">
              Please note that due to health and safety regulations, certain products cannot be returned once they have
              been opened or used. Please read this policy carefully before making a purchase.
            </p>
          </div>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">1. Return Eligibility</h2>
          <p>You may return products purchased from MedzionPharma under the following conditions:</p>
          <ul className="pl-6 space-y-2 list-disc">
            <li>The return request is made within 7 days of delivery.</li>
            <li>The product is in its original, unopened packaging.</li>
            <li>The product is not damaged, used, or tampered with.</li>
            <li>You have the original receipt or proof of purchase.</li>
          </ul>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">2. Non-Returnable Items</h2>
          <p>The following items cannot be returned:</p>
          <ul className="pl-6 space-y-2 list-disc">
            <li>Prescription medications, unless there is a dispensing error or quality issue.</li>
            <li>Personal care items that have been opened or used.</li>
            <li>Sealed products that have been opened (e.g., cosmetics, topical creams, eye drops).</li>
            <li>Products with broken seals or damaged packaging.</li>
            <li>Perishable items.</li>
            <li>Intimate products for hygiene reasons.</li>
            <li>Gift cards or digital products.</li>
          </ul>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">3. Return Process</h2>
          <p>To initiate a return, please follow these steps:</p>
          <ol className="pl-6 space-y-2 list-decimal">
            <li>
              Contact our Customer Service team within 7 days of receiving your order by calling 080-1234-5678 or
              emailing returns@MedzionPharma.com.
            </li>
            <li>Provide your order number, the item(s) you wish to return, and the reason for the return.</li>
            <li>
              Our Customer Service team will guide you through the return process and provide you with a Return
              Authorization Number (RAN).
            </li>
            <li>
              Package the item(s) securely in their original packaging, including all accessories, manuals, and free
              gifts that came with the product.
            </li>
            <li>Include your RAN and a copy of your invoice in the package.</li>
            <li>
              Ship the package to the address provided by our Customer Service team, or schedule a pickup if available
              in your area.
            </li>
          </ol>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">4. Return Shipping</h2>
          <p>
            If the return is due to a MedzionPharma error (wrong item shipped, defective product, etc.), we will cover the
            return shipping costs. In all other cases, the customer is responsible for return shipping costs.
          </p>
          <p className="mt-3">
            For customers in Lagos State, we offer a pickup service for returns at a nominal fee. Please contact our
            Customer Service team to arrange a pickup.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">5. Refunds</h2>
          <p>Once we receive and inspect your return, we will process your refund as follows:</p>
          <ul className="pl-6 space-y-2 list-disc">
            <li>
              <strong>Original Payment Method:</strong> Refunds will be issued to the original payment method used for
              the purchase.
            </li>
            <li>
              <strong>Processing Time:</strong> Refunds typically take 3-5 business days to process after we receive and
              inspect the returned item.
            </li>
            <li>
              <strong>Bank Processing:</strong> After we process your refund, your bank may take an additional 5-10
              business days to post the refund to your account.
            </li>
            <li>
              <strong>Cash on Delivery Orders:</strong> Refunds for Cash on Delivery orders will be processed via bank
              transfer. You will need to provide your bank account details.
            </li>
          </ul>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">6. Exchanges</h2>
          <p>
            If you wish to exchange a product for a different item, please follow the return process and place a new
            order for the desired item. This ensures faster processing of your exchange.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">7. Damaged or Defective Items</h2>
          <p>
            If you receive a damaged or defective item, please contact our Customer Service team within 24 hours of
            delivery. Please provide photos of the damaged product and packaging to expedite the process.
          </p>
          <p className="mt-3">
            For defective products, we may require additional information or documentation to process your return or
            replacement.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">8. Prescription Medication Returns</h2>
          <p>
            Due to regulatory requirements and for safety reasons, prescription medications can only be returned if:
          </p>
          <ul className="pl-6 space-y-2 list-disc">
            <li>There was a dispensing error (wrong medication or dosage).</li>
            <li>The medication is defective or damaged upon receipt.</li>
            <li>The medication was recalled by the manufacturer or regulatory authorities.</li>
          </ul>
          <p className="mt-3">
            In such cases, please contact our pharmacist immediately at 080-1234-5678 for guidance.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-800">9. Contact Information</h2>
          <p>If you have any questions about our Returns Policy, please contact our Customer Service team:</p>
          <p className="mt-2">
            Email: returns@MedzionPharma.com
            <br />
            Phone: 080-1234-5678
            <br />
            Hours: Monday to Saturday, 8:00 AM to 8:00 PM
          </p>

          <div className="p-4 my-6 border-l-4 border-yellow-500 bg-yellow-50">
            <p className="font-medium text-yellow-700">
              MedzionPharma reserves the right to modify this Returns Policy at any time. Any changes will be effective
              immediately upon posting the updated policy on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReturnsPage
