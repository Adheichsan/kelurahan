import React from 'react';
import Image from 'next/image';
import MetaHead from '@/components/MetaHead';
import { useRouter } from 'next/router';

function SignIn() {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push('/form/sign-up');
  };
  return (
    <><MetaHead
      title="Login | Kelurahan Patriot" />
      <div className='pt-20'>
        <div className="flex flex-col-reverse items-center justify-center md:flex-row md:h-screen">
          <div className="w-full md:w-1/2 md:order-2">
            <Image src="/images/kewec.jpg" alt="Login Image" width={600} height={400} />
          </div>
          <div className="w-full md:w-1/2 md:order-1">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-full max-w-md space-y-8">
                <div>
                  <h1 className="text-2xl font-bold">Welcome back!</h1>
                  <p className="mt-2 text-gray-600">
                    Please sign in to your account.
                  </p>
                </div>
                <form className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="email" className="block font-bold text-gray-700">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                      required />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block font-bold text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                      required />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                    >
                      Sign In
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={handleRegisterClick}
                      className="w-full px-4 py-3 font-bold text-indigo-500 border border-indigo-500 rounded-md hover:bg-indigo-200 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
}

export default SignIn;
