"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

const LegalDisclaimerBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Set a timer to automatically hide the banner after 60 seconds (1 minute)
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 10000)

    // Clean up the timer when component unmounts
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-gray-800 text-white p-4 md:p-5 shadow-lg">
        <div className="container-custom">
          <div className="flex items-start justify-between">
            <div className="pr-8 text-sm">
              <p className="mb-2">
                <strong>Legal Disclaimer:</strong> The products and information found on www.MedzionPharma.com are not
                intended to replace professional medical advice or treatment, you should not use this information as
                self-diagnosis or for treating a health problem or disease.
              </p>
              <p className="mb-2">
                Contact your health-care provider immediately if you suspect that you have a medical problem.
                Information and statements regarding dietary supplements have not been evaluated by the National Agency
                for Food, Drug Administration and Control (NAFDAC) and are not intended to diagnose, treat, cure, or
                prevent any disease or health condition.
              </p>
              <p>Bonamour Nigeria assumes no liability for inaccuracies or misstatements about products.</p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Dismiss"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LegalDisclaimerBanner
