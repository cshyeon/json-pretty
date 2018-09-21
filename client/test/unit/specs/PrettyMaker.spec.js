import PrettyMaker from '@/classes/PrettyMaker';
import mockJson from './mock.json';


describe('PrettyMaker.js', () => {
  let maker;
  beforeEach(() => {
    maker = new PrettyMaker(mockJson);
  });

  describe('print()', () => {
    it('correct check', () => {
      maker.print();
      console.log( maker.excludeIntents );
    });
  });
});

