import { Test, TestingModule } from '@nestjs/testing';
import { ChinService } from './chin.service';

describe('ChinService', () => {
  let service: ChinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChinService],
    }).compile();

    service = module.get<ChinService>(ChinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
