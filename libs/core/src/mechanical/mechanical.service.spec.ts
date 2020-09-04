import { Test, TestingModule } from '@nestjs/testing';
import { MechanicalService } from './mechanical.service';

describe('MechanicalService', () => {
  let service: MechanicalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MechanicalService],
    }).compile();

    service = module.get<MechanicalService>(MechanicalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
