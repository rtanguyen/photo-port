import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import About from '../index'

afterEach(cleanup);

//describe function to declare the component we're testing
describe('About component', () => {
    //verify that the component is rendering
    //it() alias of test()
    it('renders', () => {
        render(<About/>);
    });

    it('matches snapshot DOM node structure', () => {
        //asFragment returns snapshot - serialized version of the DOM node structure
        const { asFragment } = render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    })
})