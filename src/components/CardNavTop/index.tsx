import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Image } from '@kiwifinancebsc/uikit'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  margin-bottom: 40px;
 `

const CardNavTop = () => (
  <StyledNav>
    <ButtonMenu size="md" variant="subtle">
    <Image alt="img" src="/images/logo.png" width={60} height={60}/>
      <ButtonMenuItem>
       
      <Image alt="img" src="/images/logo.png" width={60} height={60}/>
      
      </ButtonMenuItem>
      <ButtonMenuItem id="pool-nav-link">
        <TranslatedText translationId={74}>Get Token worth of $100 with 10 referal</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem>
        Bridge
      </ButtonMenuItem>
    </ButtonMenu>
  </StyledNav>
)

export default CardNavTop
