import 'jasmine';
import * as index from '../../src';

describe('typescript-template-cli', () => {
	it('exports a', () => {
		expect(index.a).toBeTrue();
	});
});
