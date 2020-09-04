import { Test, TestingModule } from '@nestjs/testing';
import { StrikebreakerService } from './strikebreaker.service';

describe('StrikebreakerService', () => {
  let service: StrikebreakerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrikebreakerService],
    }).compile();

    service = module.get<StrikebreakerService>(StrikebreakerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
