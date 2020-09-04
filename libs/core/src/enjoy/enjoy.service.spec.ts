import { Test, TestingModule } from '@nestjs/testing';
import { EnjoyService } from './enjoy.service';

describe('EnjoyService', () => {
  let service: EnjoyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnjoyService],
    }).compile();

    service = module.get<EnjoyService>(EnjoyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
