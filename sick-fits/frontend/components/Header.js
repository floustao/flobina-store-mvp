import styled from 'styled-components';
import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">Logo</Link>
        </Logo>
      </div>

      <div className="sub-bar">
        <p>Search</p>
      </div>

      <Nav />
    </StyledHeader>
  );
}

// Styles
const Logo = styled.h1`
  font-size: 4rem;
  background-color: var(--red, red);
  transform: skew(-7deg);
  margin: 1rem;
  padding: 1rem;
  width: fit-content;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--white, white);
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 0.5rem solid var(--black, black);
  }

  .sub-bar {
    border-bottom: 0.125rem solid var(--black, black);
  }
`;
