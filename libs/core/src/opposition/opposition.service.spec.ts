import { Test, TestingModule } from '@nestjs/testing';
import { OppositionService } from './opposition.service';

describe('OppositionService', () => {
  let service: OppositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OppositionService],
    }).compile();

    service = module.get<OppositionService>(OppositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
