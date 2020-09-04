import { Test, TestingModule } from '@nestjs/testing';
import { PleasantService } from './pleasant.service';

describe('PleasantService', () => {
  let service: PleasantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PleasantService],
    }).compile();

    service = module.get<PleasantService>(PleasantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
