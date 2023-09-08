import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function CreateStudent() {
  const navigate = useNavigate()

  const [FirstName, setFirstName] = useState()
  const [LastName, setLastName] = useState()
  const [Age, setAge] = useState()
  const [Course, setCourse] = useState()
  const [Section, setSection] = useState()

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/student-user', { FirstName, LastName, Age, Course, Section })
    .then(result => console.log(result))
    .catch(err => console.log(err))
    navigate("/student")
  }

  return (
    <CreateStudentBox>
      <CreateBox>
        <Heading>Create Student</Heading>
        <FormBox onSubmit={onSubmit}>
          <Input 
          type='text' 
          id='FirstName'
          name='FirstName' 
          value={FirstName} 
          placeholder='First Name'
          onChange={(e) => setFirstName(e.target.value)}/>
          <Margin/>
          <Input 
          type='text' 
          id='LastName'
          name='LastName' 
          value={LastName} 
          placeholder='Last Name'
          onChange={(e) => setLastName(e.target.value)}/>
          <Margin/>
          <Input 
          type='text' 
          id='Age'
          name='Age' 
          value={Age} 
          placeholder='Age'
          onChange={(e) => setAge(e.target.value)}/>
          <Margin/>
          <Input 
          type='text' 
          id='Course'
          name='Course' 
          value={Course} 
          placeholder='Course'
          onChange={(e) => setCourse(e.target.value)}/>
          <Margin/>
          <Input 
          type='text' 
          id='Section'
          name='Section' 
          value={Section} 
          placeholder='Section'
          onChange={(e) => setSection(e.target.value)}/>
          <Margin/>
          <MarginBig/>
          <ButtonBox>
            <Button>
              Create
            </Button>
            <Button style={{color: 'red'}}  onClick={() => {navigate("/")}}>
              Cancel
            </Button>
          </ButtonBox>
        </FormBox>
      </CreateBox>
    </CreateStudentBox>
  )
}

const CreateStudentBox = styled.div`
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

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 90%;
`

const Input = styled.input`
  width: 60%;
  height: 30px;
`

const Margin = styled.div`
  height: 3px;
`

const MarginBig = styled.div`
  height: 20px;
`

export default CreateStudent