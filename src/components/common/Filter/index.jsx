import React, { useState } from 'react'
import * as S from './style'
import IfTab from '../../template/IfTab'

function Filter() {
  const [item, setItem] = useState('loan')

  const filterHandler = (e) => {
    setItem(e.target.value)
    console.log(item)
  }

  return (
    <>
      <S.Container onClick={filterHandler}>
        <S.Input type="radio" name="filter" value="loan" id="filterloan" />
        <S.Label htmlFor="filterloan">대출</S.Label>
        <S.Input type="radio" name="filter" value="card" id="filtercard" />
        <S.Label htmlFor="filtercard">카드</S.Label>
      </S.Container>
      <IfTab tab={item} />
    </>
  )
}

export default Filter
