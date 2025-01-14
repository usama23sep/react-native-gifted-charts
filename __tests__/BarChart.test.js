/**
 * @format
 */

import 'react-native';
import React from 'react';
import BarThreeD from '../examples/BarChart/BarThreeD';
import BarWithGradient from '../examples/BarChart/BarWithGradient';
import CappedBars from '../examples/BarChart/CappedBars';
import RoundStackBar from '../examples/BarChart/RoundStackBar';
import SimpleBarAnimated from '../examples/BarChart/SimpleBarAnimated';
import SimpleBlueBars from '../examples/BarChart/SimpleBlueBars';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders 3D bar chart correctly', () => {
  const tree = renderer.create(<BarThreeD />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders gradient bar chart correctly', () => {
  const tree = renderer.create(<BarWithGradient />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders capped bar chart correctly', () => {
  const tree = renderer.create(<CappedBars />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders rounded stack bar chart correctly', () => {
  const tree = renderer.create(<RoundStackBar />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders simple animated bar chart correctly', () => {
  const tree = renderer.create(<SimpleBarAnimated />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders alternate blue and gray bar chart correctly', () => {
  const tree = renderer.create(<SimpleBlueBars />).toJSON();
  expect(tree).toMatchSnapshot();
});
