
import Link from 'next/link';
import { BiCheckCircle } from 'react-icons/bi';

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 ">
      <div className="bg-white shadow-2xl rounded-2xl max-w-md w-full p-6 text-center animate-fade-in">
        <div className="flex justify-center mb-4">
          <BiCheckCircle className="text-green-500 w-20 h-20" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been confirmed and a receipt has been sent to your email.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-gray-700 text-sm">
            <span className="font-medium">Order ID:</span> #SHOPY123456789
          </p>
          <p className="text-gray-700 text-sm">
            <span className="font-medium">Total:</span> $129.99
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            Go to Home
          </Link>
          <Link
            href="/orders"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition duration-300"
          >
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
