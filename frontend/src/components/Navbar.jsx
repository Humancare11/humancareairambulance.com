// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, Phone, Heart, ChevronDown } from 'lucide-react';
// import logo from '../assets/logo.webp';


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { 
//       name: 'Services', path: '/services',
//       dropdown: [
//         { name: 'Private Air Ambulance', path: '/services/private-air-ambulance' },
//         { name: 'Commercial Air Ambulance', path: '/services/commercial-air-ambulance' },
//         { name: 'Rotary Wings (Helicopter)', path: '/services/rotary-wings' },
//       ]
//     },
 

// { name: 'Online Payment', path: '/PaymentForm' }, 
//     { name: 'Blog', path: '/blogs' },
//     { name: 'Contact', path: '/contact' }
    
   
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="flex items-center space-x-2">
//             {/* <div className="bg-primary-blue p-2 rounded-lg">
//               <Heart className="h-6 w-6 text-white" />
//             </div> */}
//             <Link to="/" className="flex items-center space-x-2">
//   <img src={logo} alt="heart" className="h-12 w-25" />
// </Link>

          
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex justify-between items-center space-x-8">
//             {navItems.map((item) => (
//               item.dropdown ? (
//                 <div 
//                   key={item.name}
//                   className="relative"
//                   onMouseEnter={() => setServicesOpen(true)}
//                   onMouseLeave={() => setServicesOpen(false)}
//                 >
//                   <button
//                     className={`nav-link font-medium transition-colors flex items-center ${
//                       location.pathname.startsWith('/services')
//                         ? 'text-primary-blue active'
//                         : 'text-gray-700 hover:text-primary-blue'
//                     }`}
//                   >
//                     {item.name}
//                     <ChevronDown className="h-4 w-4 ml-1" />
//                   </button>
//                   <AnimatePresence>
//                     {servicesOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 10 }}
//                         transition={{ duration: 0.2 }}
//                         className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden"
//                       >
//                         {item.dropdown.map(subItem => (
//                           <Link
//                             key={subItem.name}
//                             to={subItem.path}
//                             className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary-blue transition-colors"
//                           >
//                             {subItem.name}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ) : (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`nav-link font-medium transition-colors ${
//                     location.pathname === item.path
//                       ? 'text-primary-blue active'
//                       : 'text-gray-700 hover:text-primary-blue'
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               )
//             ))}
//             <a
//               href="tel:+919820073734"
//               className="flex items-center space-x-2 bg-primary-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
//             >
//               <Phone className="h-4 w-4" />
//               <span>Emergency</span>
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
//           >
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden mt-4 pb-4 border-t border-gray-200"
//           >
//             <div className="flex flex-col space-y-4 pt-4">
//               {navItems.map((item) => (
//                 item.dropdown ? (
//                   <div key={item.name}>
//                     <button
//                       onClick={() => setServicesOpen(!servicesOpen)}
//                       className={`w-full text-left font-medium transition-colors flex justify-between items-center ${
//                         location.pathname.startsWith('/services')
//                           ? 'text-primary-blue'
//                           : 'text-gray-700 hover:text-primary-blue'
//                       }`}
//                     >
//                       {item.name}
//                       <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
//                     </button>
//                     {servicesOpen && (
//                       <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
//                         {item.dropdown.map(subItem => (
//                           <Link
//                             key={subItem.name}
//                             to={subItem.path}
//                             onClick={() => setIsOpen(false)}
//                             className="block text-gray-600 hover:text-primary-blue"
//                           >
//                             {subItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`font-medium transition-colors ${
//                       location.pathname === item.path
//                         ? 'text-primary-blue'
//                         : 'text-gray-700 hover:text-primary-blue'
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 )
//               ))}
//               <a
//                 href="tel:+919820073734"
//                 className="flex items-center space-x-2 bg-primary-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors w-fit mt-4"
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>Emergency Call</span>
//               </a>
//             </div>
//           </motion.div>
//         )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Private Air Ambulance', path: '/services/private-air-ambulance' },
        { name: 'Commercial Air Ambulance', path: '/services/commercial-air-ambulance' },
        { name: 'Rotary Wings (Helicopter)', path: '/services/rotary-wings' },
      ],
    },
    { name: 'Online Payment', href: 'https://pmny.in/KI4pIX0tZoST' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="h-12 w-25" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center space-x-8">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`nav-link font-medium transition-colors flex items-center ${
                      location.pathname.startsWith('/services')
                        ? 'text-primary-blue active'
                        : 'text-gray-700 hover:text-primary-blue'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary-blue transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.href ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link font-medium text-gray-700 hover:text-primary-blue transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary-blue active'
                      : 'text-gray-700 hover:text-primary-blue'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
            <a
              href="tel:+919820073734"
              className="flex items-center space-x-2 bg-primary-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Emergency</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <div key={item.name}>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`w-full text-left font-medium transition-colors flex justify-between items-center ${
                          location.pathname.startsWith('/services')
                            ? 'text-primary-blue'
                            : 'text-gray-700 hover:text-primary-blue'
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            servicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className="block text-gray-600 hover:text-primary-blue"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.href ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="font-medium text-gray-700 hover:text-primary-blue"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'text-primary-blue'
                          : 'text-gray-700 hover:text-primary-blue'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <a
                  href="tel:+919820073734"
                  className="flex items-center space-x-2 bg-primary-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors w-fit mt-4"
                >
                  <Phone className="h-4 w-4" />
                  <span>Emergency Call</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
