import { BadgeInfo, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-0 md:mt-16 ">
      <div className="grid gap-10 lg:grid-cols-2 ">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <BadgeInfo size={40} className="text-green-300" />
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6  text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none bg-gradient-to-r from-green-500 to-green-100 bg-clip-text text-transparent">
              About Our Mission
            </h2>
            <p className="text-base text-[#006400] md:text-lg">
              Our Lost and Found website helps reunite people with their lost
              belongings. Users can report and search for lost or found items
              easily. We aim to provide a reliable platform for quick recovery
              of valuables. Join us in fostering community cooperation and
              reducing the stress of lost items.
            </p>
          </div>
          <div>
            <Link
              href="/about-us"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 text-green-500 hover:text-green-100">
              Learn more
              <ChevronRight size={25} fontWeight={600} />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -z-20 opacity-25 blur-xl">
            <defs>
              <linearGradient
                id="fill"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                gradientTransform="rotate(45 0.5 0.5)">
                <stop offset="0%" stopColor="#81C784"></stop>
                <stop offset="100%" stopColor="#4CAF50"></stop>
              </linearGradient>
            </defs>
            <path
              d="M55.5,61.5Q37,73,37,50Q37,27,55.5,38.5Q74,50,55.5,61.5Z"
              stroke="none"
              strokeWidth="0"
              fill="url(#fill)"></path>
          </svg>
          <div className="flex flex-col items-end px-3">
            <Image
              draggable="false"
              className="object-cover mb-6 rounded-2xl shadow-2xl h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://plus.unsplash.com/premium_photo-1661311950994-d263ea9681a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9zdCUyMGFuZCUyMGZvdW5kfGVufDB8fDB8fHww"
              alt="logo1"
              width={200}
              height={200}
            />
            <Image
              draggable="false"
              className="object-cover w-20 h-20 rounded-2xl shadow-2xl sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://plus.unsplash.com/premium_photo-1661297433665-870517c1cf6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvc3QlMjBhbmQlMjBmb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
              alt="logo2"
              width={200}
              height={200}
            />
          </div>
          <div className="px-3">
            <Image
              draggable="false"
              className="object-cover w-40 h-40 rounded-2xl shadow-2xl sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://images.pexels.com/photos/5589432/pexels-photo-5589432.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
