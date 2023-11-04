export default function Register() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 ">
        <div className="h-39 md:h-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg rounded-md p-2 hover:shadow-md">
          <h6 className="mt-2 mb-2 font-semibold text-md">Join winnig Team</h6>
          <ul>
            <p>
              On the scheduled date and time, our team arrives at the customers
              location for pickup (if selected).
            </p>
            <p>The customer hands over the laundry.</p>
          </ul>
        </div>
        <div className="h-100 md:h-100 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg rounded-md p-2 hover:shadow-md">
          <h6 className="mt-2 mb-2 font-semibold text-xl">
            Create Account Now
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="John"
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder=" Doe"
              />
            </div>
          </div>
          <div>
            <label
             
            >
              Price
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0.00"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
