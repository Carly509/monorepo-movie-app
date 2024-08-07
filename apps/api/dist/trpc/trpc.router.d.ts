import { AuthService } from '../auth/auth.service';
import { MoviesService } from '../movies/movies.service';
export declare class TrpcRouter {
    private authService;
    private moviesService;
    constructor(authService: AuthService, moviesService: MoviesService);
    t: {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>;
        procedure: import("@trpc/server").ProcedureBuilder<{
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _ctx_out: object;
            _input_in: typeof import("@trpc/server").unsetMarker;
            _input_out: typeof import("@trpc/server").unsetMarker;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
            _meta: object;
        }>;
        middleware: <TNewParams extends import("@trpc/server").ProcedureParams<import("@trpc/server").AnyRootConfig, unknown, unknown, unknown, unknown, unknown, unknown>>(fn: import("@trpc/server").MiddlewareFunction<{
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _ctx_out: {};
            _input_out: typeof import("@trpc/server").unsetMarker;
            _input_in: unknown;
            _output_in: unknown;
            _output_out: unknown;
            _meta: object;
        }, TNewParams>) => import("@trpc/server").MiddlewareBuilder<{
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _ctx_out: {};
            _input_out: typeof import("@trpc/server").unsetMarker;
            _input_in: unknown;
            _output_in: unknown;
            _output_out: unknown;
            _meta: object;
        }, TNewParams>;
        router: <TProcRouterRecord extends import("@trpc/server").ProcedureRouterRecord>(procedures: TProcRouterRecord) => import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>, TProcRouterRecord>;
        mergeRouters: typeof import("@trpc/server").mergeRouters;
        createCallerFactory: <TRouter extends import("@trpc/server").Router<import("@trpc/server").AnyRouterDef<import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: import("@trpc/server").DataTransformerOptions;
        }>, any>>>(router: TRouter) => import("@trpc/server").RouterCaller<TRouter["_def"]>;
    };
    appRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: import("@trpc/server").DataTransformerOptions;
    }>, {
        register: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                email?: string;
                password?: string;
                name?: string;
            };
            _input_out: {
                email?: string;
                password?: string;
                name?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            access_token: string;
        }>;
        login: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                email?: string;
                password?: string;
            };
            _input_out: {
                email?: string;
                password?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            access_token: string;
        }>;
        getMovies: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                userId?: number;
            };
            _input_out: {
                userId?: number;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            id: number;
            title: string;
            publishingYear: number;
            imageUrl: string;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
        }[]>;
        addMovie: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                title?: string;
                publishingYear?: number;
                userId?: number;
            };
            _input_out: {
                title?: string;
                publishingYear?: number;
                userId?: number;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            id: number;
            title: string;
            publishingYear: number;
            imageUrl: string;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
        }>;
        editMovie: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: import("@trpc/server").DataTransformerOptions;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                id?: number;
                title?: string;
                publishingYear?: number;
                userId?: number;
            };
            _input_out: {
                id?: number;
                title?: string;
                publishingYear?: number;
                userId?: number;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            id: number;
            title: string;
            publishingYear: number;
            imageUrl: string;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
        }>;
    }>;
}
export type AppRouter = TrpcRouter['appRouter'];
