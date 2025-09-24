import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import PrivateAirAmbulance from './pages/services/PrivateAirAmbulance';
import CommercialAirAmbulance from './pages/services/CommercialAirAmbulance';
import RotaryWings from './pages/services/RotaryWings';
// import Blogs from "./blog/Blogs";
// import BlogDetail from "./blog/BlogDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import AirAmbulance from "./pages/services/AirAmbulance";
import GroundAmbulance from "./pages/services/GroundAmbulance";
import Medicaltourism from "./pages/services/Medicaltourism";
import Medictteamconsultancy from "./pages/services/Medictteamconsultancy";
import Assistanceforelderly from "./pages/services/Assistanceforelderly";

import BlogCard from "./blog/BlogCard";
import Blog1 from "./blog/Blog1";
// ===================service locations===================//
import Chennai from "./pages/servicelocations/Chennai";
import Oman from "./pages/servicelocations/Oman";
import Bahrain from "./pages/servicelocations/Bahrain";
import Kolkata from "./pages/servicelocations/Kolkata";
import Patna from "./pages/servicelocations/Patna";
import Ahmedabad from "./pages/servicelocations/Ahmedabad";
import Surat from "./pages/servicelocations/Surat"; 
import New from "./pages/servicelocations/New"; 
import Guwahati from "./pages/servicelocations/Guwahati";
import Hyderabad from "./pages/servicelocations/Hyderabad";
import Pakistan from "./pages/servicelocations/Pakistan";
import Pune from "./pages/servicelocations/Pune";
import Lucknow from "./pages/servicelocations/Lucknow";
import Bangladesh from "./pages/servicelocations/Bangladesh";
import Kerala from "./pages/servicelocations/Kerala";
import Yemen from "./pages/servicelocations/Yemen";
import Varanasi from "./pages/servicelocations/Varanasi"
import Uk from "./pages/servicelocations/Uk";
import Ranchi from "./pages/servicelocations/Ranchi";
import Delhi from "./pages/servicelocations/Delhi";
import Bangalore from "./pages/servicelocations/Bangalore";
import Arabia from "./pages/servicelocations/Arabia";
import Raipur from "./pages/servicelocations/Raipur";

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/blog" element={<Blogs />} /> */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/services/private-air-ambulance" element={<PrivateAirAmbulance />} />
        <Route path="/services/commercial-air-ambulance" element={<CommercialAirAmbulance />} />
        <Route path="/services/rotary-wings" element={<RotaryWings />} />
        {/* <Route path="/blog/:slug" element={<BlogDetail />} /> */}
        <Route path="/air-ambulance" element={<AirAmbulance />} />
        <Route path="/ground-ambulance" element={<GroundAmbulance />} />
        <Route path="/medical-tourism" element={<Medicaltourism />} />
        <Route path="/medict-team-consultancy" element={<Medictteamconsultancy />} />
        <Route path="/assistance-for-elderly" element={<Assistanceforelderly />} />
        {/* ===================service locations=================== */}
        <Route path="/air-ambulance-services-chennai" element={<Chennai />} />     
        <Route path="/air-ambulance-services-oman" element={<Oman />} /> 
        <Route path="/air-ambulance-services-Bahrain" element={<Bahrain />} />
        <Route path="/air-ambulance-services-kolkata" element={<Kolkata />} />
        <Route path="/air-ambulance-services-patna" element={<Patna />} />
        <Route path="/air-ambulance-services-ahmedabad" element={<Ahmedabad/> } />
        <Route path="/air-ambulance-services-surat" element={<Surat/> } />
        <Route path="/new" element={<New />} />
        <Route path="/air-ambulance-services-guwahati" element={<Guwahati/> } />
        <Route path="/air-ambulance-services-hyderabad" element={<Hyderabad/> } />
        <Route path="/air-ambulance-services-pakistan" element={<Pakistan/> } />
        <Route path="/air-ambulance-services-pune" element={<Pune/> } />
        <Route path="/air-ambulance-services-lucknow" element={<Lucknow/> } />
        <Route path ="/air-ambulance-services-bangladesh" element={<Bangladesh/> } />
        <Route path="/air-ambulance-services-kerala" element={<Kerala/> } />
        <Route path="/air-ambulance-services-yemen" element={<Yemen/> } />
        <Route path="/air-ambulance-services-varanasi" element={<Varanasi/>}/>
                <Route path="/air-ambulance-services-uk" element={<Uk/>}/>
<Route path="/air-ambulance-services-ranchi" element={<Ranchi/>}/>
 <Route path="/air-ambulance-services-delhi" element={<Delhi/>}/>
 <Route path="/air-ambulance-services-bangalore" element={<Bangalore/>}/>
  <Route path="/air-ambulance-services-Arabia" element={<Arabia/>}/>
   <Route path="/air-ambulance-services-raipur" element={<Raipur/>}/>
   <Route path="/blogs"element={<BlogCard/>}/>
  <Route path="/blog1" element={<Blog1 />} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;
