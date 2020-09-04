import { Test, TestingModule } from '@nestjs/testing';
import { BangService } from './bang.service';

describe('BangService', () => {
  let service: BangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BangService],
    }).compile();

    service = module.get<BangService>(BangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
