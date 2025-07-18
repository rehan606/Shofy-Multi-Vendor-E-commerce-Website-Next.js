import Link from "next/link";
import { BiXCircle } from "react-icons/bi";


export default function PaymentCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="bg-white shadow-2xl rounded-2xl max-w-md w-full p-6 text-center animate-fade-in">
        <div className="flex justify-center mb-4">
          <BiXCircle className="text-red-500 w-20 h-20" />
        </div>
        <h1 className="text-2xl font-bold text-red-600 mb-2">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">
          Your payment was not completed. If this was a mistake, please try again. Contact support if the issue persists.
        </p>

        <div className="bg-red-100 rounded-lg p-4 mb-6 text-left text-sm text-red-700">
          <p><span className="font-medium">Reason:</span> Payment process interrupted</p>
          <p><span className="font-medium">Order ID:</span> #SHOPY123456789</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-2 rounded-lg transition duration-300"
          >
            Continue Shopping
          </Link>
          <Link
            href="/cart"
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-2 rounded-lg transition duration-300"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
