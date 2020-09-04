import { Test, TestingModule } from '@nestjs/testing';
import { OuterService } from './outer.service';

describe('OuterService', () => {
  let service: OuterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OuterService],
    }).compile();

    service = module.get<OuterService>(OuterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
