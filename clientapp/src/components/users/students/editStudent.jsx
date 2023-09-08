import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function EditStudent() {
  const navigate = useNavigate()

  const {id} = useParams()
  const [FirstName, setFirstName] = useState()
  const [LastName, setLastName] = useState()
  const [Age, setAge] = useState()
  const [Course, setCourse] = useState()
  const [Section, setSection] = useState()

  useEffect(() => {
    axios.get('http://localhost:5000/api/student-user/' + id )
    .then(result => {console.log(result)
      setFirstName(result.data.FirstName)
      setLastName(result.data.LastName)
      setAge(result.data.Age)
      setCourse(result.data.Course)
      setSection(result.data.Section)
    })
    .catch(err => console.log(err))
  }, [])

  const Update = (e) => {
    e.preventDefault();
    axios.put('http://localhost:5000/api/student-user/' + id, { FirstName, LastName, Age, Course, Section })
    .then(result => console.log(result))
    .catch(err => console.log(err))
    navigate("/student")
  }

  return (
    <CreateStudentBox>
      <CreateBox>
        <Heading>Edit Student</Heading>
        <FormBox onSubmit={Update}>
          <Input 
          type='text' 
          id='FirstName'
          name='FirstName' 
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder='First Name'
          />
          <Margin/>
          <Input 
          type='text' 
          id='LastName'
          name='LastName' 
          value={LastName}
          onChange={(e) => setLastName(e.target.value)} 
          placeholder='Last Name'
          />
          <Margin/>
          <Input 
          type='text' 
          id='Age'
          name='Age' 
          value={Age}
          onChange={(e) => setAge(e.target.value)}
          placeholder='Age'
          />
          <Margin/>
          <Input 
          type='text' 
          id='Course'
          name='Course' 
          value={Course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder='Course'
          />
          <Margin/>
          <Input 
          type='text' 
          id='Section'
          name='Section' 
          value={Section}
          onChange={(e) => setSection(e.target.value)}
          placeholder='Section'
          />
          <Margin/>
          <MarginBig/>
          <ButtonBox>
            <Button>
              Edit
            </Button>
            <Button style={{color: 'red'}}  onClick={() => {navigate("/student")}}>
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

export default EditStudent