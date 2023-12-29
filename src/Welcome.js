import React, {useEffect,useState} from 'react'

function Welcome() {
    const [info, setMyinfo] = useState({})
    useEffect(() => {
        getinfo()
    },[])
    const getinfo = async () => {
        const response = await fetch("http://localhost:5000/api/userlogin/getuserdata", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json()
        setMyinfo(json)
    }
    return (
        <>
        <div style={{margin:'120px auto',border:'20px solid #0d6efd', width:'25rem'}}>
            <h1>Login Successfully,</h1><h3>{info.name}</h3>
        </div>
        </>
    )
}

export default Welcome