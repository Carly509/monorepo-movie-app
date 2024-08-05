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
      email: 'testtt@example.com',
      password: 'password123',
      name: 'Test Userrr',
    });
    console.log('Register result:', registerResult);

    const loginResult = await trpc.login.mutate({
      email: 'testtt@example.com',
      password: 'password123',
    });
    console.log('Login result:', loginResult);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
