export default function Register() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 ">
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
        <div className="h-100 md:h-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg rounded-md p-2 hover:shadow-md">
          <h6 className="mt-2 mb-2 font-semibold text-md">Create Account Now</h6>
          <label>Full Name</label>
          <input  placeholder="John Doe" className="w-full"/>
          
        </div>
      </div>
    </>
  );
}
