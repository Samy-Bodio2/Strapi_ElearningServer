import styled from 'styled-components';

import { useConfigurations } from '../hooks/useConfigurations';

const Img = styled.img`
  height: ${72 / 16}rem;
`;

const Logo = () => {
  const {
    logos: { auth },
  } = useConfigurations();

  return <Img src={auth?.custom ?? auth.default} aria-hidden alt="" />;
};

export { Logo };
