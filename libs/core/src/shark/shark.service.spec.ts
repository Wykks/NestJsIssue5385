import { Test, TestingModule } from '@nestjs/testing';
import { SharkService } from './shark.service';

describe('SharkService', () => {
  let service: SharkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharkService],
    }).compile();

    service = module.get<SharkService>(SharkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
