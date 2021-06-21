import * as React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../store/userAuth';

export default function FormAuth () {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        dispatch(register({email, password}))
        e.preventDefault();
    }

    return (
        <div> <h2> REGISTER </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    Email
                    <input type="text" onChange={(e) => {setEmail(e.target.value)}}/>
                </label>
                <label htmlFor="">
                    Password
                    <input type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                </label>
                <input type="submit" value='Submit'/>
            </form>
        </div>
    );
}