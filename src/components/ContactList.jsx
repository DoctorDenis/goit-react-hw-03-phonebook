import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

export function ContactList({ contacts, onClick }) {
  return (
    <StyledUl>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} delMethod={onClick} />
      ))}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  margin: 0 auto;
  max-width: fit-content;
  & li {
    padding: 0.5rem;
    border-bottom: 1px solid purple;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:nth-child(2n) {
      background-color: #ffffff4f;
    }
  }
  & span {
    margin-right: 20px;
  }
  & button {
    padding: 5px 10px;
    box-shadow: 0px 0px 2px black;
    &:active {
      background-color: lightblue;
      box-shadow: inset 0px 0px 2px black;
    }
  }
`;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};
