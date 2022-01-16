# How to use Hooks

## useCounter:

Example:

```
const { 
        counter, 
        increment, 
        decrement, 
        reset 
        } = useCounter(10);
```

useCounter() //recibe un valor por defecto

## useFetch:

Example:

```
const url = 'API Endpoint';
const { 
        data: null, 
        loading: true, 
        error: null 
        } = useFetch(url);
```

## useForm:

Example:

```

const initialForm = { 
        name: '', 
        age: 0, 
        email: '' 
        }; 
        
const [ formValues, handleInputChange, reset ] = useForm(initialForm);
```

