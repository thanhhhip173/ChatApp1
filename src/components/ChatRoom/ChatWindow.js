import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Tooltip } from "antd";
import React from "react";
import styled from "styled-components";

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
const ContentStyled = styled.div`

`;



export default function ChatWindow() {
    return (
        <div>
            <HeaderStyled>
                <div className="header__info">
                    <p className="header__title">Room 1</p>
                    <span className="header__description">This is Room 1</span>
                </div>
                <div>
                    <Button icon={<UserAddOutlined />}>Add</Button>
                    <Avatar.Group size="small" maxCount={2}>
                        <Tooltip title="A"><Avatar>A</Avatar></Tooltip>
                        <Tooltip title="A"><Avatar>B</Avatar></Tooltip>
                        <Tooltip title="A"><Avatar>C</Avatar></Tooltip>
                        <Tooltip title="A"><Avatar>D</Avatar></Tooltip>
                        <Tooltip title="A"><Avatar>E</Avatar></Tooltip>
                        <Tooltip title="A"><Avatar>F</Avatar></Tooltip>
                    </Avatar.Group>
                </div>
            </HeaderStyled>
            <ContentStyled>

            </ContentStyled>
        </div>
    )
}