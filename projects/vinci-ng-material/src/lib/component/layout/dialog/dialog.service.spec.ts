import { TestBed, inject } from '@angular/core/testing';

import { DialogService } from './dialog.service';

describe('DialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogService]
    });
  });

  it('should be created', inject([DialogService], (service: DialogService) => {
    expect(service).toBeTruthy();
  }));
  it('should open a confirm dialog', inject([DialogService], (service: DialogService) => {
    let confirmClicked = true;
    let cancelClicked = true;
    service.Confirm("This is a test message for testing confirm dialog!", () => {
      expect(confirmClicked).toBe(true)
    }, () => {
      expect(cancelClicked).toBe(true)
    })
    //click confirm and cancel
  }))
});
