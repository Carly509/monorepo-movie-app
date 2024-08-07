'use client';

import { trpc } from '../../utils/trpc';
import { useAuth } from '../../utils/auth-context';
import { useRouter } from 'next/navigation';

export default function Movies() {

  const { logout, userId } = useAuth();
  const { data: movies, isLoading } = trpc.getMovies.useQuery({ userId });
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Movies</h1>
      {movies?.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
      <button onClick={() => {
        logout();
        router.push('/');
      }}>Logout</button>
    </div>
  );
}
