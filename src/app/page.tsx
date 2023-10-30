import Image from "next/image";
import Facebook from "./_components/facebook";
import MobileApplication from "./_components/mobileApp";
import Box from "./_components/box";

export default function Home() {
  return (
    <main>
      <div className="mt-5 p-5 lg:p-10 shadow-md">
        {/* <h4 className="font-semibold text-2xl text-center underline underline-offset-1 text-transform: capitalize;">
          M4K - Steps to follow
        </h4> */}
        <div className="shadow-md h-16 w-full p-4 mt-2 bg-cyan-500 rounded-lg shadow-cyan-500/50 hover:shadow-lg">
          <p className="text-2xl text-white">M4K LAUNDRY SERVICES - STEPS TO FOLLOW</p>
        </div>
        {/* <div className="h-16 bg-gradient-to-r from-purple-500 to-pink-500 mt-5 rounded-2xl p-5">
          <p className="text-2xl text-white text-center">
            M4K LAUNDRY SERVICES - Steps to follow
          </p>
        </div> */}

        <h5 className="mt-4 font-semibold text-lg">
          Option 1 : Using Phone Number
        </h5>
        <ul className="mt-2">
          <p className="hover:transition-all">
            Customers who prefer a more personal touch can contact the laundry
            business via phone for assistance, inquiries, or booking requests
            (+266 51895376).
          </p>
        </ul>

        <Facebook />
        <MobileApplication />
      </div>
    </main>
  );
}
