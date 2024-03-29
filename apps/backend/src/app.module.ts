import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './post/post.service';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserService, PrismaService, PostService],
})
export class AppModule {}
