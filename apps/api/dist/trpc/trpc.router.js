"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrpcRouter = void 0;
const common_1 = require("@nestjs/common");
const server_1 = require("@trpc/server");
const zod_1 = require("zod");
const auth_service_1 = require("../auth/auth.service");
let TrpcRouter = class TrpcRouter {
    constructor(authService) {
        this.authService = authService;
        this.t = server_1.initTRPC.create();
        this.appRouter = this.t.router({
            register: this.t.procedure
                .input(zod_1.z.object({
                email: zod_1.z.string().email(),
                password: zod_1.z.string().min(6),
                name: zod_1.z.string(),
            }))
                .mutation(async ({ input }) => {
                return this.authService.register(input.email, input.password, input.name);
            }),
            login: this.t.procedure
                .input(zod_1.z.object({ email: zod_1.z.string().email(), password: zod_1.z.string() }))
                .mutation(async ({ input }) => {
                return this.authService.login(input.email, input.password);
            }),
        });
    }
};
exports.TrpcRouter = TrpcRouter;
exports.TrpcRouter = TrpcRouter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], TrpcRouter);
//# sourceMappingURL=trpc.router.js.map