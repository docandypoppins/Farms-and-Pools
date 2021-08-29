import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  // background-image: url('/images/coin_bg_02.png');
  // background-repeat: no-repeat;
  // background-position: bottom right;
  min-height: 376px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 30px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);

  let eggPerBlock = 0;
  if(farms && farms[0] && farms[0].eggPerBlock){
    eggPerBlock = new BigNumber(farms[0].eggPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats className="card_radius grid_100">
      <CardBody>
        <Heading size="xl" mb="24px" className="hvd_comic_serif card_3_tiele">
          {TranslateString(534, 'Stats')}
        </Heading>
        <Row>
          <Text color="card_small" style={{ fontWeight: 600, fontSize: "20px" }}>{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue color="contrast" fontSize="18px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text color="card_small" style={{ fontWeight: 600, fontSize: "20px" }}>{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue color="contrast" fontSize="18px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text color="card_small" style={{ fontWeight: 600, fontSize: "20px" }}>{TranslateString(538, 'Total Burned')}</Text>
          <CardValue fontSize="18px" color="contrast" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text color="card_small" style={{ fontWeight: 600, fontSize: "20px" }}>{TranslateString(10004, 'Circulating Supply')}</Text>
          {cakeSupply && <CardValue color="contrast" fontSize="18px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text color="card_small" style={{ fontWeight: 600, fontSize: "20px" }}>{TranslateString(540, 'New Supply/block')}</Text>
          <Text bold fontSize="18px" color="contrast">{eggPerBlock}</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
