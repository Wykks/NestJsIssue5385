import { Test, TestingModule } from '@nestjs/testing';
import { MisleadService } from './mislead.service';

describe('MisleadService', () => {
  let service: MisleadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MisleadService],
    }).compile();

    service = module.get<MisleadService>(MisleadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
