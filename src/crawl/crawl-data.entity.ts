import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CrawlData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  title: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
