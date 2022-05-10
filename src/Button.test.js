import { TestRenderer } from 'react-test-renderer';
import Button from './Button'

test('returns a working button', () => {
        const testRenderer = TestRenderer.create(<Button />);
        const testInstance = testRenderer.root;
        expect(testInstance.queryByText("click me")).toBe("click me")
    }
)
