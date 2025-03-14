import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrawlModule } from './crawl/crawl.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db', // Tên service trong docker-compose
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'crawl_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Chỉ dùng cho môi trường phát triển
    }),
    CrawlModule,
  ],
})
export class AppModule {}
