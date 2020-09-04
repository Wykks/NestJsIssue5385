import { Test, TestingModule } from '@nestjs/testing';
import { DecideService } from './decide.service';

describe('DecideService', () => {
  let service: DecideService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DecideService],
    }).compile();

    service = module.get<DecideService>(DecideService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
