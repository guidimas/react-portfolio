import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import IRepository from '../../models/IRepository';

import { Container, Description } from './styles';

interface IRepositoryProps {
  repository?: IRepository;
}

const Repository: React.FC<IRepositoryProps> = ({ repository }) => {
  return repository ? (
    <Container>
      <a href={repository.svn_url} target="_blank" rel="noopener noreferrer">
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <Description>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </Description>
        <FiChevronRight size={20} />
      </a>
    </Container>
  ) : (
    <Container loading />
  );
};

export default Repository;
