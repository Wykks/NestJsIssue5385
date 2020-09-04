import { Test, TestingModule } from '@nestjs/testing';
import { SailService } from './sail.service';

describe('SailService', () => {
  let service: SailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SailService],
    }).compile();

    service = module.get<SailService>(SailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
