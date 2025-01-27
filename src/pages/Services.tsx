import React from 'react';
import { PenTool as Tool, Shield, Monitor, Laptop, Tablet, Camera, Wrench, Clock, CheckCircle } from 'lucide-react';

function ServiceHero() {
  return (
    <div className="bg-primary-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6">Our Services</h1>
        <p className="text-xl text-center text-primary-100 max-w-3xl mx-auto">
          Professional tech repair, security solutions, and device sales backed by years of expertise
        </p>
      </div>
    </div>
  );
}

function ServiceCard({ 
  icon, 
  title, 
  description, 
  features 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  features: string[];
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="text-primary-600 mb-4">{icon}</div>
        <h3 className="font-heading text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-accent-green mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
        {number}
      </div>
      <div>
        <h4 className="font-heading text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: <Tool className="w-12 h-12" />,
      title: "Device Repairs",
      description: "Expert repair services for all your electronic devices with quick turnaround times.",
      features: [
        "Computer & laptop repairs",
        "Tablet & iPad servicing",
        "Hardware upgrades",
        "Software troubleshooting",
        "Data recovery services"
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security Solutions",
      description: "Comprehensive security camera systems for homes and businesses.",
      features: [
        "CCTV installation",
        "24/7 monitoring systems",
        "Remote access setup",
        "Security system maintenance",
        "Custom security solutions"
      ]
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Electronics Sales",
      description: "Quality new and refurbished devices at competitive prices.",
      features: [
        "New & refurbished laptops",
        "Desktop computers",
        "Tablets & iPads",
        "Security cameras",
        "Warranty on all products"
      ]
    }
  ];

  return (
    <div>
      <ServiceHero />
      
      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <ProcessStep
              number={1}
              title="Initial Assessment"
              description="We diagnose your device or evaluate your security needs through a thorough consultation."
            />
            <ProcessStep
              number={2}
              title="Custom Solution"
              description="Our experts develop a tailored solution based on your specific requirements and budget."
            />
            <ProcessStep
              number={3}
              title="Implementation"
              description="We carry out the repairs or installation with precision and attention to detail."
            />
            <ProcessStep
              number={4}
              title="Quality Check"
              description="Every service undergoes rigorous testing to ensure everything works perfectly."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you find the perfect solution for your needs.
          </p>
          <button className="bg-accent-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}
