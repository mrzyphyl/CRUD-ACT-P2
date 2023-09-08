import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FiSettings } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Professor() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/professor-user')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:5000/api/professor-user/' + id )
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
              <ProfessorInfo>Subjects</ProfessorInfo>
              <ProfessorInfo>Department</ProfessorInfo>
              <ProfessorInfo><FiSettings/></ProfessorInfo>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr>
                  <ProfessorDBInfo>{user.FirstName}</ProfessorDBInfo>
                  <ProfessorDBInfo>{user.LastName}</ProfessorDBInfo>
                  <ProfessorDBInfo>{JSON.stringify(user.Subjects)}</ProfessorDBInfo>
                  <ProfessorDBInfo>{user.Department}</ProfessorDBInfo>
                  <ProfessorDBInfo>
                    <TDButton onClick={() => {navigate(`/edit-professor/${user._id}`)}}>Edit</TDButton>
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
`

const ShowBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid black;
  width: 90%;
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



export default Professor