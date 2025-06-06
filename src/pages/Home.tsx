import React from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  Shield,
  PenTool as Tool,
  ShieldCheck,
  ThumbsUp,
  Star,
} from "lucide-react";

function HeroSection() {
  return (
    <div className="relative min-h-[90vh] bg-primary-900 text-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800 opacity-90"></div>
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2000&q=80"
          alt="Tech background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Technology,
            <span className="block gradient-text">Enhancing Security</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-primary-100 mb-12 animate-slide-in"
            style={{ animationDelay: "0.2s" }}
          >
            Your trusted partner in technology solutions and security systems
          </p>
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/services"
              className="btn-gradient text-white font-semibold px-8 py-4 rounded-lg text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      to="/services"
      className="service-card transform bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition-all group flex flex-col items-center justify-center"
    >
      <div className="text-primary-600 mb-6">{icon}</div>
      <h3 className="font-heading text-2xl font-semibold mb-4 text-gray-800 text-center">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 text-center">{description}</p>
      <div className="text-primary-600 font-semibold inline-flex items-center gap-2 group-hover:text-primary-800">
        Learn More{" "}
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}

function TestimonialCard({
  name,
  role,
  content,
  rating,
}: {
  name: string;
  role: string;
  content: string;
  rating: number;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl text-center">
      <div className="flex justify-center gap-1 text-yellow-400 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-6 h-6 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 text-lg">{content}</p>
      <div>
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6 text-gray-800">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <ServiceCard
                icon={<Tool className="w-12 h-12 mx-auto" />}
                title="Device Repairs"
                description="Expert repair services for computers, laptops, tablets, and more"
              />
            </div>
            <div>
              <ServiceCard
                icon={<Shield className="w-12 h-12 mx-auto" />}
                title="Security Solutions"
                description="Professional security camera installation and maintenance"
              />
            </div>
            <div>
              <ServiceCard
                icon={<Monitor className="w-12 h-12 mx-auto" />}
                title="Electronics Sales"
                description="Quality new and refurbished devices at competitive prices"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* First Image */}
              <div className="mb-6 md:mb-0">
                <img
                  src="src/images/30b97f68d63827962e5a6e13b94416a1.jpg"
                  alt="Team at work"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>

              {/* Second Image */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2000&q=80"
                  alt="Our work"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="mt-12">
              <h2 className="font-heading text-4xl font-bold mb-6 text-gray-800">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Founded by Mr. Shailesh Mehta, Spectrum Infotech & Securities
                has been at the forefront of technology solutions for over a
                decade. Starting with a vision to provide high-quality IT
                support, the company quickly expanded to offer a wide range of
                services, including security systems, electronics sales, and
                comprehensive repair services. Our commitment to quality and
                customer satisfaction has made us a trusted name in the
                industry.
              </p>
              <p className="text-xl text-gray-600 mb-8">
                Over the years, we've built strong relationships with our
                clients, understanding their unique needs and delivering
                tailored solutions. With a focus on innovation, trust, and
                reliability, we have grown into a leader in our field. Our team
                of experts is dedicated to staying ahead of the curve with the
                latest technology, ensuring that our clients receive the best
                possible service and solutions.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-primary-600 mb-4">
                    <ThumbsUp className="w-10 h-10 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-lg">Trust</h4>
                  <p className="text-gray-600">
                    We have earned the trust of countless clients by
                    consistently delivering dependable services.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-primary-600 mb-4">
                    <Tool className="w-10 h-10 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-lg">Innovation</h4>
                  <p className="text-gray-600">
                    Our solutions are built on cutting-edge technology, designed
                    to drive efficiency and growth.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-primary-600 mb-4">
                    <ShieldCheck className="w-10 h-10 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-lg">Reliability</h4>
                  <p className="text-gray-600">
                    Clients rely on us for our unwavering commitment to quality,
                    security, and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-800">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sanjay"
              role="Client"
              content="Excellent service! They helped set up our entire socities security system and provide great ongoing support."
              rating={5}
            />
            <TestimonialCard
              name="Amit"
              role="Business Owner"
              content="Helped me set up 50 pcs in our office setup! Great Service was provided."
              rating={5}
            />
            <TestimonialCard
              name="Chetan"
              role="Business"
              content="Spectrum Infotech has been a great partner in our tech needs, always reliable and affordable."
              rating={4}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
