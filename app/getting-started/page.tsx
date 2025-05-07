'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  'Account Setup',
  'Profile Info',
  'Travel Preferences',
  'Get Started',
]

export default function GettingStarted() {
  const [step, setStep] = useState(0)

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const prevStep = () => setStep((s) => Math.max(s - 1, 0))

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-white">
      <div className="w-full max-w-md p-6 rounded-xl shadow-md bg-gray-50">
        <h1 className='text-4xl mb-2 font-bold text-sky-900'>Getting Started!</h1>
        <hr className='mb-8 text-gray-400'/>
        {/* Stepper */}
        <div className="flex justify-between mb-6">
          {steps.map((label, index) => (
            <div key={label} className="flex-1 flex flex-col items-center text-xs text-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  index <= step ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-400'
                }`}
              >
                {index + 1}
              </div>
              <span className={`mt-2 ${index <= step ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Step Content with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="space-y-4 min-h-[200px]"
          >
            {step === 0 && (
              <>
                <input type="text" placeholder="Username" className="w-full p-3 border rounded-md" />
                <input type="password" placeholder="Password" className="w-full p-3 border rounded-md" />
                <input type="password" placeholder="Confirm Password" className="w-full p-3 border rounded-md" />
              </>
            )}
            {step === 1 && (
              <>
                <input type="text" placeholder="Alias" className="w-full p-3 border rounded-md" />
                <textarea placeholder="Bio" className="w-full p-3 border rounded-md h-24 resize-none"></textarea>
              </>
            )}
            {step === 2 && (
              <>
                <label className="block"><input type="checkbox" className="mr-2" /> Beaches</label>
                <label className="block"><input type="checkbox" className="mr-2" /> Mountains</label>
                <label className="block"><input type="checkbox" className="mr-2" /> City Life</label>
              </>
            )}
            {step === 3 && (
              <div className="text-center text-green-600">
                🎉 You're all set! Ready to plan your next adventure.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={prevStep}
            disabled={step === 0}
            className="px-4 py-2 text-sm rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={step === steps.length - 1}
            className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {step === steps.length - 2 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </section>
  )
}
