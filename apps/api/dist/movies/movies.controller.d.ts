import { MoviesService } from './movies.service';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getMovies(req: any): Promise<{
        id: number;
        title: string;
        publishingYear: number;
        imageUrl: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    addMovie(req: any, body: {
        title: string;
        publishingYear: number;
        imageUrl?: string;
    }): Promise<{
        id: number;
        title: string;
        publishingYear: number;
        imageUrl: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    editMovie(req: any, id: string, body: {
        title: string;
        publishingYear: number;
        imageUrl?: string;
    }): Promise<{
        id: number;
        title: string;
        publishingYear: number;
        imageUrl: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
