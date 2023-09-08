import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()

  return (
    <HomeBox>
      <CreateBox>
        <Heading>Create User</Heading>
        <ButtonBox>
          <Button  onClick={() => {navigate("/create-student")}}>
            Student
          </Button>
          <Button  onClick={() => {navigate("/create-professor")}}>
            Professor
          </Button>
        </ButtonBox>
      </CreateBox>
    </HomeBox>
  )
}

const HomeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
`

const CreateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid black;
  width: 90%;
  height: 100%;
  margin-top: 5px;
`

const Heading = styled.h1`
  font-size: 30px;
`

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  color: black;
  font-size: 20px;
  width: 150px;
  height: 40px;
`

export default Home