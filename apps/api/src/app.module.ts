import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MoviesModule } from './movies/movies.module';
import { TrpcModule } from './trpc/trpc.module';

@Module({
  imports: [AuthModule, TrpcModule, MoviesModule],
})
export class AppModule {}
