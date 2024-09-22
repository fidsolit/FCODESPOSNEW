import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-4xl font-bold text-white mb-4">
              Stay Connected!
            </h4>
            <h5 className="text-lg mt-0 mb-6 text-gray-300">
              Follow us on social media. We respond within 1-2 business days.
            </h5>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://twitter.com"
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://facebook.com"
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                href="https://dribbble.com"
                className="bg-white text-pink-500 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-dribbble" />
              </a>
              <a
                href="https://github.com"
                className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-400 text-sm font-semibold mb-4">
                  Useful Links
                </span>
                <ul className="list-unstyled space-y-2">
                  <li>
                    <Link
                      href="/pages/About"
                      className="text-gray-300 hover:text-white font-semibold transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://blog.creative-tim.com"
                      className="text-gray-300 hover:text-white font-semibold transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/creativetimofficial"
                      className="text-gray-300 hover:text-white font-semibold transition-colors"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.creative-tim.com/bootstrap-themes/free"
                      className="text-gray-300 hover:text-white font-semibold transition-colors"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-400 text-sm font-semibold mb-4">
                  Other Resources
                </span>
                <ul className="list-unstyled space-y-2">
                  <li>
                    <a
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md"
                      className="text-gray-300 hover:text-white font-semibold transition-colors"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://creative-tim.com/terms"
                      className="text-gray-300 hover:text-white font-semibold transition-colors"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://creative-tim.com/privacy"
                      className="text-gray-300 hover:text-white font-semibold transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://creative-tim.com/contact-us"
                      className="text-gray-300 hover:text-white font-semibold transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-400 font-semibold py-1">
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://www.facebook.com/FCodesCompany"
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                FCODES BY{" "}
              </a>
              <a
                href="https://www.facebook.com/PARDILLONABLEFIDELITO/"
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                FIDEL
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
