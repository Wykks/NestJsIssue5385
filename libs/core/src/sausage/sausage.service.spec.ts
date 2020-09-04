import { Test, TestingModule } from '@nestjs/testing';
import { SausageService } from './sausage.service';

describe('SausageService', () => {
  let service: SausageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SausageService],
    }).compile();

    service = module.get<SausageService>(SausageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
