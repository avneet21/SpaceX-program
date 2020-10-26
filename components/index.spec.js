

import {mount,shallow} from 'enzyme'

const HomeScreen = require('../pages/index').default.WrappedComponent

describe('Pages', () => {
   describe('Space X Program Component', () => {
    it('should render without throwing an error', function () {   
      const wrap = shallow(<HomeScreen/>)
       expect(wrap.find('title').text()).toBe('SpaceX Launch Programs')
    })
   })  
})