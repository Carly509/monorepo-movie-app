import { PrismaService } from '../prisma.service';
export declare class MoviesService {
    private prisma;
    constructor(prisma: PrismaService);
    getMovies(userId: number): Promise<{
        id: number;
        title: string;
        publishingYear: number;
        imageUrl: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    addMovie(userId: number, title: string, publishingYear: number): Promise<{
        id: number;
        title: string;
        publishingYear: number;
        imageUrl: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    editMovie(id: number, userId: number, title: string, publishingYear: number): Promise<{
        id: number;
        title: string;
        publishingYear: number;
        imageUrl: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
