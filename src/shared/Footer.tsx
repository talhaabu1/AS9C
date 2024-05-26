import { Facebook, Github, Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className=" bg-green-50/60 box mt-20">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#">
              <Image src="/logo.png" width={55} height={55} alt="icon" />
            </a>
            <div className="flex flex-wrap justify-center mt-6 -mx-4">
              <p
                className="mx-4 text-base font-bold  text-green-600"
                aria-label="Reddit">
                Quick
              </p>
              <p
                className="mx-4 text-base font-bold   text-green-600"
                aria-label="Reddit">
                Responsibility
              </p>
              <p
                className="mx-4 text-base font-bold   text-green-600"
                aria-label="Reddit">
                Fast
              </p>
              <p
                className="mx-4 text-base font-bold   text-green-600"
                aria-label="Reddit">
                Service
              </p>
              <p
                className="mx-4 text-base font-bold   text-green-600 "
                aria-label="Reddit">
                All Time
              </p>
            </div>
          </div>
          <div className="text-green-500 flex flex-col items-center  sm:flex-row  sm:justify-around my-2 space-y-2">
            <h3 className=" flex items-center gap-x-2 ">
              <Mail />
              talha563280@gmail.com
            </h3>
            <h3 className=" flex items-center gap-x-2">
              <Phone />
              01812931537
            </h3>
          </div>

          <hr className="my-6 border-green-700 md:my-3 " />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm font-medium text-green-500">
              © Copyright 2024. All Rights Reserved.
            </p>
            <div className="flex -mx-2 mt-2 md:mt-0">
              <a
                href="https://www.facebook.com/talhauser"
                className="mx-2 text-green-500"
                aria-label="Facebook"
                target="_blank">
                <Facebook />
              </a>

              <a
                href="https://github.com/talhaabu1"
                target="_blank"
                className="mx-2 text-green-500"
                aria-label="Github">
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/md-talha-66b4a8248/"
                target="_blank"
                className="mx-2 text-green-500"
                aria-label="Linkedin">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
