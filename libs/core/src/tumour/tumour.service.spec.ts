import { Test, TestingModule } from '@nestjs/testing';
import { TumourService } from './tumour.service';

describe('TumourService', () => {
  let service: TumourService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TumourService],
    }).compile();

    service = module.get<TumourService>(TumourService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
