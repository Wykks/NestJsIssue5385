import { Test, TestingModule } from '@nestjs/testing';
import { DeprivationService } from './deprivation.service';

describe('DeprivationService', () => {
  let service: DeprivationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeprivationService],
    }).compile();

    service = module.get<DeprivationService>(DeprivationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
