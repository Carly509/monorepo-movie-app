import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('movies')
@UseGuards(JwtAuthGuard)
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async getMovies(@Request() req) {
    return this.moviesService.getMovies(req.user.sub);
  }

  @Post()
  async addMovie(
    @Request() req,
    @Body() body: { title: string; publishingYear: number },
  ) {
    return this.moviesService.addMovie(
      req.user.sub,
      body.title,
      body.publishingYear,
    );
  }

  @Put(':id')
  async editMovie(
    @Request() req,
    @Param('id') id: string,
    @Body() body: { title: string; publishingYear: number },
  ) {
    return this.moviesService.editMovie(
      parseInt(id),
      req.user.sub,
      body.title,
      body.publishingYear,
    );
  }
}
