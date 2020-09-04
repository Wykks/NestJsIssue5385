import { Test, TestingModule } from '@nestjs/testing';
import { ClayService } from './clay.service';

describe('ClayService', () => {
  let service: ClayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClayService],
    }).compile();

    service = module.get<ClayService>(ClayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
