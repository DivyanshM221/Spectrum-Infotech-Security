import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const GoogleMapEmbed: React.FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7361590016435!2d73.85625587491452!3d18.49570098760667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c094e322db2f%3A0x9992e8e8d2de93c8!2sMukundnagar%2C%20Pune%2C%20Maharashtra%20411037%2C%20India!5e0!3m2!1sen!2sus!4v1234567890"
      style={{
        width: "100%",
        height: "400px",
        border: "0",
        borderRadius: "8px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map Location"
    ></iframe>
  );
};

export default function ContactUs() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-extrabold mb-6 text-gray-800">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-700">
              We are here to assist you with all your technology and security
              needs. Reach out to us today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-primary-600 mb-4">
                <Phone className="w-12 h-12 mx-auto text-blue-600" />
              </div>
              <h4 className="font-semibold text-xl text-gray-800">Phone</h4>
              <p className="text-gray-600 text-lg">9822035322</p>
              <a
                href="https://wa.me/9822035322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:underline mt-2 text-lg"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="text-center">
              <div className="text-primary-600 mb-4">
                <Mail className="w-12 h-12 mx-auto text-blue-600" />
              </div>
              <h4 className="font-semibold text-xl text-gray-800">Email</h4>
              <p className="text-gray-600 text-lg">sg_mehta@yahoo.co.in</p>
            </div>

            <div className="text-center">
              <div className="text-primary-600 mb-4">
                <MapPin className="w-12 h-12 mx-auto text-blue-600" />
              </div>
              <h4 className="font-semibold text-xl text-gray-800">Location</h4>
              <p className="text-gray-600 text-lg">Mukundnagar, Pune</p>
            </div>
          </div>

          <div className="mt-16">
            <GoogleMapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
