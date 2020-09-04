import { Test, TestingModule } from '@nestjs/testing';
import { SystematicService } from './systematic.service';

describe('SystematicService', () => {
  let service: SystematicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystematicService],
    }).compile();

    service = module.get<SystematicService>(SystematicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
