// import { createTRPCNext } from '@trpc/next';
// import { httpBatchLink } from '@trpc/client';
// import type { AppRouter } from '../../api/src/trpc/trpc.router';

// function getBaseUrl() {
//   if (typeof window !== 'undefined') {
//     return '';
//   }
// //   if (process.env.VERCEL_URL) {
// //     return `https://${process.env.VERCEL_URL}`;
// //   }
//   return `http://localhost:3001`;
// }

// export const trpc = createTRPCNext<AppRouter>({
//   config() {
//     return {
//       links: [
//         httpBatchLink({
//           url: `${getBaseUrl()}/trpc`,
//         }),
//       ],
//     };
//   },
//   ssr: false,
// });

// export type ReactQueryOptions = Parameters<typeof trpc.createClient>[0];
