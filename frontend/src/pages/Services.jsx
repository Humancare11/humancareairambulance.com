import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plane, Bus as Ambulance, Train, UserCheck, Globe, Clock, Shield, Heart, Phone, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import PageBanner from '../components/PageBanner';

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: 'Private Air Ambulance',
      description: 'Rapid medical transport via dedicated helicopter and fixed-wing aircraft for critical care situations.',
      features: [
        'Helicopter emergency medical services (HEMS)',
        'Fixed-wing aircraft for long-distance transport',
        'Advanced life support equipment onboard',
        'Experienced flight medical crews',
        'Weather-independent operations',
        'Direct hospital-to-hospital transfers'
      ],
      image: 'Medical helicopter with advanced life support equipment landing at hospital helipad during golden hour',
      link: '/services/private-air-ambulance'
    },
    {
      icon: Globe,
      title: 'Commercial Air Ambulance',
      description: 'A cost-effective solution for medically stable patients, with a medical escort on a commercial flight.',
      features: [
        'Commercial airline coordination',
        'Portable medical equipment',
        'Medication management',
        'Patient monitoring during flight',
        'International travel documentation',
        'Cost-effective for stable patients'
      ],
      image: 'Medical professional providing care to patient during commercial flight with portable medical equipment',
      link: '/services/commercial-air-ambulance'
    },
    {
      icon: () => <img class="h-8 w-8" alt="Helicopter icon" src="https://images.unsplash.com/photo-1509450070916-ae18608d9a04" />,
      title: 'Rotary Wings (Helicopter)',
      description: 'Rapid, point-to-point transport for critical emergencies, ideal for short distances and remote areas.',
      features: [
        'Access to remote or hard-to-reach locations',
        'Rooftop-to-rooftop hospital transfers',
        'Rapid response for trauma and critical cases',
        'On-site landing capabilities',
        'Specialized for search and rescue missions',
        'Equipped for night vision operations'
      ],
      image: 'A medical helicopter taking off from a hospital rooftop helipad.',
      link: '/services/rotary-wings'
    },
    
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock emergency response and medical transport services.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Rigorous safety protocols and maintenance standards for all equipment.'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Patient-centered approach with emotional support for families.'
    }
  ];

  return (
    <>
        <Helmet>
      <title>Services - Mumbai, India: Humancare Air Ambulance</title>
      <meta
        name="description"
        content="Explore the services offered by Humancare Air Ambulance in Mumbai, including emergency air ambulance, patient transfer, medical escort, and international medical transport."
      />
      <meta
        name="keywords"
        content="air ambulance services, emergency air ambulance, patient transfer, medical escort, international medical transport, Mumbai"
      />
      <link rel="canonical" href="https://www.humancare.in/services" />
    </Helmet>

      <PageBanner
        titleComponent={
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Medical Transport <span className="text-primary-red">Services</span>
          </h1>
        }
        subtitle="Comprehensive medical transport solutions designed to meet every emergency and non-emergency need with professional care and advanced medical equipment."
      />

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-primary-blue p-3 rounded-lg w-fit mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {service.link && (
                    <Button asChild className="bg-primary-blue hover:bg-blue-700 text-white">
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  )}
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img 
                    class="w-full h-80 object-cover rounded-xl shadow-healthcare" 
                    alt={service.title} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose HumanCare?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence, safety, and compassionate care sets us apart 
              in the medical transport industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="healthcare-card bg-white p-8 rounded-xl text-center"
              >
                <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="section-padding bg-primary-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Immediate Medical Transport?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our medical transport coordinators are standing by 24/7 to dispatch the appropriate 
              transport service for your specific medical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="cta-button text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-transform inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency: +919699999067
              </a>
              <Button asChild variant="outline" className="border-white text-white px-8 py-4 text-lg rounded-full">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;