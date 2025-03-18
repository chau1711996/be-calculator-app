import { Controller, Get, Query } from '@nestjs/common';
import { CrawlService } from './crawl.service';

@Controller('crawl')
export class CrawlController {
  constructor(private readonly crawlService: CrawlService) {}

  @Get()
  async crawl(@Query('url') url: string) {
    return this.crawlService.crawlData(url);
  }

  @Get('all')
  async getAll() {
    return this.crawlService.getAll();
  }
}
