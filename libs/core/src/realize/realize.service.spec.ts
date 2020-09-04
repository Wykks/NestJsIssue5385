import { Test, TestingModule } from '@nestjs/testing';
import { RealizeService } from './realize.service';

describe('RealizeService', () => {
  let service: RealizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealizeService],
    }).compile();

    service = module.get<RealizeService>(RealizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
