import React from 'react'
import styled from 'styled-components'

const ServicesWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  line-height: 1.5;
  color: #404550;
`

const Main = styled.div`
  width: 100vw;
  padding: 15vh 15vw 5vh 15vw;
  background: linear-gradient(to bottom right, #2b3548, #0d1222);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  padding: 0 15vw 5vh 15vw;
  background: #f9f9fb;
  @media (max-width: 799px) {
    grid-template-columns: repeat(auto-fill, 50%);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`

const Title = styled.h1`
  color: #edf6fe;
`

const Title2 = styled.h3`
  color: #edf6fe;
`

const Paragraph = styled.p`
  color: #e5eef5;
`

const Column = styled.div`
  padding: 10px;
`

const Services = () =>
  <ServicesWrapper>
    <Main>
      <Title>Services</Title>
      <Paragraph>
        <Title2>Blockchain, Smart Contract and Security Auditing</Title2>
      </Paragraph>
      <Paragraph> 
        Smart contract auditing services for ERC20, 721, 1155 and more, Smart contract development services for ERC20, 721, 1155 and more, Webpages and dapps, Blockchain investigation services
      </Paragraph>
      <Title2>NFT and Token Projects</Title2>
      <Paragraph>  
        NFT art creation, NFT art generation, Branding and design, Staking and governance, Tokenization, ICO development, Project sale development, Project sale auditing, Project sale marketing, Discord security maintanence, Social media campaign development, Networking and community management
      </Paragraph>
      <Title2>Educational and Mentoring Services</Title2>
      <Paragraph>
        KronicLabz also offers educational content and mentorship services free 
        for all KronicKatz NFT holders and approved partner projects through our 
        educational platform MetaTec. For more information, please email us at
        info.metatec@kroniclabz.com 
      </Paragraph>
    </Main>
    <Grid>
      <Column>
        <h3>ERC-1155 Dyl</h3>
        <p>
          Known as the Forever Contract, the ERC1155Dyl gives creatives the 
          freedom and independence to create and distribute their own digital
          without having to rely on a marketplace lazy mint function.
        </p>
      </Column>
      <Column>
        <h3>Lottery NFTs</h3>
        <p>
          Want to keep your community active and involved during the bear market?
          How about an NFT that gifts rewards every mint and keeps liquidity 
          within the community! Check out our Manic Mouse Millions contract!
        </p>
      </Column>
      <Column>
        <h3>Launch Pad Services</h3>
        <p>
          YYep! We even provide project launch pad services too! From concept, 
          art and design, to contract creation and social media campaign and
          promotions, KronicLabz has you covered there as well.
        </p>
      </Column>
    </Grid>
  </ServicesWrapper>

export default Services
