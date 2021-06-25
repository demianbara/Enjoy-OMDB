import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";



export default function useForm(storeReducer, storeState, specificState, path) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error , setError] = useState(false)

    const stateResult  = useSelector((store) => store[storeState]);
    const state = stateResult[specificState]
    const history = useHistory();
    const dispatch = useDispatch();

    const emailValidation = (val) => val.split('@').length > 1;

    const handleSubmit = (e) => {
        dispatch(storeReducer({email, password}))
        e.preventDefault();
    };

    const handleChange = (e) => {
        let { type , value } = e.target
        if(type === 'email') setEmail(value)
        if (type === 'password') setPassword(value);
    }

    const onBlur = () => {
        setError(!emailValidation(email));
    }

     const onFocus = () => {
         setError(false);
     };

    useEffect(() => {
        if (state) {
            history.push(path);
        }
    }, [state, history, path]);



    return { handleSubmit, handleChange, onBlur, onFocus, error };

}
