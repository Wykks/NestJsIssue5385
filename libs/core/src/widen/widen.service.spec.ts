import { Test, TestingModule } from '@nestjs/testing';
import { WidenService } from './widen.service';

describe('WidenService', () => {
  let service: WidenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WidenService],
    }).compile();

    service = module.get<WidenService>(WidenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
