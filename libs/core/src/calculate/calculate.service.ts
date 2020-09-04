import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculateService {
  doStuff() {
    console.log('CalculateService, Hello world');
    return 'CalculateService result'
  }
}
