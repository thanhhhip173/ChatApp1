import React, { useState, useEffect } from "react";
import { Button, Row, Col, Typography } from 'antd';
import { auth, ggProvider, fbProvider } from '../../firebase/config';
import { signInWithPopup } from "firebase/auth";
import ChatRoom from '../ChatRoom';

const { Title } = Typography;

export default function Login() {
    const [value, setValue] = useState('')
    const handleGgLogin = () => {
        signInWithPopup(auth, ggProvider)
            .then((data) => {
                setValue(data.user.email)
                localStorage.setItem("email", data.user.email)
            })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })

    // const handleGgLogin = async () => {
    //     const reponse = await signInWithPopup(ggProvider);
    //     console.log(reponse);
    // };
    console.log(value)
    return (
        <div>
            {value ? <ChatRoom /> :
                <Row justify={"center"} style={{ height: 800 }}>
                    <Col span={8}>
                        <Title style={{ textAlign: "center" }}>Fun Chat</Title>
                        <Button style={{ width: '100%', marginBottom: 5 }} onClick={handleGgLogin}>
                            Đăng nhập bằng Google
                        </Button>
                        <Button style={{ width: '100%' }} >
                            Đăng nhập bằng Facebook
                        </Button>
                    </Col>
                </Row>
            }
        </div>
    )
}