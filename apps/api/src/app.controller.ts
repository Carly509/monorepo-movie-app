import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const userCount = await this.prisma.user.count();
    return `Hello from NestJS! There are ${userCount} users in the database.`;
  }
}
