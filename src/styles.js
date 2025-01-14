import styled from "styled-components";

export const ContributorsList = styled.div`
  display: flex;
  align-content: center;
  flex-flow: row wrap;
  margin: 1rem 1rem;
`;

export const Profile = styled.a`
  display: flex;
  min-width: 18.125rem;
  width: 20%;
  margin: 1rem;
  padding: 1rem;
  color: inherit;
  text-decoration: none;
`;

export const Photo = styled.img`
  overflow: hidden;
  border-radius: 50%;
  height: 4.5rem;
  margin-bottom: 0;
  width: 4.5rem;
`;

export const Intro = styled.div`
  display: flex;
  flex: 1 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  text-align: inherit;
`;

export const Name = styled.h4`
  margin: 0;
  color: #2d767f;
`;

export const Subtitle = styled.small`
  margin-top: 0.25rem;
  color: #3b9a9c;
`;
