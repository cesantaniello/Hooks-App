import {renderHook} from '@testing-library/react-hooks';
import {useCounter} from '../../hooks/useCounter';

describe('Tests on useCounter', () => {
    test('useCounter should return default values', () => {
        const { result } = renderHook(() => useCounter());

        console.log(result.current);

        expect(result.current.counter).toBe(10);
        expect(result.current.increment).toBeInstanceOf(Function);
        expect(result.current.decrement).toBeInstanceOf(Function);
        expect(result.current.reset).toBeInstanceOf(Function);
    });
})