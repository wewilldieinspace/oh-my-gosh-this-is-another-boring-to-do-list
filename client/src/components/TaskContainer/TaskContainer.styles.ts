import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 23%;
  height: 70vh; 

  border-radius: 15px;
  border: .5px solid #fff;
  box-shadow: 0px 0px 12px 6px rgba(45, 45, 45, 0.4);

  overflow: auto;

  // hide scrollbar
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContainerHeader = styled.div`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;

  width: 100%;

  background-color: #fff;
`;

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;

  margin-top: 15px;

  padding: 1em;

  border-bottom: 1px solid #fdfdfd;
`;

export const ItemHeader = styled.div`
  // position: relative;
`;

export const DeadlineDate = styled.span`
  display: inline-block;
  position: absolute;

  right: 1em;
  
  size: 15px;
`;
