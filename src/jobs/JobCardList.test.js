import React from 'react';
import { render } from '@testing-library/react';
import JobCardList from './JobCardList';

describe('JobCardList', () => {
  it('matches snapshot', () => {
    const { container } = render(<JobCardList jobs={[]} apply={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const { container } = render(<JobCardList jobs={[]} apply={() => {}} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});