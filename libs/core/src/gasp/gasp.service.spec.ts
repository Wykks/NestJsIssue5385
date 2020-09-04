import { Test, TestingModule } from '@nestjs/testing';
import { GaspService } from './gasp.service';

describe('GaspService', () => {
  let service: GaspService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GaspService],
    }).compile();

    service = module.get<GaspService>(GaspService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
