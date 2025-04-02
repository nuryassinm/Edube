// App.jsx
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import BlogPostsComponent from "../components/BlogPostsComponent";
import EducationHero from "../components/EducationHero";
import Footer from "../components/Footer"
import DesignComponent from "../components/DesignComponent";
import EducationStats from "../components/EducationStats";
import EnrollmentComponent from "../components/EnrollmentComponent";
import OpinionBadgesComponent from "../components/OpinionBadgesComponent";
import VideoBanner from "../components/VideoBanner";
import JoinTestimonialComponent from "../components/JoinTestimonialComponent";
import TeachersComponent from "../components/TeachersComponent";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen font-mono overflow-hidden bg-white">
      {/* <Nav /> */}
      <iframe
        src="https://www.mixweb.io/banner"
        width="100%"
        height="75px"
        frameBorder="0"
        style={{
          border: "none",
          display: "block",
          position: "fixed",
          top: "0",
          zIndex: "9999",
          backgroundColor: "white",
        }}
      ></iframe>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-[75px] top-[75px] z-50 "
      ></motion.header>

      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero  className=""/>
          {/* <Mission /> */}
          <EducationHero />
          <EducationStats />
          <DesignComponent />
          <EnrollmentComponent />
          <TeachersComponent />
          <JoinTestimonialComponent />
          <VideoBanner />
          <BlogPostsComponent />
          <OpinionBadgesComponent />
          <Footer />

        </motion.div>
      )}
    </div>
  );
}



// SkeletonLoader.jsx
const SkeletonLoader = () => {
  return (
    <div className="container mx-auto px-4 py-20 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="h-16 bg-gray-200 mb-4 w-3/4"></div>
          <div className="h-4 bg-gray-200 mb-2 w-full"></div>
          <div className="h-4 bg-gray-200 mb-6 w-3/4"></div>
          <div className="h-12 bg-gray-200 w-40"></div>
        </div>
        <div className="h-96 bg-gray-200 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Home;