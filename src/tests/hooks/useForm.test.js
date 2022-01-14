import {renderHook, act} from '@testing-library/react-hooks';
import {useForm} from '../../hooks/useForm';

describe('Tests on useForm', () => {
    const initialForm = {
        name: '',
        email: ''
    };

    test('useForm should return default values', () => {

        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current[0]).toEqual(initialForm);
        expect(result.current[1]).toBeInstanceOf(Function);
        expect(result.current[2]).toBeInstanceOf(Function);
    });

    test('should return a default form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name', 
                    value: 'Juan'
                }
            });
        });

        const[formValues] = result.current;
        expect(formValues).toEqual({...initialForm, name: 'Juan'});
    })

    test('should reset the form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name', 
                    value: 'Juan'
                }
            });
            reset();
        });

        const[formValues] = result.current;
        expect(formValues).toEqual(initialForm);
    })
});