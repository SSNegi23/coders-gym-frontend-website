import {
  FaDumbbell,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl">
      <div className="container">
        <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-white">
          {/* brand info section */}
          <div className="py-8 px-4 space-y-4">
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
              <FaDumbbell />
              <p>Coders</p>
              <p className="text-secondary">Gym</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea
              totam itaque autem officia sint sequi obcaecati rerum reiciendis
              corrupti?
            </p>
            <div className="flex items-center justify-start gap-5 !mt-6">
              <Link to={"#"}>
                <HiLocationMarker className="text-3xl" />
              </Link>
              <Link to={"#"}>
                <FaInstagram className="text-3xl" />
              </Link>
              <Link to={"#"}>
                <FaFacebook className="text-3xl" />
              </Link>
              <Link to={"#"}>
                <FaLinkedin className="text-3xl" />
              </Link>
            </div>
          </div>
          {/* Footer links */}
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Important Links
              </h1>
              <ul>
                <li>
                  <Link to={"#"}>Home</Link>
                </li>
                <li>
                  <Link to={"#"}>About</Link>
                </li>
                <li>
                  <Link to={"#"}>Services</Link>
                </li>
                <li>
                  <Link to={"#"}>Login</Link>
                </li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Company Links
              </h1>
              <ul>
                <li>
                  <Link to={"#"}>Our Services</Link>
                </li>
                <li>
                  <Link to={"#"}>Contact</Link>
                </li>
                <li>
                  <Link to={"#"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={"#"}>Login</Link>
                </li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                Resources
              </h1>
              <ul>
                <li>
                  <Link to={"#"}>Home</Link>
                </li>
                <li>
                  <Link to={"#"}>About</Link>
                </li>
                <li>
                  <Link to={"#"}>Services</Link>
                </li>
                <li>
                  <Link to={"#"}>Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* copyright section */}
        <div className="text-center py-6 border-t-2 border-gray-300/10">
          <span className="text-sm text-gray-300 opacity-70">
            &copy;copyright 2024 The Coding Journey
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
