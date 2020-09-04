import { Test, TestingModule } from '@nestjs/testing';
import { PierceService } from './pierce.service';

describe('PierceService', () => {
  let service: PierceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PierceService],
    }).compile();

    service = module.get<PierceService>(PierceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
