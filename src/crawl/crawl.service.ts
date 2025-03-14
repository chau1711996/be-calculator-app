import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import puppeteer from 'puppeteer';
import { CrawlData } from './crawl-data.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CrawlService {
  @InjectRepository(CrawlData)
  private readonly crawlDataRepository: Repository<CrawlData>;

  async crawlData(url: string): Promise<CrawlData> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Ví dụ: Lấy tiêu đề trang
    const title = await page.title();

    await browser.close();
    const crawlData = new CrawlData();
    crawlData.url = url;
    crawlData.title = title;

    return this.crawlDataRepository.save(crawlData);
  }
}
