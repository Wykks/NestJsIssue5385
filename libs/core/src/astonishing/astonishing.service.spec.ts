import { Test, TestingModule } from '@nestjs/testing';
import { AstonishingService } from './astonishing.service';

describe('AstonishingService', () => {
  let service: AstonishingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AstonishingService],
    }).compile();

    service = module.get<AstonishingService>(AstonishingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
