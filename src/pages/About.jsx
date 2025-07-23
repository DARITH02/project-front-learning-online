import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactUs from "../components/ContactUs";

const About = (props) => {
  // console.log(props.data);

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
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="min-h-screen bg-gray-50"
      >
        {/* Header Section */}
        <header className="bg-slate-900 text-white py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold">About Us</h1>
          </div>
        </header>

        {/* Main Content Section */}
        <main className="relative py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Watermark Logo */}
              <div className="relative flex items-center justify-center">
                <div className="text-gray-200 text-8xl lg:text-9xl font-bold select-none">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfgEsISgcMna9mdI-t_XY7o-WkAI0ctitvg&s"
                    alt=""
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Best Digital{" "}
                  <span className="relative">
                    O
                    <span className="bg-blue-500 text-white px-1 rounded">
                      n
                    </span>
                    line
                  </span>{" "}
                  Education
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    There are many variations of passages of lorem in free
                    market to available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised
                    words. There are many variations of passages of lorem in
                    free market to available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised
                    words
                  </p>

                  <p>
                    Variations of passages of lorem in free market to available,
                    but the majority have suffered alter- ation in some form, by
                    injected humour, or randomised words, but the majority have
                    suffered al- teration in some form, by injected humour, or
                    randomised words
                  </p>

                  <p>
                    There are many variations of passages of lorem in free
                    market to available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised
                    words. There are many variations of passages of lorem in
                    free market to available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised
                    words
                  </p>

                  <p>
                    Variations of passages of lorem in free market to available,
                    but the majority have suffered alter- ation in some form, by
                    injected humour, or randomised words, but the majority have
                    suffered al- teration in some form, by injected humour, or
                    randomised words
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="w-full">
        <ContactUs />
      </div>
    </>
  );
};
export default About;
