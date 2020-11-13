import React from 'react';

import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import IRepository from '../../models/IRepository';

import { Container, Description } from './styles';

interface IRepositoryProps {
  repository?: IRepository;
}

const Repository: React.FC<IRepositoryProps> = ({ repository }) => {
  return repository ? (
    <Container>
      <Link to={`/repositories/${repository.full_name}`}>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <Description>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </Description>
        <FiChevronRight size={20} />
      </Link>
    </Container>
  ) : (
    <Container loading />
  );
};

export default Repository;
