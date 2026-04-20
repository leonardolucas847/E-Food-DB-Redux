import styled from 'styled-components'

export const Section = styled.section`
  margin-bottom: 120px;
  padding-top: 336px;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 32px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
