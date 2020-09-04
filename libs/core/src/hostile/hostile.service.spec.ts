import { Test, TestingModule } from '@nestjs/testing';
import { HostileService } from './hostile.service';

describe('HostileService', () => {
  let service: HostileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HostileService],
    }).compile();

    service = module.get<HostileService>(HostileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
