import React from "react";
import { Button, Row, Col, Typography } from 'antd';
import { auth, ggProvider, fbProvider } from '../../firebase/config';
import { addUser } from "../../firebase/services";
import { signInWithPopup, getAdditionalUserInfo } from "firebase/auth";

const { Title } = Typography;

export default function Login() {
    const handleGgLogin = async () => {
        const user = await signInWithPopup(auth, ggProvider);
        console.log(getAdditionalUserInfo(user))
        if (getAdditionalUserInfo(user).isNewUser === true) {
            addUser('users', {
                displayName: user.user.providerData[0].displayName,
                email: user.user.providerData[0].email,
                photoURL: user.user.providerData[0].photoURL,
                UID: user.user.providerData[0].displayName,
                providerId: user.user.providerData[0].providerId,
            })
        }
    }
    return (
        <div>
            <Row justify={"center"} style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: "center" }}>Fun Chat</Title>
                    <Button style={{ width: '100%', marginBottom: 5 }} onClick={handleGgLogin}>
                        Đăng nhập bằng Google
                    </Button>
                    <Button style={{ width: '100%' }} onClick={handleGgLogin} >
                            Đăng nhập bằng Facebook
                    </Button>
                </Col>
            </Row>
        </div>
    )
}