import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

function Header() {
  return (
    <Head>
        <Logo>
            <Link style={{textDecoration: 'none', fontSize: '50px', color: 'black'}} to='/'>Wowowin</Link>
        </Logo>
        <SelectionBox>
            <Selection>
                <HeaderLink>
                    <Link style={{textDecoration: 'none', fontSize: '30px', color: 'black'}} to='/student'>
                        Student
                    </Link>
                </HeaderLink>
                <HeaderLink>
                    <Link style={{textDecoration: 'none', fontSize: '30px', color: 'black'}} to='/professor'>
                        Professor
                    </Link>
                </HeaderLink>
            </Selection>
        </SelectionBox>
    </Head>
  )
}

const Head = styled.header`
    height: '60px';
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid black;
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`

const Selection = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 3em;
    margin-right: 1.5rem;
`

const HeaderLink = styled.li`
    text-decoration: none;
    list-style-type: none;
    font-size: medium;
    color: black;
`

const SelectionBox = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
`

export default Header