import { Injectable } from '@nestjs/common';
import { version } from '../package.json';
@Injectable()
export class AppService {
  getVersion() {
    return {
      version: version,
    };
  }
}
