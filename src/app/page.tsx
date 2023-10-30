import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="mt-10 p-20">
        <h4>M4K - Steps to follow</h4>
        <h5 className="mt-4">Using Phone Number</h5>
        <ul className="mt-2">
          <p>
            Customers who prefer a more personal touch can contact the laundry
            business via phone for assistance, inquiries, or booking requests
            (+266 51895376).
          </p>
        </ul>
        <h5 className="mt-4">Facebook Page</h5>
        <ul className="mt-2">
          <p>
            Step 1. The Facebook page serves as an additional platform for our
            customers to learn about the laundry service.
          </p>
          <p>
            Step 2. It provides updates on promotions, special offers, and laundry care
            tips.
          </p>
          <p>
          Step 3. Customers can also reach out through Facebook Messenger for inquiries or support.
          </p>
        </ul>
        <h5 className="mt-4">Booking using Mobile Appication</h5>
        <ul className="mt-2">
          <p>Customers download the mobile app</p>
          <p>Sign in or create an account</p>
          <p>Select a date and time for pickup by booking</p>
        </ul>
      </div>
    </main>
  );
}
