import { Test, TestingModule } from '@nestjs/testing';
import { ShowerService } from './shower.service';

describe('ShowerService', () => {
  let service: ShowerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowerService],
    }).compile();

    service = module.get<ShowerService>(ShowerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
