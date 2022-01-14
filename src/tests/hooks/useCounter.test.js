import {renderHook, act} from '@testing-library/react-hooks';
import {useCounter} from '../../hooks/useCounter';

describe('Tests on useCounter', () => {
    test('useCounter should return default values', () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
        expect(result.current.increment).toBeInstanceOf(Function);
        expect(result.current.decrement).toBeInstanceOf(Function);
        expect(result.current.reset).toBeInstanceOf(Function);
    });

    test('useCounter should return 100', () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);
    });

    test('should increment counter on 1', () => {
        const { result } = renderHook(() => useCounter(100));
        act(() => {
            result.current.increment();
        });
        expect(result.current.counter).toBe(101);
    })

    test('should decrement counter on 1', () => {
        const { result } = renderHook(() => useCounter(101));
        act(() => {
            result.current.decrement();
        });
        expect(result.current.counter).toBe(100);
    })

    test('should reset counter to initialState', () => {
        const { result } = renderHook(() => useCounter(100));
        
        act(() => {
            result.current.decrement();      
            result.current.reset();
        });

        expect(result.current.counter).toBe(100);
    })
})