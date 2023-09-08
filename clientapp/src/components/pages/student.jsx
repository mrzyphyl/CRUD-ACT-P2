import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FiSettings } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

function Student() {
  const [users, setUsers] = useState([])
  const {id} = useParams()

  useEffect(() => {
    axios.get('http://localhost:5000/api/student-user')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:5000/api/student-user/' + id )
    .then(res => {console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }


  const navigate = useNavigate()

  return (
    <ProfessorBox>
      <ShowBox>
        <ProfessorTable>
          <thead>
            <tr>
              <ProfessorInfo>First Name</ProfessorInfo>
              <ProfessorInfo>Last Name</ProfessorInfo>
              <ProfessorInfo>Age</ProfessorInfo>
              <ProfessorInfo>Course</ProfessorInfo>
              <ProfessorInfo>Section</ProfessorInfo>
              <ProfessorInfo><FiSettings/></ProfessorInfo>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr>
                  <ProfessorDBInfo>{user.FirstName}</ProfessorDBInfo>
                  <ProfessorDBInfo>{user.LastName}</ProfessorDBInfo>
                  <ProfessorDBInfo>{user.Age}</ProfessorDBInfo>
                  <ProfessorDBInfo>{user.Course}</ProfessorDBInfo>
                  <ProfessorDBInfo>{user.Section}</ProfessorDBInfo>
                  <ProfessorDBInfo>
                    <TDButton onClick={() => {navigate(`/edit-student/${user._id}`)}}>Edit</TDButton>
                    <CancelButton onClick={(e) => handleDelete(user._id)}>Delete</CancelButton>
                  </ProfessorDBInfo>
                </tr>
              ))
            }
          </tbody>
        </ProfessorTable>
      </ShowBox>
    </ProfessorBox>
  )
}

const ProfessorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
`

const ShowBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid black;
  width: 90%;
  height: 100%;
  margin-top: 5px;
`

const ProfessorTable = styled.table`
  width: 90%
`

const ProfessorInfo = styled.th`
  font-size: 20px;
  color: black;
`

const ProfessorDBInfo = styled.td`
  font-size: 20px;
  color: black;
`

const TDButton = styled.button`
  color: white;
  background-color: #4ba160;
  font-size: 20px;
  width: 80px;
  height: 25px;
`

const CancelButton = styled.button`
  color: white;
  background-color: #df2e2e;
  font-size: 20px;
  width: 80px;
  height: 25px;
`



export default Student