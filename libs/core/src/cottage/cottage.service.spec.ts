import { Test, TestingModule } from '@nestjs/testing';
import { CottageService } from './cottage.service';

describe('CottageService', () => {
  let service: CottageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CottageService],
    }).compile();

    service = module.get<CottageService>(CottageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
