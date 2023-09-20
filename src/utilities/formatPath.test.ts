import { formatPath } from './formatPath'

describe('formatPath function', () => {
    it('should handle an undefined third segment', () => {
        const path = '/example'

        const result = formatPath(path);

        expect(result).toBe('');
    });

    it('should return the third segment of the path in uppercase', () => {
        const path = '/example/path'

        const result = formatPath(path);

        expect(result).toBe('PATH');
    });
})
