import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input, Tooltip } from "antd";
import React from "react";
import styled from "styled-components";
import Message from "../Login/Message";

const WrapperStyled = styled.div`
    height: 100vh;
`;

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 56px;
    padding: 6px 16px;
    align-item: center;
    border-bottom: 1px solid rgb(230, 230, 230)

  
    .header__info {
            display: flex;
            flex-direction: colum;
            justify-content: center;
    }

    .header__description {
            font-size: 12px;
    }

    .header__title {
        margin: 0;
        font-weight: bold;
    }
`;

const ButtonGroupStyled = styled.div`
    display: flex;
    align-items: center;
`;

const ContentStyled = styled.div`
    height: calc(100% - 56px);
    display: flex;
    flex-direction: column;
    padding: 11px;
    justify-content: flex-end
`;

const MessageListStyled = styled.div`
    max-height: 100%;
    overflow-y: auto;
`;

const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-items: center:
    border-radius: 2px;
    padding: 2px 2px 2px 0;
    border: 1px solid rgb(230, 230, 230)

    .ant-form-item {
        flex: 1;
        margin-bottom: 0;
    }
`;

export default function ChatWindow() {
    return (
        <WrapperStyled>
            <HeaderStyled>
                <div className="header__info">
                    <p className="header__title">Room 1</p>
                    <span className="header__description">This is Room 1</span>
                </div>
                <ButtonGroupStyled>
                    <Button icon={<UserAddOutlined />} type="text">Add</Button>
                    <Avatar.Group size="small" maxCount={2}>
                        <Tooltip title="A"><Avatar>A</Avatar></Tooltip>
                        <Tooltip title="A"><Avatar>B</Avatar></Tooltip>
                        <Tooltip title="A"><Avatar>C</Avatar></Tooltip>
                        <Tooltip title="A"><Avatar>D</Avatar></Tooltip>
                        <Tooltip title="A"><Avatar>E</Avatar></Tooltip>
                        <Tooltip title="A"><Avatar>F</Avatar></Tooltip>
                    </Avatar.Group>
                </ButtonGroupStyled>
            </HeaderStyled>
            <ContentStyled>
                <MessageListStyled>
                    <Message text="text" photoUrl={null} displayName="vwvreb" createAt={13131313131}/>
                    <Message text="svsfvfsdv" photoUrl={null} displayName="vwfewvrb" createAt={13131313131}/>
                    <Message text="tewvrrbext" photoUrl={null} displayName="vwvrb" createAt={13131313131}/>
                    <Message text="teebrerrwhrxt" photoUrl={null} displayName="vwwfwfvrb" createAt={13131313131}/>
                </MessageListStyled>
                <FormStyled>
                    <Form.Item>
                        <Input placeholder="Text..." bordered={false} autoComplete="on" />
                    </Form.Item>
                    <Button type="primary">Send</Button>
                </FormStyled>
            </ContentStyled>
        </WrapperStyled>
    )
}