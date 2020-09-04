import { Test, TestingModule } from '@nestjs/testing';
import { ConscienceService } from './conscience.service';

describe('ConscienceService', () => {
  let service: ConscienceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConscienceService],
    }).compile();

    service = module.get<ConscienceService>(ConscienceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
