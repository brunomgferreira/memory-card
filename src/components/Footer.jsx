import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
import { useState } from 'react'

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright © {Date().getFullYear} B. Ferreira</p>
      <GithubLink href="https://github.com/brunomgferreira" target="_blank">
        <FaGithub />
      </GithubLink>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`

const GithubLink = styled.a`
  display: flex;
  padding-bottom: 0.3rem;
  margin-left: 0.7rem;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.8rem;

  &:hover {
    color: ${({ theme }) => theme.colors.lightHover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.lightActive};
  }
`

export default Footer