import React from "react";
import "./new.css";
import { Cpu, Shield, Activity, Printer } from "lucide-react";
import roboHand from "../../assets/test.jpg";
import sportsImage from "../../assets/test.jpg";
import pediatricImage from "../../assets/test.jpg";
import elderlyImage from "../../assets/test.jpg";

const specializations = [
  {
    title: "Sports & Athletics",
    description:
      "High-performance prosthetics and orthotics designed for athletes and active individuals. Our sports solutions enable peak performance while ensuring comfort and durability.",
    features: [
      "Carbon fiber running blades",
      "Shock-absorbing systems",
      "Lightweight design",
      "Custom athletic fitting",
      "Performance optimization",
    ],
    image: sportsImage,
    imageAlt: "Sports prosthetics and athletic equipment",
  },
  {
    title: "Pediatric Care",
    description:
      "Specialized devices for growing children that adapt to their unique needs. Our pediatric solutions combine functionality with child-friendly designs.",
    features: [
      "Growth-adjustable systems",
      "Colorful, engaging designs",
      "Comfortable materials",
      "Easy maintenance",
      "Family support programs",
    ],
    image: pediatricImage,
    imageAlt: "Pediatric orthotics and prosthetics",
  },
  {
    title: "Elderly Care",
    description:
      "Comfort-focused mobility solutions for seniors that prioritize ease of use and stability. Our elderly care devices enhance independence and quality of life.",
    features: [
      "Easy-to-use interfaces",
      "Maximum stability",
      "Lightweight construction",
      "Comfort-first design",
      "24/7 support services",
    ],
    image: elderlyImage,
    imageAlt: "Elderly care mobility aids and assistive devices",
  },
];

const SpecializationCard = ({ title, description, features, image, imageAlt }) => (
  <div className="specialization-card">
    <img src={image} alt={imageAlt} className="specialization-img" />
    <div className="specialization-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <button className="learn-btn">Learn More →</button>
    </div>
  </div>
);

const Specializations = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="specializations">
        <div className="container">
          <div className="section-header">
            <h2>Our Specializations</h2>
            <p>
              Each specialization represents years of expertise and innovation,
              designed to meet the unique challenges of different patient
              populations.
            </p>
          </div>
          <div className="specialization-grid">
            {specializations.map((spec, index) => (
              <SpecializationCard key={index} {...spec} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="advanced-tech">
        <div className="container grid two-col">
          <div className="text-block">
            <h2>Advanced Materials & Technology</h2>
            <p>
              We integrate cutting-edge materials and innovative technology to
              create assistive devices that enhance mobility, comfort, and
              quality of life.
            </p>

            <div className="tech-grid">
              <div className="tech-card">
                <Cpu className="icon" />
                <h3>Smart Sensors</h3>
                <p>
                  Integrated sensors for real-time monitoring and adaptive
                  response
                </p>
              </div>
              <div className="tech-card">
                <Shield className="icon" />
                <h3>Carbon Fiber</h3>
                <p>Lightweight, durable materials for maximum performance</p>
              </div>
              <div className="tech-card">
                <Activity className="icon" />
                <h3>Myoelectric Control</h3>
                <p>
                  Advanced muscle signal detection for intuitive control
                </p>
              </div>
              <div className="tech-card">
                <Printer className="icon" />
                <h3>3D Printing</h3>
                <p>Precision manufacturing for perfect custom fit</p>
              </div>
            </div>
          </div>

          <div className="image-block">
            <img src={roboHand} alt="Robotic Hand" />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="medical-needs">
        <div className="container">
          <h2>Complex Medical Needs</h2>
          <p className="subtitle">
            For patients with unique or complex medical conditions, we provide
            custom-engineered solutions that address specific challenges with
            innovative design and advanced materials.
          </p>

          <div className="steps">
            <div className="step">
              <div className="circle">1</div>
              <h3>Assessment</h3>
              <p>
                Comprehensive evaluation of medical needs and lifestyle
                requirements
              </p>
            </div>
            <div className="step">
              <div className="circle">2</div>
              <h3>Custom Design</h3>
              <p>
                Tailored engineering solutions using advanced materials and
                technology
              </p>
            </div>
            <div className="step">
              <div className="circle">3</div>
              <h3>Ongoing Support</h3>
              <p>Continuous care, adjustments, and technical support</p>
            </div>
          </div>

          <div className="buttons">
            <button className="btn primary">📞 Schedule Consultation</button>
            <button className="btn secondary">✉️ Contact Our Team</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specializations;
