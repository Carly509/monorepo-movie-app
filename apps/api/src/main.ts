import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcService } from './trpc/trpc.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const trpcService = app.get(TrpcService);
  trpcService.applyMiddleware(app);

  await app.listen(3001);
}
bootstrap();
