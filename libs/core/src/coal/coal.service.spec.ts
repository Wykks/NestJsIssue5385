import { Test, TestingModule } from '@nestjs/testing';
import { CoalService } from './coal.service';

describe('CoalService', () => {
  let service: CoalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoalService],
    }).compile();

    service = module.get<CoalService>(CoalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
