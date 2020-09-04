import { Test, TestingModule } from '@nestjs/testing';
import { PolicemanService } from './policeman.service';

describe('PolicemanService', () => {
  let service: PolicemanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PolicemanService],
    }).compile();

    service = module.get<PolicemanService>(PolicemanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
