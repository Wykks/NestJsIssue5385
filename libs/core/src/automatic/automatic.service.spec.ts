import { Test, TestingModule } from '@nestjs/testing';
import { AutomaticService } from './automatic.service';

describe('AutomaticService', () => {
  let service: AutomaticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomaticService],
    }).compile();

    service = module.get<AutomaticService>(AutomaticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
