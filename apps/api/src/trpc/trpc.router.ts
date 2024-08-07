import { Injectable } from '@nestjs/common';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { AuthService } from '../auth/auth.service';
import { MoviesService } from '../movies/movies.service';

@Injectable()
export class TrpcRouter {
  constructor(
    private authService: AuthService,
    private moviesService: MoviesService,
  ) {}

  t = initTRPC.create();

  appRouter = this.t.router({
    register: this.t.procedure
      .input(
        z.object({
          email: z.string().email(),
          password: z.string().min(6),
          name: z.string(),
        }),
      )
      .mutation(async ({ input }) => {
        return this.authService.register(
          input.email,
          input.password,
          input.name,
        );
      }),

    login: this.t.procedure
      .input(z.object({ email: z.string().email(), password: z.string() }))
      .mutation(async ({ input }) => {
        return this.authService.login(input.email, input.password);
      }),

    getMovies: this.t.procedure
      .input(z.object({ userId: z.number() }))
      .query(async ({ input }) => {
        return this.moviesService.getMovies(input.userId);
      }),

    addMovie: this.t.procedure
      .input(
        z.object({
          userId: z.number(),
          title: z.string(),
          publishingYear: z.number(),
          imageUrl: z.string(),
        }),
      )
      .mutation(async ({ input }) => {
        return this.moviesService.addMovie(
          input.userId,
          input.title,
          input.publishingYear,
          input.imageUrl,
        );
      }),

    editMovie: this.t.procedure
      .input(
        z.object({
          id: z.number(),
          userId: z.number(),
          title: z.string(),
          publishingYear: z.number(),
          imageUrl: z.string(),
        }),
      )
      .mutation(async ({ input }) => {
        return this.moviesService.editMovie(
          input.id,
          input.userId,
          input.title,
          input.publishingYear,
          input.imageUrl,
        );
      }),
  });
}

export type AppRouter = TrpcRouter['appRouter'];
