import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';//enzyme enable us to render only a single componentrather then rendering entire page
configure({adapter:new Adapter()})
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
describe('<NavigationItems>',()=>{
	it('should render two <NavigationItem> element if not authenticated',()=>{
       const wrapper=shallow(<NavigationItems/>);//the component which have to be tested
	   expect(wrapper.find(NavigationItem)).toHaveLength(2);//what would you expect test to do 

	})
})//describe is a inbuilt function and in this meathod it is a meathod
//whch describes what should be shown on console if the test fails first arg is it and secons return a function 