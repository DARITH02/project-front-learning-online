"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
// import { Button } from "@/components/ui/button";
import Logo from "../assets/logo/logo-etec.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in ms)
      once: false, // animate only once
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          data-aos="fade-up"
        >
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 h-12 w-14">
              <img className="object-cover " src={Logo} alt="" />

              {/* <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-md flex items-center justify-center">
                                <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                                    <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-sm"></div>
                                </div>
                            </div> */}
              <span className="text-xl font-bold tracking-wide">ETEC</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Morbi cras sodales
              elementum sed. Suspendisse adipiscing arcu magna leo sodales
              pellentesque. Ac iaculis mattis ornare rhoncus nibh mollis arcu.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-3">
              {[
                "Organization",
                "Latest Courses",
                "Certificate Track",
                "Best Rated Courses",
                "Our Recent Blogs",
                "Slot Pulsa",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Custom Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Custom Links</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Contact Us",
                "Privacy Policy",
                "Terms & Conditions",
                "Events",
                "Daftar Slot Maxwin",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Development",
                "Game Development",
                "Seo",
                "Dewaslot88",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CAT EXAM */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CAT EXAM</h3>
            <ul className="space-y-3">
              {["CAT EXAM", "Ceria158"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 z-50"
        size="icon"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

export default Footer;
