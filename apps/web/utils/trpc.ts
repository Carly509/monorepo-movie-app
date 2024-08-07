// import { createTRPCNext } from '@trpc/next';
// import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../api/src/trpc/trpc.router';
import {
    createTRPCReact,
  } from '@trpc/react-query';


export const trpc: ReturnType<typeof createTRPCReact<AppRouter>> = createTRPCReact<AppRouter>();
