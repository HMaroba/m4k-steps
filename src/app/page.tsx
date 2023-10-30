import Image from "next/image";
import Facebook from "./_components/facebook";
import MobileApplication from "./_components/mobileApp";

export default function Home() {
  return (
    <main>
      <div className="mt-5 p-5 lg:p-10 shadow-md" >
        <h4 className="font-semibold text-2xl text-center underline underline-offset-1 text-transform: capitalize;">
          M4K - Steps to follow
        </h4>
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
        <div className="shadow-md ..."></div>

        <Facebook />
        <MobileApplication />
      </div>
    </main>
  );
}
