import React from 'react'
import styled from 'styled-components'
import data from '../../assets/data.json'
import ChecklistItem from './ChecklistItem'

const Checklist = () => {
  return (
    <CheckContainer>
      {data.frontChecklist.map(item => (
        <ChecklistItem text={item} key={item} />
      ))}
    </CheckContainer>
  )
}

const CheckContainer = styled.div`
  position: absolute;
  top: 24%;
  left: -8%;
`

export default Checklist
