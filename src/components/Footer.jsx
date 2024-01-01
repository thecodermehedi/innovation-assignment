import {Link} from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <MaxWidthWrapper className={"py-10"}>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start items-center">
            <Link to="#" className="flex items-center gap-2">
              <img className="size-7" src="/favicon.svg" />
              <h1 className="font-bold text-3xl text-blue-600">
                Mar<span className="text-black">Ket</span>
              </h1>
            </Link>
          </div>
          <p className="mt-4 sm:mt-0 text-center text-sm text-gray-800 lg:mt-0 lg:text-right">
            Copyright &copy; 2023.
          </p>
          <a
            href="https://thecodermehedi.me"
            className="underline font-semibold text-gray-800 hover:text-black text-center text-sm mt-4 lg:mt-0 lg:text-right"
            target="_blank"
            rel="noreferrer"
          >
            @thecodermehedi
          </a>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
