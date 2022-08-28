import React, { useState } from 'react'
import * as S from './style'
import {
  AiOutlineBorder,
  AiOutlineCheckSquare,
  AiOutlineHeart,
  AiFillHeart,
} from 'react-icons/ai'

function Card({ item }) {
  const {
    card_img: imageName,
    card_company: bank,
    card_name: name,
    annual_fee: description,
    isfavorite: favorite,
  } = item
  const [checked, setChecked] = useState(false)
  // const [tags, setTags] = useState(theTags)
  return (
    <S.CardContainer>
      <S.CardCheckBox>
        {checked ? (
          <AiOutlineCheckSquare size={25} />
        ) : (
          <AiOutlineBorder size={25} />
        )}
      </S.CardCheckBox>
      <S.CardBox>
        <S.CardImage src={imageName} />
      </S.CardBox>
      <S.CardInfo>
        <S.CardTitle>
          <S.CardBank>{bank}</S.CardBank>
          <S.CardName>{name}</S.CardName>
        </S.CardTitle>
        <S.CardDescription>
          연회비 {description.toLocaleString('ko-KR')} 원
        </S.CardDescription>
      </S.CardInfo>
      <S.CardFavorite>
        {favorite ? (
          <AiFillHeart size={25} />
        ) : (
          <AiOutlineHeart size={25} color="red" />
        )}
      </S.CardFavorite>
    </S.CardContainer>
  )
}

export default Card
