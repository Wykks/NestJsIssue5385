import { Test, TestingModule } from '@nestjs/testing';
import { AnkleService } from './ankle.service';

describe('AnkleService', () => {
  let service: AnkleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnkleService],
    }).compile();

    service = module.get<AnkleService>(AnkleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
