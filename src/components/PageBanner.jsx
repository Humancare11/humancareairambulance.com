import React from 'react';
import { motion } from 'framer-motion';

const PageBanner = ({ title, subtitle, titleComponent }) => {
  return (
    <section className="relative pt-32 pb-20 bg-primary-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {titleComponent ? titleComponent : (
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {/* <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"></h1> */}
  {title}
</h1>
          )}
          <p className="text-xl text-white max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;