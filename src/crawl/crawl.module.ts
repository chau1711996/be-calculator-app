import { Module } from '@nestjs/common';
import { CrawlController } from './crawl.controller';
import { CrawlService } from './crawl.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrawlData } from './crawl-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CrawlData])],
  controllers: [CrawlController],
  providers: [CrawlService],
})
export class CrawlModule {}
