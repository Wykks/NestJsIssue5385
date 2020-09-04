import { Test, TestingModule } from '@nestjs/testing';
import { GhostwriterService } from './ghostwriter.service';

describe('GhostwriterService', () => {
  let service: GhostwriterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GhostwriterService],
    }).compile();

    service = module.get<GhostwriterService>(GhostwriterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
