import { WindowModule } from './window.module';

describe('WindowModule', () => {
  let windowModule: WindowModule;

  beforeEach(() => {
    windowModule = new WindowModule();
  });

  it('should create an instance', () => {
    expect(windowModule).toBeTruthy();
  });
});
