import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async getMovies(userId: number) {
    return this.prisma.movie.findMany({ where: { userId } });
  }

  async addMovie(
    userId: number,
    title: string,
    publishingYear: number,
    imageUrl?: string,
  ) {
    return this.prisma.movie.create({
      data: {
        title,
        publishingYear,
        userId,
        imageUrl,
      },
    });
  }

  async editMovie(
    id: number,
    userId: number,
    title: string,
    publishingYear: number,
    imageUrl?: string,
  ) {
    return this.prisma.movie.update({
      where: { id, userId },
      data: { title, publishingYear, imageUrl },
    });
  }
}
