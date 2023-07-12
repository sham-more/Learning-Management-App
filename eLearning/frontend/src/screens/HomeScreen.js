import React from "react";
import Header from "./../components/Header";
import CourseSection from "../components/homeComponents/CourseSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <CourseSection />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
