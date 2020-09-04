import { Test, TestingModule } from '@nestjs/testing';
import { FerryService } from './ferry.service';

describe('FerryService', () => {
  let service: FerryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FerryService],
    }).compile();

    service = module.get<FerryService>(FerryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
