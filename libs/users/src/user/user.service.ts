import { Injectable } from '@nestjs/common';
import { CalculateService } from '@toto/core';

@Injectable()
export class UserService {
  constructor(private readonly calculateService: CalculateService) {}

  doStuff() {
    return this.calculateService.doStuff();
  }
}
