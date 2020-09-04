import { Test, TestingModule } from '@nestjs/testing';
import { PreventService } from './prevent.service';

describe('PreventService', () => {
  let service: PreventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreventService],
    }).compile();

    service = module.get<PreventService>(PreventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
