import {Link} from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <MaxWidthWrapper className={"py-10"}>
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Link to="#" className="flex items-center gap-2">
              <img
                className="size-7"
                src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
              />
              <h1 className="font-bold text-3xl text-blue-600">
                Mar<span className="text-black">Ket</span>
              </h1>
            </Link>
          </div>
          <p className="mt-4 text-center text-sm text-gray-800 lg:mt-0 lg:text-right">
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
