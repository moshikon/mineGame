/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MineBoxService } from './mine-box.service';

describe('MineBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MineBoxService]
    });
  });

  it('should ...', inject([MineBoxService], (service: MineBoxService) => {
    expect(service).toBeTruthy();
  }));
});
