import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard className="card_radius">
      <CardBody>       
        <Text color="textSubtle" className="card_3_tiele">
          {TranslateString(762, 'Earn up to')}
        </Text>
        <>
          <Heading size="xl">{`$${tvl}`}</Heading>
       
          <Text color="textblack" className="card_3_subtiele">{TranslateString(999, 'Total Value Locked (TVL)')}</Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
