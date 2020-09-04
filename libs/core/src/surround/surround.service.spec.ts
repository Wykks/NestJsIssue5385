import { Test, TestingModule } from '@nestjs/testing';
import { SurroundService } from './surround.service';

describe('SurroundService', () => {
  let service: SurroundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurroundService],
    }).compile();

    service = module.get<SurroundService>(SurroundService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
