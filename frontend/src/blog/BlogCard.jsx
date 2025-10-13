// Blog.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Heart, Shield, Plane, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import PageBanner from '../components/PageBanner';
import testImg from "../assets/test.jpg";


const Blog = () => {
  // ✅ Blog data ab isi file me hi
  const blogPosts = [
    {
      id: 1,
      title: "Medical Transport Basics",
      excerpt: "Learn the essentials of medical transport and how it helps patients in emergencies.",
      content: "Medical transport plays a crucial role in ensuring timely medical care...",
    image: testImg, // ✅ import use karo
      date: "2025-09-01",
      category: "Emergency Care",
      link: "/blog1"   // 👈 manual link
    }
   
  ];

  const categories = [
    { name: 'All Posts', count: blogPosts.length, icon: Heart },
    { name: 'Emergency Care', count: blogPosts.filter(b => b.category === 'Emergency Care').length, icon: Shield },
    { name: 'International Transport', count: blogPosts.filter(b => b.category === 'International Transport').length, icon: Plane },
    { name: 'Technology', count: blogPosts.filter(b => b.category === 'Technology').length, icon: Clock },
    { name: 'Patient Care', count: blogPosts.filter(b => b.category === 'Patient Care').length, icon: User },
    { name: 'Medical Escort', count: blogPosts.filter(b => b.category === 'Medical Escort').length, icon: User }
  ];

  return (
    <>
      <Helmet>
        <title>Medical Services Blogs - Expert Insights & Healthcare Tips | HumanCare</title>
      </Helmet>

      <PageBanner
        titleComponent={
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Medical Transport <span className="text-primary-red">Blog</span>
          </h1>
        }
        subtitle="Expert insights, healthcare tips, and the latest developments in medical transport from our team of medical professionals and industry experts."
      />

      {/* Blog Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
            
            {/* Categories Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="flex items-center space-x-3">
                        <category.icon className="h-4 w-4 text-primary-blue" />
                        <span className="text-gray-700">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="blog-card bg-white rounded-xl shadow-sm overflow-hidden"
                  >
                    <img
                      className="w-full h-48 object-cover"
                      alt={post.title}
                      src={post.image}
                    />
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-blue-100 text-primary-blue px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* ✅ Manual Link use kiya */}
                      {post.link.startsWith("http") ? (
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-4 py-2 rounded-lg transition"
                        >
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      ) : (
                        <Link
                          to={post.link}
                          className="w-full inline-flex items-center justify-center border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-4 py-2 rounded-lg transition"
                        >
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
