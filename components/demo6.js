import React from 'react';
import styled, { css } from 'styled-components';
import {
  FaHome,
  FaInfoCircle,
  FaThumbsUp,
  FaPlus,
  FaCog,
} from 'react-icons/fa';

const StyledSidebar = styled.section`
  width: 230px;
  height: 230px;
  background-color: #3f6695;
  font-size: 24px;
  overflow: hidden;
  font-weight: 400;
`;

const NavMenu = styled.ul`
  padding: 0;
  margin: 20px 0 0 20px;
  text-align: left;
`;

const NavListItem = styled.li`
  list-style: none;
  margin-top: 10px;
`;

const BaseIconLink = css`
  font-size: 25px;
  margin-right: 10px;
`;

const HomeIconLink = styled(FaHome)`
  ${BaseIconLink};
`;

const InfoCircleIconLink = styled(FaInfoCircle)`
  ${BaseIconLink};
`;

const ThumbsUpIconLink = styled(FaThumbsUp)`
  ${BaseIconLink};
`;

const PlusIconLink = styled(FaPlus)`
  ${BaseIconLink};
`;

const CogIconLink = styled(FaCog)`
  ${BaseIconLink};
`;

const Demo6 = () => (
  <StyledSidebar>
    <NavMenu>
      <NavListItem>
        <HomeIconLink />
        All Projects
      </NavListItem>
      <NavListItem>
        <InfoCircleIconLink />
        Yellow Projects
      </NavListItem>
      <NavListItem>
        <ThumbsUpIconLink />
        Green Projects
      </NavListItem>
      <NavListItem>
        <PlusIconLink />
        Create Project
      </NavListItem>
      <NavListItem>
        <CogIconLink />
        Admin
      </NavListItem>
    </NavMenu>
  </StyledSidebar>
);

export default Demo6;
