import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Heart, Clock, Globe, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { Button } from '../components/ui/button';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with dignity, respect, and the highest level of medical care.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Our rigorous safety protocols ensure the highest standards in medical transport.'
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Time-critical situations demand immediate action. We respond within minutes.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'International medical transport capabilities with worldwide coverage.'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Years of Experience' },
    { number: '10,000+', label: 'Successful Transports' },
    { number: '50+', label: 'Medical Professionals' },
    { number: '25+', label: 'Aircraft Fleet' }
  ];

  const certifications = [
    'Commission on Accreditation of Medical Transport Systems (CAMTS)',
    'International Association for Healthcare Security (IAHSS)',
    'National Association of Emergency Medical Technicians (NAEMT)',
    'Federal Aviation Administration (FAA) Certified',
    'International SOS Medical Assistance'
  ];

  return (
    <>
      <Helmet>
  <title>About Us - Mumbai, India: Humancare Air Ambulance</title>
  <meta
    name="description"
    content="Humancare is on a mission to save lives through various medical services like Air Ambulance, Ground Ambulance, Transfer etc in India."
  />
  <meta
    name="keywords"
    content="about air ambulance, humancare Mumbai, medical transport India, emergency ambulance services, ground ambulance, patient transfer"
  />
  <meta
    property="og:title"
    content="About Us - Mumbai, India: Humancare Air Ambulance"
  />
  <meta
    property="og:description"
    content="Humancare is on a mission to save lives through various medical services like Air Ambulance, Ground Ambulance, Transfer etc in India."
  />
    <link rel="canonical" href="https://www.humancareairambulance.com/about" />
</Helmet>


      <PageBanner
        titleComponent={
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-primary-red">Humancare</span>
          </h1>
        }
        subtitle="For over 15 years, HumanCare has been at the forefront of medical transport services, combining advanced medical technology with compassionate care to save lives and provide hope during critical moments."
      />

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To provide exceptional medical transport services that bridge the gap between emergency
              situations and definitive medical care. We are committed to delivering rapid, safe, and
              compassionate transport while maintaining the highest standards of medical excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                className="w-full h-96 object-cover rounded-xl shadow-healthcare"
                alt="HumanCare founder portrait"
                src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  HumanCare was founded in 2009 by Dr. Sarah Mitchell, a former emergency room physician
                  who witnessed firsthand the critical need for rapid, professional medical transport
                  services. After experiencing the loss of a patient due to delayed transport, she
                  dedicated her life to ensuring no family would face the same tragedy.
                </p>
                <p>
                  What started as a single helicopter operation has grown into a comprehensive medical
                  transport network spanning multiple states. Our team has evolved from a small group
                  of dedicated professionals to a family of over 200 medical experts, pilots, and
                  support staff.
                </p>
                <p>
                  Today, HumanCare continues to innovate in medical transport technology while maintaining
                  our core commitment to compassionate care. Every transport is a testament to our
                  founding principle: when lives hang in the balance, excellence is not optional.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is validated by industry-leading certifications and
              accreditations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((certification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{certification}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Arrange a Private Air Ambulance Transfer
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our flight coordinators are available 24/7 to plan every detail of your medical transport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="cta-button text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-transform"
              >
                <a href="tel:+919699999067">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Immediate Help
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:text-blue px-8 py-4 text-lg rounded-full"
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
