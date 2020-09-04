import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { CalculateService } from '@toto/core';

// This is a way to bypass loading of the whole @toto/core library
// But it's not really practical in a real world project
// jest.mock('@toto/core', () => ({
//   CalculateService: {}
// }));

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        // The goal here is to access CalculateService without triggering a full typescript module resolution on @toto/core
        // Of course in this example, the service can be tested without createTestingModule
        // but it's only because it's a simple exemple here (and we would still miss CalculateService typings)
        { provide: CalculateService, useValue: { doStuff: () => 'TEST' } },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should do stuff', () => {
    expect(service.doStuff()).toEqual('TEST');
  });
});
