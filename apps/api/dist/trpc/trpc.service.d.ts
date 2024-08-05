import { INestApplication } from '@nestjs/common';
import { TrpcRouter } from './trpc.router';
export declare class TrpcService {
    private readonly trpcRouter;
    constructor(trpcRouter: TrpcRouter);
    applyMiddleware(app: INestApplication): void;
}
