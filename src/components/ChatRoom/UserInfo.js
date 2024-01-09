import React, { useEffect, useContext } from "react";
import { Button, Avatar, Typography } from "antd";
import styled from "styled-components";
import { auth } from "../../firebase/config";
import db from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { AuthContext } from "../../Context/AuthProvider";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .userName {
    color: white;
    margin-left: 5;
  }
`;



export default function UserInfo() {
  useEffect( () => {
    const getUser = async () =>{
      const data = await getDocs(collection(db, "users"));
      data.forEach((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
  }
    getUser();
  }, []);
  const data = useContext(AuthContext)
  console.log(data)
  
  return (
    <WrapperStyled>
      <div>
        <Avatar>a</Avatar>
        <Typography.Text className="userName">abc</Typography.Text>
      </div>
      <Button
        ghost
        onClick={() => {
          auth.signOut();
        }}
      >
        SignOut
      </Button>
    </WrapperStyled>
  );
}
