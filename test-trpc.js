import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import fetch from 'node-fetch';

const trpc = createTRPCProxyClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3001/trpc',
      fetch: fetch,
    }),
  ],
});

async function main() {
  try {
    const registerResult = await trpc.register.mutate({
      email: 'testttt@example.com',
      password: 'password123',
      name: 'Testr Userrr',
    });
    console.log('Register result:', registerResult);

    const loginResult = await trpc.login.mutate({
      email: 'testttt@example.com',
      password: 'password123',
    });
    console.log('Login result:', loginResult);
    // Get movies (assuming the user ID is 1)
    const movies = await trpc.getMovies.query({ userId: 1 });
    console.log('Movies:', movies);

    // Add a movie
    const newMovie = await trpc.addMovie.mutate({
      userId: 1,
      title: 'Inception',
      publishingYear: 2010,
    });
    console.log('New movie:', newMovie);

    // Edit the movie
    const editedMovie = await trpc.editMovie.mutate({
      id: newMovie.id,
      userId: 1,
      title: 'Inception - Updated',
      publishingYear: 2010,
    });
    console.log('Edited movie:', editedMovie);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
