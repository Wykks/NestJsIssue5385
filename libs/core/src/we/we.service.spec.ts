import { Test, TestingModule } from '@nestjs/testing';
import { WeService } from './we.service';

describe('WeService', () => {
  let service: WeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeService],
    }).compile();

    service = module.get<WeService>(WeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
