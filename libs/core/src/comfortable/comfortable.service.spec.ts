import { Test, TestingModule } from '@nestjs/testing';
import { ComfortableService } from './comfortable.service';

describe('ComfortableService', () => {
  let service: ComfortableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComfortableService],
    }).compile();

    service = module.get<ComfortableService>(ComfortableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
