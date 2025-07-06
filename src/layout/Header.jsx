import { Link, useLocation, useParams } from "react-router-dom";
import Logo from "../assets/logo/logo-etec.png";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { useEffect, useState } from "react";
import {
  Search,
  Bell,
  Heart,
  Sun,
  ChevronDown,
  AlignJustify,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import axios from "../api/axios.js";

// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "./ui/dropdown-menu";

export default function Header({ page, data }) {
  // const location = useLocation();
  // const param = useParams();
  // console.log(location.pathname);
  // console.log(param);

  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [isHover, SetIsHover] = useState(null);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const [category, setCategory] = useState([]);

  useEffect(() => {
    // const handleMouseLeave = () => {
    //     SetIsHover(false);
    // };
    // window.addEventListener("mouseleave", handleMouseLeave);
    // return () => {
    //     window.removeEventListener("mouseover", handleMouseLeave);
    // };

    axios
      .get("view-category")
      .then((rs) => {
        // console.log(rs);s
        setCategory(rs.data.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(category);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.body;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const listMunu = [
    {
      lable: "Software development",
      sumList: ["Web Design", "Web Back-end", "CPP"],
    },
    { lable: "Network", sumList: ["A", "b", "C"] },
  ];

  return (
    <>
      <header
        className={`backdrop-blur-sm border-b border-gray-200 px-4 py-3 z-50 sticky top-0  w-full shadow-2xl flex items-center transition-colors duration-300 ${
          darkMode ? "bg-gray-950/90 text-white" : "bg-white text-black"
        }`}
      >
        {/* // className="w-full shadow-2xl bg-white dark:bg-gray-950/90 */}
        {/* backdrop-blur-sm border-b border-gray-200 px-4 py-3 z-50 sticky top-0 "> */}
        <div className="w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 overflow-hidden">
            <img className="h-14 w-14" src={Logo} alt="" />
            {/* <div className="relative">
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-md flex items-center justify-center">
                                <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                                    <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-sm"></div>
                                </div>
                            </div>
                        </div> */}
            <span className="text-xl font-bold tracking-wide">ETEC</span>
          </div>

          {/* Search Bar (Hidden on small screens) */}
          <div className="hidden sm:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className=" hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            {/* <div className="group relative z-30 ">
                            <span className="block py-3.5  z-20 hover:text-blue-600 font-medium transition-colors cursor-pointer ">
                                Categories
                            </span>
                            <ul className="absolute left-0 translate-y-13 scale-y-50  invisible group-hover:scale-y-100 group-hover:visible top-0 py-2.5 z-10 opacity-0 px-5 rounded-xs group-hover:opacity-100 group-hover:shadow-2xl bg-gray-50 w-52 transition-all duration-300 ease-out ">
                                <li className="w-full mt-3 block group relative">
                                    <a
                                        href="#"
                                        className="relative group block w-full pl-4 text-gray-800 hover:text-blue-700 
                                                hover:underline decoration-blue-700 hover:shadow-2xl transition-all duration-300 ease-out
                                                before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 
                                                before:h-4 before:w-0 before:bg-blue-700 before:rounded-sm 
                                                before:transition-all before:duration-300 before:ease-out
                                                group-hover:before:w-1"
                                    >
                                        Software Development
                                    </a>
                                </li>
                            </ul>
                        </div> */}

            <div className="group relative z-30">
              {/* Trigger */}
              <span className="block py-3.5  z-20 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Categories
              </span>

              {/* Dropdown */}
              <ul
                className="flex gap-5 absolute top-full -left-[200%] w-[360px] bg-gray-300 z-10 rounded-md px-5 py-3 shadow-xl
                                opacity-0 scale-y-0 translate-y-2 invisible 
                                group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0 group-hover:visible
                                origin-top transition-all duration-300 ease-out"
              >
                {/* Main link */}
                {Array.isArray(category) &&
                  category.map((el) => (
                    <ul
                      className="block w-fit"
                      // className="relative block  text-gray-800 font-medium
                      //        hover:text-blue-700 hover:underline decoration-blue-700 hover:shadow-2xl
                      //        transition-all duration-300 ease-out"
                    >
                      <li className="text-blue-500">
                        <Link>{el.title}</Link>
                      </li>
                    </ul>
                  ))}
              </ul>
            </div>

            {/* <li className="w-full block">
                        {el.lable}
                        <div>
                          {el.sumList.map((el, ind) => (
                            <ul>
                              <li className="text-blue-500">
                                {/* <Link to={`/category/${el}/${ind}`}>{el}</Link> */}
            {/* </li> */}
            {/* </ul> */}
            {/* ))} */}
            {/* </div> */}
            {/* </li>  */}

            {/* <a
                                            href="#"
                                            className=" relative block w-full text-gray-800 font-medium
                                               hover:text-blue-700 hover:underline decoration-blue-700 hover:shadow-2xl
                                               transition-all duration-300 ease-out"
                                        >
                                            Software Development
                                        </a> */}

            {/* Submenu */}
            {/* <ul
                                            onMouseLeave={() =>
                                                SetIsHover(null)
                                            }
                                            className={`${
                                                isHover == i
                                                    ? "block"
                                                    : "hidden"
                                            } 
                                            absolute top-0% left-full w-56 bg-blue-100 py-2 px-4 rounded-md shadow-lg
                                            scale-y-95 translate-y-1
                                            transition-all duration-300 ease-out`}
                                        >
                                            {el.sumList.map((subel, ind) => (
                                                <li >
                                                    <a
                                                        href=""
                                                        className="block w-full text-gray-800 font-medium py-1
                   hover:text-blue-700 hover:underline decoration-blue-700 hover:shadow
                   transition-all duration-300 ease-out"
                                                    >
                                                        Frontend Development
                                                    </a>
                                                </li>
                                            ))}
                                            </ul> */}

            <Link
              to="/about"
              className=" hover:text-blue-600 font-medium transition-colors"
            >
              About Us
            </Link>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* <Button
              variant="ghost"
              size="icon"
            >
              <Sun className="w-5 h-5" /> */}

            {/* </Button> */}
            <ThemeToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden md:flex  hover:text-gray-800 gap-1">
                  English <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
                <DropdownMenuItem>French</DropdownMenuItem>
                <DropdownMenuItem>German</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:text-gray-800"
              >
                <Heart className="w-5 h-5" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center p-0 min-w-0"
                >
                  0
                </Badge>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:text-gray-800"
              >
                <Bell className="w-5 h-5" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center p-0 min-w-0"
                >
                  0
                </Badge>
              </Button>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-md font-medium text-sm sm:text-base">
              Sign In
            </Button>

            {/* Mobile Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:text-gray-800"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <AlignJustify />
              {/* {isMobileMenuOpen ? <AlignJustify />: ''} */}
            </Button>
          </div>
        </div>
        {/* Mobile Search */}
        <div className="sm:hidden mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </header>

      {/* Mobile Slide Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-sm"></div>
                </div>
              </div>
              <span className="text-lg font-bold text-gray-800">ONEST</span>
            </div>
            {/* <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
              <X className="w-6 h-6" />
            </Button> */}
          </div>

          <div className="flex-1 overflow-y-auto">
            <nav className="p-4 space-y-4">
              {["Home", "Categories", "Instructors"].map((text) => (
                <a
                  key={text}
                  href="#"
                  className="block text-lg font-medium  hover:text-blue-600 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  {text}
                </a>
              ))}
            </nav>

            <hr className="mx-4 border-gray-200" />

            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className=" font-medium">Theme</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className=" hover:text-gray-800"
                >
                  <Sun className="w-5 h-5" />
                </Button>
              </div>

              {/* <div className="flex items-center justify-between">
                <span className=" font-medium">Language</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className=" hover:text-gray-800 gap-1">
                      English <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>Spanish</DropdownMenuItem>
                    <DropdownMenuItem>French</DropdownMenuItem>
                    <DropdownMenuItem>German</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div> */}

              <div className="flex items-center justify-between">
                <span className=" font-medium">Notifications</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative hover:text-gray-800"
                  >
                    <Heart className="w-5 h-5" />
                    <Badge
                      variant="destructive"
                      className="absolute -top-1 -right-1 w-4 h-4 text-xs flex items-center justify-center p-0 min-w-0"
                    >
                      0
                    </Badge>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative hover:text-gray-800"
                  >
                    <Bell className="w-5 h-5" />
                    <Badge
                      variant="destructive"
                      className="absolute -top-1 -right-1 w-4 h-4 text-xs flex items-center justify-center p-0 min-w-0"
                    >
                      0
                    </Badge>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
