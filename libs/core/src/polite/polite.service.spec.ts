import { Test, TestingModule } from '@nestjs/testing';
import { PoliteService } from './polite.service';

describe('PoliteService', () => {
  let service: PoliteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoliteService],
    }).compile();

    service = module.get<PoliteService>(PoliteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
