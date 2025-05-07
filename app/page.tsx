import Navbar from "@/ui/components/navbar";
import Image from "next/image";
import 'animate.css';


export default function Home() {
    return (
      <>
        <Navbar />
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-8 bg-gradient-to-b from-blue-100 to-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mt-4 mb-4 leading-tight animate__animated animate__fadeInUp">
              Plan Trips Visually.
              <br className="sm:hidden" />
              Travel Inspired.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-md mb-8 animate__animated animate__fadeInUp">
            Trippings is your all-in-one travel moodboard and planner.
            Create visual itineraries, pin locations, organize packing lists,
            and collaborate with friends — anytime, anywhere.
          </p>
          <div className="relative w-full max-w-2xl mb-8 animate__animated animate__fadeInUp">
            <Image
              src="/hero-image.jpg"
              alt="Hero Image"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 animate__animated animate__fadeInUp">
              <a 
              href="getting-started" 
              className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold text-center hover:bg-blue-700 transition"
              >
              Get Started
              </a>
            </div>
            
          </div>
        </section>

      </>
    );
  }
