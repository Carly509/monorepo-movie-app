// 'use client';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { httpBatchLink } from '@trpc/client';
// import React, { useState } from 'react';
// import { trpc } from './trpc';

// export function TrpcProvider({ children }: { children: React.ReactNode }) {
//   const [queryClient] = useState(() => new QueryClient({}));
//   const [trpcClient] = useState(() =>
//     trpc.createClient({
//       links: [
//         httpBatchLink({
//           url: 'http://localhost:3001/trpc',
//         }),
//       ],
//     })
//   );

//   return (
//     <trpc.Provider client={trpcClient} queryClient={queryClient}>
//       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     </trpc.Provider>
//   );
// }
