import { DownloadIcon } from "@heroicons/react/solid";

function Nav() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 text-gray-400">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0 ">
          <a className="ml-3 text-xl" href="#about">
            Raphael Bienholz
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="./assets/resume.pdf"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 flex rounded-md px-3.5 py-2.5 text-sm font-semibold text-indigo-400 border-2 border-indigo-400 cursor-pointer rounded-md transition ease-in-out hover:-translate-y-1  hover:-translate-x-1 hover:shadow-custom"
        >
          Resume
          <DownloadIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

export default Nav;
