import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function EditProfessor() {
  const navigate = useNavigate()

  const {id} = useParams()
  const [FirstName, setFirstName] = useState()
  const [LastName, setLastName] = useState()
  const [Subject, setSubjects] = useState()
  const [Department, setDepartment] = useState()

  const [SubjectList, setSubjectList] = useState([
    {Subjects: '' },
  ])

  const handleSubjectsAdd = () => {
    setSubjectList([...SubjectList, {Subjects: '' }])
  }

  const handleSubjectsRemove = (index) => {
    const List = [...SubjectList]
    List.splice(index, 1)
    setSubjectList(List)
  }

  const handleSubjectChange = (e, index) => {
    const {name, value} = e.target
    const list = [...SubjectList]
    list[index][name] = value
    setSubjectList(list)
  }

  const payload = {
    Subject:[
      {Subjects: '' }
    ]
  }

  console.log(SubjectList)

  useEffect(() => {
    axios.get('http://localhost:5000/api/professor-user/' + id )
    .then(result => {console.log(result)
      setFirstName(result.data.FirstName)
      setLastName(result.data.LastName)
      setSubjects(result.data.Subjects)
      setDepartment(result.data.Department)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <CreateProfBox>
      <CreateBox>
        <Heading>Edit Professor</Heading>
        <FormBox>
          <Input 
          type='text' 
          id='FirstName'
          name='FirstName' 
          value={FirstName} 
          placeholder='First Name'
          />
          <Margin/>
          <Input 
          type='text' 
          id='LastName'
          name='LastName' 
          value={LastName} 
          placeholder='Last Name'
          />
          <Margin/>
          { SubjectList.map((singleSubject, index) => (
            <div key={index}>
              <SubjectBox>
                <Input 
                type='text' 
                id='Subjects'
                name='Subjects' 
                value={singleSubject.Subjects}
                onChange={(e) => handleSubjectChange(e, index)}
                placeholder='Subjects'
                style={{width: '100%'}}
                />
                {SubjectList.length - 1 === index && SubjectList.length < 6 && 
                  <ButtonBox>
                    <Button 
                    style={{color: 'green', fontSize: '15px', width: '80px', height: '30px'}}
                    onClick={handleSubjectsAdd}
                    >
                      Add
                    </Button>
                  </ButtonBox>
                }
                {SubjectList.length > 1 && 
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
          />
          <Margin/>
        </FormBox>
        <MarginBig/>
        <ButtonBox>
          <Button>
            Edit
          </Button>
          <Button style={{color: 'red'}}  onClick={() => {navigate("/professor")}}>
            Cancel
          </Button>
        </ButtonBox>
      </CreateBox>
    </CreateProfBox>
  )
}

const CreateProfBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const CreateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid black;
  width: 90%;
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

export default EditProfessor