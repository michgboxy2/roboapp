import {configure} from 'enzyme';
import Adaptar from 'enzyme-adapter-react-16';

// let Adaptar = new Adaptar();

configure({adapter : new Adaptar()});