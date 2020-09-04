import { Test, TestingModule } from '@nestjs/testing';
import { ContractionService } from './contraction.service';

describe('ContractionService', () => {
  let service: ContractionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractionService],
    }).compile();

    service = module.get<ContractionService>(ContractionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
