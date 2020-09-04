import { Test, TestingModule } from '@nestjs/testing';
import { SeriousService } from './serious.service';

describe('SeriousService', () => {
  let service: SeriousService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeriousService],
    }).compile();

    service = module.get<SeriousService>(SeriousService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
