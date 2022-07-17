import renderer from 'react-test-renderer';
import NotFound from '.';

it('renders correctly', () => {
	const tree = renderer
		.create(<NotFound />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
