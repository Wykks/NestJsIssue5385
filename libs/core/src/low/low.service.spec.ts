import { Test, TestingModule } from '@nestjs/testing';
import { LowService } from './low.service';

describe('LowService', () => {
  let service: LowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LowService],
    }).compile();

    service = module.get<LowService>(LowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
