import {caller} from '../index';
// import { caller } from '../../index';


function jiminyCricket (){
    return caller();
}

it('', () => {
    expect(jiminyCricket()).toBe('jiminyCricket');
})