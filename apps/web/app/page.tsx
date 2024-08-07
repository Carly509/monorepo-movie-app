'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Login from './auth/login/page';
import { useAuth } from '../utils/auth-context';

export default function Home() {
    const router = useRouter();
    const { isLoggedIn } = useAuth(); // Get the authentication status

    useEffect(() => {
      if (isLoggedIn) {
        // If the user is logged in, redirect to the dashboard or another page
        router.push('/movies'); // Change '/dashboard' to your desired route
      }
    }, [isLoggedIn, router]);

    // If the user is not logged in, render the Login component
    return (
      <main>
        {!isLoggedIn && <Login />}
      </main>
    );
  }
