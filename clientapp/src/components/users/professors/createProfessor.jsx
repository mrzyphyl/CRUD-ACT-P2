import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function CreateProfessor() {
  const navigate = useNavigate()

  const [FirstName, setFirstName] = useState()
  const [LastName, setLastName] = useState()
  const [Department, setDepartment] = useState()
  const [Subjects, setSubjectList] = useState([
    {Subjects: '' },
  ])

  const handleSubjectsAdd = () => {
    setSubjectList([...Subjects, {Subjects: '' }])
  }

  const handleSubjectsRemove = (index) => {
    const List = [...Subjects]
    List.splice(index, 1)
    setSubjectList(List)
  }

  const handleSubjectChange = (e, index) => {
    const {name, value} = e.target
    const list = [...Subjects]
    list[index][name] = value
    setSubjectList(list)
  }

  const payload = {
    Subject:[
      {Subjects: '' }
    ]
  }

  console.log(Subjects)

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/professor-user', { FirstName, LastName, payload, Department }, 
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
  })
    .then(result => console.log(result))
    .catch(err => console.log(err))
    navigate("/professor")
  }

  return (
    <CreateProfBox>
      <CreateBox>
        <Heading>Create Professor</Heading>
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
          { Subjects.map((singleSubject, index) => (
            <div key={index}>
              <SubjectBox>
                <Input 
                type='text' 
                id='Subjects'
                name='Subjects' 
                value={singleSubject.Subjects}
                onChange={(e) => handleSubjectChange(e, index)}
                placeholder='Subjects'
                key={Subjects}
                style={{width: '100%'}}
                />
                {Subjects.length - 1 === index && Subjects.length < 6 && 
                  <ButtonBox>
                    <Button 
                    style={{color: 'green', fontSize: '15px', width: '80px', height: '30px'}}
                    onClick={handleSubjectsAdd}
                    >
                      Add
                    </Button>
                  </ButtonBox>
                }
                {Subjects.length > 1 && 
                  <Button
                  type='button'
                  style={{color: 'red', fontSize: '15px', width: '80px', height: '30px'}}
                  onClick={() => handleSubjectsRemove(index)}
                  >
                    Remove
                  </Button>
                }
              </SubjectBox>
            </div>
          ))}
          <Margin/>
          <Input 
          type='text' 
          id='Department'
          name='Department' 
          value={Department} 
          placeholder='Department'
          onChange={(e) => setDepartment(e.target.value)}/>
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
    </CreateProfBox>
  )
}

const CreateProfBox = styled.div`
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

const SubjectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px; 
`

export default CreateProfessor