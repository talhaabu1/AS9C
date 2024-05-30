'use client';

import { Button } from '@material-tailwind/react';
import { Calendar, MapPin, MoveRight, ScanSearch } from 'lucide-react';

const LostItemSection = () => {
  return (
    <section className="m-4 md:m-8">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-green-500 to-green-100 bg-clip-text text-transparent">
          Recent Lost Item Reports
        </h2>
        <p className="text-[#006400]">Report your lost item every time....</p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col items-center p-4 border-4 border-dashed border-green-300/40 rounded-lg shadow-xl shadow-green-200/35 transition-shadow ease-in-out hover:shadow-green-200">
          <ScanSearch size={50} className="text-green-500" />
          <h3 className="my-3 text-3xl font-semibold text-green-500">
            Product
          </h3>
          <div className="space-y-2">
            <p className=" text-center text-[#006400]">
              ReclaimIt is dedicated to helping you find your lost belongings.
              Easily report lost items, search found
            </p>
            <div className=" flex justify-around">
              <div className=" flex items-center text-green-400 font-semibold">
                <Calendar size={30} />
                <h5 className=" text-lg">10/20/2024</h5>
              </div>
              <div className=" flex items-center text-green-400 font-semibold">
                <MapPin size={30} />
                <h5 className=" text-lg">Dhaka,Gandaria</h5>
              </div>
            </div>
          </div>
          <Button variant="text" className="flex items-center gap-3 mt-3">
            Read More <MoveRight />
          </Button>
        </div>
        <div className="flex flex-col items-center p-4 border-4 border-dashed border-green-300/40 rounded-lg shadow-xl shadow-green-200/35 transition-shadow ease-in-out hover:shadow-green-200">
          <ScanSearch size={50} className="text-green-500" />
          <h3 className="my-3 text-3xl font-semibold text-green-500">
            Product
          </h3>
          <div className="space-y-2">
            <p className=" text-center text-[#006400]">
              ReclaimIt is dedicated to helping you find your lost belongings.
              Easily report lost items, search found
            </p>
            <div className=" flex justify-around">
              <div className=" flex items-center text-green-400 font-semibold">
                <Calendar size={30} />
                <h5 className=" text-lg">10/20/2024</h5>
              </div>
              <div className=" flex items-center text-green-400 font-semibold">
                <MapPin size={30} />
                <h5 className=" text-lg">Dhaka,Gandaria</h5>
              </div>
            </div>
          </div>
          <Button variant="text" className="flex items-center gap-3 mt-3">
            Read More <MoveRight />
          </Button>
        </div>
        <div className="flex flex-col items-center p-4 border-4 border-dashed border-green-300/40 rounded-lg shadow-xl shadow-green-200/35 transition-shadow ease-in-out hover:shadow-green-200">
          <ScanSearch size={50} className="text-green-500" />
          <h3 className="my-3 text-3xl font-semibold text-green-500">
            Product
          </h3>
          <div className="space-y-2">
            <p className=" text-center text-[#006400]">
              ReclaimIt is dedicated to helping you find your lost belongings.
              Easily report lost items, search found
            </p>
            <div className=" flex justify-around">
              <div className=" flex items-center text-green-400 font-semibold">
                <Calendar size={30} />
                <h5 className=" text-lg">10/20/2024</h5>
              </div>
              <div className=" flex items-center text-green-400 font-semibold">
                <MapPin size={30} />
                <h5 className=" text-lg">Dhaka,Gandaria</h5>
              </div>
            </div>
          </div>
          <Button variant="text" className="flex items-center gap-3 mt-3">
            Read More <MoveRight />
          </Button>
        </div>
        <div className="flex flex-col items-center p-4 border-4 border-dashed border-green-300/40 rounded-lg shadow-xl shadow-green-200/35 transition-shadow ease-in-out hover:shadow-green-200">
          <ScanSearch size={50} className="text-green-500" />
          <h3 className="my-3 text-3xl font-semibold text-green-500">
            Product
          </h3>
          <div className="space-y-2">
            <p className=" text-center text-[#006400]">
              ReclaimIt is dedicated to helping you find your lost belongings.
              Easily report lost items, search found
            </p>
            <div className=" flex justify-around">
              <div className=" flex items-center text-green-400 font-semibold">
                <Calendar size={30} />
                <h5 className=" text-lg">10/20/2024</h5>
              </div>
              <div className=" flex items-center text-green-400 font-semibold">
                <MapPin size={30} />
                <h5 className=" text-lg">Dhaka,Gandaria</h5>
              </div>
            </div>
          </div>
          <Button variant="text" className="flex items-center gap-3 mt-3">
            Read More <MoveRight />
          </Button>
        </div>
        <div className="flex flex-col items-center p-4 border-4 border-dashed border-green-300/40 rounded-lg shadow-xl shadow-green-200/35 transition-shadow ease-in-out hover:shadow-green-200">
          <ScanSearch size={50} className="text-green-500" />
          <h3 className="my-3 text-3xl font-semibold text-green-500">
            Product
          </h3>
          <div className="space-y-2">
            <p className=" text-center text-[#006400]">
              ReclaimIt is dedicated to helping you find your lost belongings.
              Easily report lost items, search found
            </p>
            <div className=" flex justify-around">
              <div className=" flex items-center text-green-400 font-semibold">
                <Calendar size={30} />
                <h5 className=" text-lg">10/20/2024</h5>
              </div>
              <div className=" flex items-center text-green-400 font-semibold">
                <MapPin size={30} />
                <h5 className=" text-lg">Dhaka,Gandaria</h5>
              </div>
            </div>
          </div>
          <Button variant="text" className="flex items-center gap-3 mt-3">
            Read More <MoveRight />
          </Button>
        </div>
        <div className="flex flex-col items-center p-4 border-4 border-dashed border-green-300/40 rounded-lg shadow-xl shadow-green-200/35 transition-shadow ease-in-out hover:shadow-green-200">
          <ScanSearch size={50} className="text-green-500" />
          <h3 className="my-3 text-3xl font-semibold text-green-500">
            Product
          </h3>
          <div className="space-y-2">
            <p className=" text-center text-[#006400]">
              ReclaimIt is dedicated to helping you find your lost belongings.
              Easily report lost items, search found
            </p>
            <div className=" flex justify-around">
              <div className=" flex items-center text-green-400 font-semibold">
                <Calendar size={30} />
                <h5 className=" text-lg">10/20/2024</h5>
              </div>
              <div className=" flex items-center text-green-400 font-semibold">
                <MapPin size={30} />
                <h5 className=" text-lg">Dhaka,Gandaria</h5>
              </div>
            </div>
          </div>
          <Button variant="text" className="flex items-center gap-3 mt-3">
            Read More <MoveRight />
          </Button>
        </div>
      </div>
      <br />
      <br className="hidden md:block" />
    </section>
  );
};

export default LostItemSection;
