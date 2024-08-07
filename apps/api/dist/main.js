"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const trpc_service_1 = require("./trpc/trpc.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    const trpcService = app.get(trpc_service_1.TrpcService);
    trpcService.applyMiddleware(app);
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map