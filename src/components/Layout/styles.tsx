import styled from 'styled-components'

export const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 46px auto 52px;
  grid-template-columns: 70px 240px auto 240px;
  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';
`