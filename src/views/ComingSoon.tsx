import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  justify-content: center;
  text-align: center;
`

const ComingSoon = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledNotFound>
        <LogoIcon width="64px" mb="8px" />
        <Heading size="xxl" mb="20px">Coming Soon</Heading>        
        {/* <Button as="a" href="/" size="sm">
          {TranslateString(999, 'Back Home')}
        </Button> */}
      </StyledNotFound>
    </Page>
  )
}

export default ComingSoon
