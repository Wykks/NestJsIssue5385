import { Test, TestingModule } from '@nestjs/testing';
import { AssaultService } from './assault.service';

describe('AssaultService', () => {
  let service: AssaultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssaultService],
    }).compile();

    service = module.get<AssaultService>(AssaultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
