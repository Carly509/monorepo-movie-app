'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Login from './auth/login/page';
import { useAuth } from '../utils/auth-context';

export default function Home() {
    const router = useRouter();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
      if (isLoggedIn) {
        router.push('/movies/movies-list');
      } else {
        router.push('/auth/login');
      }
    }, [isLoggedIn, router]);

    return (
      <main>
        {!isLoggedIn && <Login />}
      </main>
    );
}
