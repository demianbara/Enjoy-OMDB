import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { register } from '../../../store/userAuth';

export default function FormRegister () {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const history = useHistory();
    const { userCreated } = useSelector((store) => store.userAuth);
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        dispatch(register({email, password}))
        e.preventDefault();
    }

    React.useEffect(() => {
        if(userCreated) {history.push('/users/login')}
    }, [userCreated, history])

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