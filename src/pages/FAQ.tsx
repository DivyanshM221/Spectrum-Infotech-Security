import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordion({ question, answer, isOpen, onClick }: FAQItem & { isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="font-heading text-lg font-semibold text-gray-800">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-primary-600" />
        ) : (
          <ChevronDown className="w-6 h-6 text-primary-600" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number>(0);

  const faqItems: FAQItem[] = [
    {
      question: "What types of devices do you repair?",
      answer: "We repair a wide range of devices including computers, laptops, tablets, etc. Our expert technicians are trained to handle various brands and models."
    },
    {
      question: "How long does a typical repair take?",
      answer: "Repair times vary depending on the issue and device type. Simple repairs can be completed within a few hours, while more complex repairs might take 1-2 business days. We'll provide you with an estimated timeline during the initial assessment."
    },
    {
      question: "Do you offer warranty on repairs?",
      answer: "Yes, we provide a warranty on all our repairs. The warranty period varies depending on the type of repair, and we'll clearly communicate the terms before proceeding with any service."
    },
    {
      question: "What security camera systems do you offer?",
      answer: "We offer a range of security camera systems suitable for both homes and businesses. This includes HD cameras, wireless systems, and advanced surveillance solutions with remote monitoring capabilities."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we provide professional installation services for all our security systems. Our trained technicians ensure proper setup and configuration, and will also train you on how to use the system effectively."
    },
    {
      question: "What are your business hours?",
      answer: "We are open Monday through Saturday, from 10:00 AM to 8:00 PM. We're closed on Sundays and major holidays."
    }
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services and solutions
            </p>
          </div>

          <div className="space-y-2">
            {faqItems.map((item, index) => (
              <FAQAccordion
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We're here to help!
            </p>
            <Link
              to="/contact"
              className="btn-gradient text-white font-semibold px-8 py-3 rounded-lg inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}