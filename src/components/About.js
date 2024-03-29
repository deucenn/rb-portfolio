import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center text-gray-400 relative">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Raphael.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus? */}
            Building responsive and performant websites for the modern world.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/deucenn" className="hover:text-gray-200 hover:text-lg">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/raphabnhz/" className="hover:text-gray-200 hover:text-lg">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/deucencs" className="hover:text-gray-200 hover:text-lg">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/raphael-bienholz-71562425a/" className="hover:text-gray-200 hover:text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={"../assets/hero-pic.jpg"}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
