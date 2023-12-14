import React from "react";
import { Button, Row, Col } from 'antd';
import firebase, { auth } from '../../firebase/config';
// const { Title } = Typography

import Title from "antd/es/skeleton/Title";

const fbProvider = new firebase.auth.FacebookAuthProvider()
export default function Login() {
    const handleFbLogin = () => {
        auth.signInWithPopup(fbProvider)
    }
    return (
        <div>
            <Row justify={"center"} style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{textAlign: "center"}}>Fun Chat</Title>
                    <Button style={{ width: '100%', marginBottom: 5 }}>
                        Đăng nhập bằng Google
                    </Button>
                    <Button style={{ width: '100%' }} onClick={ handleFbLogin }>
                        Đăng nhập bằng Facebook
                    </Button>
                </Col>
            </Row>
        </div>
    )
}