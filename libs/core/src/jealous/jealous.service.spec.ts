import { Test, TestingModule } from '@nestjs/testing';
import { JealousService } from './jealous.service';

describe('JealousService', () => {
  let service: JealousService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JealousService],
    }).compile();

    service = module.get<JealousService>(JealousService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
