import React from "react";
import { Helmet } from "react-helmet";
import PageBanner from "../components/PageBanner";
import testImgs from "../assets/test.jpg";

const Blog1 = () => {
  return (
    <>
      <Helmet>
        <title>Medical Transport Basics | HumanCare Blog</title>
      </Helmet>

      <PageBanner
        titleComponent={
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Medical Transport <span className="text-primary-red">Basics</span>
          </h1>
        }
        subtitle="Learn the essentials of medical transport and how it helps patients in emergencies."
      />

      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <img
  src={testImgs}
  alt="Medical Transport"
  className="rounded-xl shadow-md mb-8"
/>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Medical Transport Basics
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Medical transport plays a crucial role in ensuring timely medical care
            for patients who need immediate attention. It includes various modes
            such as ground ambulances, air ambulances, and medical escort
            services...
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In critical cases, air ambulances provide fast and effective patient
            transfer. Ground ambulances are the backbone of emergency care in
            urban and rural areas...
          </p>
        </div>
      </section>
    </>
  );
};

export default Blog1;
