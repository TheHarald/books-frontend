import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

describe('Title component', () => {
    it('should render the correct text content and font-size', () => {
        const text = 'Hello World';
        const { getByText } = render(<Title text={text} />);
        const title = getByText(text);

        expect(title).toBeInTheDocument();
        expect(title).toHaveStyle('font-size: 16px;');
    });
});