import { Test, TestingModule } from '@nestjs/testing';
import { CrackpotService } from './crackpot.service';

describe('CrackpotService', () => {
  let service: CrackpotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrackpotService],
    }).compile();

    service = module.get<CrackpotService>(CrackpotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
