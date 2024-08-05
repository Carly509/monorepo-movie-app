import { Module } from '@nestjs/common';
import { TrpcRouter } from './trpc.router';
import { TrpcService } from './trpc.service';
import { AuthModule } from '../auth/auth.module';
// import { MoviesModule } from '../movies/movies.module';

@Module({
  imports: [AuthModule],
  providers: [TrpcRouter, TrpcService],
  exports: [TrpcService],
})
export class TrpcModule {}
