import { Test, TestingModule } from '@nestjs/testing';
import { CooperateService } from './cooperate.service';

describe('CooperateService', () => {
  let service: CooperateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CooperateService],
    }).compile();

    service = module.get<CooperateService>(CooperateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
