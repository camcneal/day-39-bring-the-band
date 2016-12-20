import {expect} from 'chai';
import Bands from '../app/scripts/collections/Bands';




describe('search' , () => {

  let bands = new Bands();

  it('should repsond to search' , () => {
        expect(bands).to.respondTo('search')

  })

})
