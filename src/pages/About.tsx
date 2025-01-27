import React from "react";
import { Link } from "react-router-dom";
import { Shield, PenTool as Tool, Users, Clock } from "lucide-react";

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="font-heading text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ServiceHighlight({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="text-primary-600 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              About Spectrum Infotech
            </h1>
            <p className="text-xl text-primary-100">
              Your trusted partner for expert technology solutions since 2000
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://gcdnb.pbrd.co/images/FiYbeGMytiKE.png?o=1"
                  alt="Mr. Shailesh Mehta"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white py-4 px-8 rounded-lg">
                  <p className="font-heading font-semibold">Founded in 2000</p>
                </div>
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">
                  Meet Our Founder
                </h2>
                <h3 className="text-2xl font-heading text-primary-600 mb-4">
                  Mr. Shailesh Mehta
                </h3>
                <p className="text-gray-600 mb-6">
                  A visionary entrepreneur with a passion for technology, Mr.
                  Shailesh Mehta has built Spectrum Infotech & Securities on the
                  pillars of innovation, trust, and excellence. His leadership
                  has transformed the company into a trusted name in electronics
                  repairs and security systems.
                </p>
                <p className="text-gray-600 mb-6">
                  With over 25 years of experience in the technology sector, Mr.
                  Mehta's commitment to staying at the forefront of
                  technological trends ensures that Spectrum Infotech remains a
                  leader in providing cutting-edge solutions that are reliable,
                  fast, and customer-focused.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">
                      25+
                    </div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">
                      2000+
                    </div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to becoming a leading technology
                solutions provider in Pune
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <ValueCard
                icon={<Shield className="w-12 h-12" />}
                title="Trust"
                description="Building lasting relationships through reliable service and transparent communication"
              />
              <ValueCard
                icon={<Tool className="w-12 h-12" />}
                title="Excellence"
                description="Delivering superior quality in every repair and installation we undertake"
              />
              <ValueCard
                icon={<Users className="w-12 h-12" />}
                title="Customer Focus"
                description="Putting our customers first with personalized solutions and support"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <ServiceHighlight
                  icon={<Tool className="w-8 h-8" />}
                  title="Comprehensive Repairs"
                  description="Expert repair services for computers, laptops, tablets, and mobile devices with quick turnaround times"
                />
                <ServiceHighlight
                  icon={<Shield className="w-8 h-8" />}
                  title="Security Solutions"
                  description="Professional installation and maintenance of advanced security camera systems for homes and businesses"
                />
                <ServiceHighlight
                  icon={<Clock className="w-8 h-8" />}
                  title="Fast Service"
                  description="Quick response times and efficient service delivery to minimize downtime"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="Our team at work"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl mb-12">
              To empower individuals and businesses with cutting-edge technology
              solutions while providing unmatched security services to protect
              what matters most. We strive for excellence in everything we do,
              ensuring customer satisfaction through innovation, reliability,
              and exceptional service.
            </p>
            <Link
              to="/contact"
              className="btn-gradient text-white font-semibold px-8 py-4 rounded-lg text-lg inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
