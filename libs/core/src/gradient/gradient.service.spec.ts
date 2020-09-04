import { Test, TestingModule } from '@nestjs/testing';
import { GradientService } from './gradient.service';

describe('GradientService', () => {
  let service: GradientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradientService],
    }).compile();

    service = module.get<GradientService>(GradientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
