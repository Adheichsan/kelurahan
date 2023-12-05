import React, { useState } from 'react';
import Image from 'next/image';
import MetaHead from '@/components/MetaHead';
import { useRouter } from 'next/router';

function SignUp() {
  const router = useRouter();
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError(null);

      if (!validateEmail(email)) {
        setError('InvalidEmail');
        return;
      }

      if (password.length < 8) {
        setError('WeakPassword');
        return;
      }

      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        router.push('/dashboard');
      } else {
        const data = await response.json();
        console.error('Failed to create user account:', data.error);

        if (data.error === 'InvalidEmail') {
          setError('InvalidEmail');
        } else if (data.error === 'WeakPassword') {
          setError('WeakPassword');
        } else {
          setError('UnknownError');
        }
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setError('UnknownError');
    } finally {
      setIsLoading(false);
    }

    const validateEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email);
    };
  };

  return (
    <>
      <MetaHead title="Register | Kelurahan Patriot" />
      <div className='pt-20'>
        <div className="flex flex-col-reverse items-center justify-center md:flex-row md:h-screen">
          <div className="w-full md:w-1/2 md:order-2">
            <Image src="/images/kewec.jpg" alt="Login Image" width={600} height={400} />
          </div>
          <div className="w-full md:w-1/2 md:order-1">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-full max-w-md space-y-8">
                <div>
                  <h1 className="text-2xl font-bold">Create an account</h1>
                  <p className="mt-2 text-gray-600">
                    Join us by creating a new account.
                  </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSignUpSubmit}>
                  <div>
                  {error && (
                      <div className="text-red-500 mt-2">
                        {error === 'InvalidEmail' && 'Invalid email address.'}
                        {error === 'WeakPassword' && 'Password must be at least 8 characters long.'}
                        {error === 'UnknownError' && 'An unexpected error occurred. Please try again later.'}
                      </div>
                    )}
                    <label htmlFor="name" className="block font-bold text-gray-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                      value={fullname}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-bold text-gray-700">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    {/* Render loading indicator conditionally */}
                    <button
                      type="submit"
                      className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
