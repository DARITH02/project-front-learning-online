import React from "react";
import Cart from "../components/Cart";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration (in ms)
            once: false, // animate only once
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    console.log(props);
    const { type, id } = useParams();
    console.log(type, id);

    return (
        <>
            {/* grid grid-cols-1 lg:grid-cols-4 px-3.5 lg:px-10 */}
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                className="w-full"
            >
                <nav className="w-full bg-gray-600 py-10 bg-[url('https://i.pinimg.com/originals/81/36/7a/81367a700bc653d1bc8e191a5f8b879d.gif')]">
                    <span className="max-w-7xl m-auto block">
                        <h1 className="text-white font-bold text-4xl">
                            ALL COURSES
                        </h1>
                    </span>
                </nav>
                <section className="max-w-7xl m-auto shadow-sm my-5 px-3.5 rounded-md py-5">
                    <h1 className="py-10 text-center font-bold text-4xl underline decoration-gray-500 text-gray-800">
                        Web Developmets
                    </h1>
                    <Cart />
                </section>
            </div>
        </>
    );
};

export default Category;
