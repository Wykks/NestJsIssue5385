import { Test, TestingModule } from '@nestjs/testing';
import { InnocentService } from './innocent.service';

describe('InnocentService', () => {
  let service: InnocentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InnocentService],
    }).compile();

    service = module.get<InnocentService>(InnocentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
