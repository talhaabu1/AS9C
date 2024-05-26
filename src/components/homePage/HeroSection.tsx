'use client';

import { Button } from '@material-tailwind/react';
import { NotebookPen, ScanSearch } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative">
      <ScanSearch
        size={150}
        className="text-green-300  absolute left-40 top-20 hidden lg:block animate-pulse"
      />
      <NotebookPen
        size={150}
        className="text-green-300 absolute right-40 bottom-20 hidden lg:block animate-bounce-slow"
      />
      <span className="h-10 w-10 md:w-14 md:h-20 bg-green-300 absolute right-0 top-5 md:top-0 rounded-l-xl opacity-60 blur-sm"></span>
      <span className="h-10 w-10 md:w-14 md:h-20 bg-green-300 absolute bottom-5 md:bottom-0 rounded-r-xl opacity-60 blur-sm"></span>
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl">
        <h1 className="text-4xl font-bold  sm:text-5xl bg-gradient-to-r from-green-500 to-green-100 bg-clip-text text-transparent">
          Find what you lost, reunite what you found!
        </h1>
        <p className=" mt-5 mb-5 md:mb-5 text-[#006400] font-medium ">
          A Lost and Found website allows users to report and search for lost or
          found items. It features listings with descriptions and photos to help
          reunite owners with their belongings. Users can easily communicate
          with each other through provided contact information.
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          <Button variant="outlined" className="tracking-wide ">
            Report a Lost Item
          </Button>
          <Button className="tracking-wide ">Report a Found Item</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
