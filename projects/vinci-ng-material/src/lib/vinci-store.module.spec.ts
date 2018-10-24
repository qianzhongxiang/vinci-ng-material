import { VinciStoreModule } from './vinci-store.module';

describe('VinciStoreModule', () => {
  let vinciStoreModule: VinciStoreModule;

  beforeEach(() => {
    vinciStoreModule = new VinciStoreModule();
  });

  it('should create an instance', () => {
    expect(vinciStoreModule).toBeTruthy();
  });
});
