import * as React from 'react'
import { Route } from "react-router-dom";
import Header from '../Header';
import Content from '../Content';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { checkUser } from '../../store/userAuth';

export default function App () {
    const dispatch = useDispatch()

    React.useEffect(() => {
        axios.get('/api/auth/me')
        .then(res => res.data)
        .then(user => {
            message.success(`Welcome Again ${user.email}`)
            dispatch(checkUser(user))
        })
    })
    
    return (
    <>
        <Header />
        <Content />
    </>
    )
}