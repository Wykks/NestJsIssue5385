import { Test, TestingModule } from '@nestjs/testing';
import { PossibleService } from './possible.service';

describe('PossibleService', () => {
  let service: PossibleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PossibleService],
    }).compile();

    service = module.get<PossibleService>(PossibleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
