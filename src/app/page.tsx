import Image from "next/image";
import Facebook from "./_components/facebook";

export default function Home() {
  return (
    <main>
      <div className="mt-10 p-20">
        <h4 className="font-semibold text-2xl text-center">M4K - Steps to follow</h4>
        <h5 className="mt-4 font-semibold">Using Phone Number</h5>
        <ul className="mt-2">
          <p>
            Customers who prefer a more personal touch can contact the laundry
            business via phone for assistance, inquiries, or booking requests
            (+266 51895376).
          </p>
        </ul>

        <Facebook />
  
        <h5 className="mt-4 font-semibold">Booking using Mobile Appication</h5>
        <ul className="mt-2">
          <p>Step 1. Customers download the mobile app</p>
          <p>Step 2. Sign in or create an account</p>
          <p>Step 3. Select a date and time for pickup by booking</p>
        </ul>
      </div>
    </main>
  );
}
