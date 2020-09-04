import { Test, TestingModule } from '@nestjs/testing';
import { CuteService } from './cute.service';

describe('CuteService', () => {
  let service: CuteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuteService],
    }).compile();

    service = module.get<CuteService>(CuteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
