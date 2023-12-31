export default function MobileApplication() {
  return (
    <>
      <h5 className="mt-4 font-semibold text-lg">
        Option 3 : Booking using Mobile Appication
      </h5>
      {/* <p>Download our mobile app  <a href="https://www.facebook.com/profile.php?id=61551388465746" className="text-blue-500 font-semibold underline">here</a></p> */}
      <p>
        Whatsapp our team to get app{" "}
        <a
          href="https://wa.me/51895376"
          className="text-blue-500 font-semibold underline"
        >
          here
        </a>
      </p>
      <ul className="mt-2">
        <p>Step 1. Customers download the mobile app</p>
        <p>Step 2. Sign in or create an account</p>
        <p>Step 3. Select a date and time for pickup by booking</p>
      </ul>
      <h6 className="mt-4  mb-3 font-semibold text-xl antialiased hover:subpixel-antialiased">
        Featiures of Mobile Application
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="h-39 md:h-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg rounded-md p-2 hover:shadow-md">
          <h6 className="mt-2 mb-2 font-semibold text-md">Laundry Pickup</h6>
          <ul>
            <p>
              On the scheduled date and time, our team arrives at the customers
              location for pickup (if selected).
            </p>
            <p>The customer hands over the laundry.</p>
          </ul>
        </div>
        <div className="h-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg rounded-md p-2">
          <h6 className="mt-2 font-semibold text-md">Laundry Processing</h6>
          <ul>
            <p>
              Our laundry professionals sort, wash, and fold the laundry as per
              the chosen service.
            </p>
          </ul>
        </div>
        <div className="h-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg rounded-md p-2">
        <h6 className="mt-2 font-semibold text-md">Quality Assurance</h6>
      <ul>
        <p>
          Each item is carefully inspected to ensure quality and cleanliness.
        </p>
      </ul>
        </div>
        <div className="h-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg rounded-md p-2">
        <h6 className="mt-2 font-semibold text-md">Delivery (if selected)</h6>
      <ul>
        <p>
          On the agreed-upon date and time, the clean and neatly folded laundry
          is delivered back to the customers doorstep.
        </p>
      </ul>
        </div>
        <div className="h-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg rounded-md p-2">
        <h6 className="mt-2 font-semibold text-md">Notification</h6>
      <ul>
        <p>
          Customers receive notifications at each stage of the process (pickup,
          processing, and delivery).
        </p>
      </ul>
        </div>
        <div className="h-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg rounded-md p-2">
        <h6 className="mt-2 font-semibold text-md">Feedback</h6>
      <ul>
      
        <p>
          After delivery, customers have the opportunity to provide feedback
          through the app.
        </p>
        </ul>
        </div>
      </div>
      {/* <h6 className="mt-2 font-semibold text-md">Laundry Pickup</h6>
      <ul>
        <p>
          On the scheduled date and time, our team arrives at the customers
          location for pickup (if selected).
        </p>
        <p>The customer hands over the laundry.</p>
      </ul>

      <h6 className="mt-2 font-semibold text-md">Laundry Processing</h6>
      <ul>
        <p>
          Our laundry professionals sort, wash, and fold the laundry as per the
          chosen service.
        </p>
      </ul>

      <h6 className="mt-2 font-semibold text-md">Quality Assurance</h6>
      <ul>
        <p>
          Each item is carefully inspected to ensure quality and cleanliness.
        </p>
      </ul>
      <h6 className="mt-2 font-semibold text-md">Delivery (if selected)</h6>
      <ul>
        <p>
          On the agreed-upon date and time, the clean and neatly folded laundry
          is delivered back to the customers doorstep.
        </p>
      </ul> */}
      {/* <h6 className="mt-2 font-semibold text-md">Notification and Feedback</h6>
      <ul>
        <p>
          Customers receive notifications at each stage of the process (pickup,
          processing, and delivery).
        </p>
        <p>
          After delivery, customers have the opportunity to provide feedback
          through the app.
        </p>
      </ul> */}
    </>
  );
}
