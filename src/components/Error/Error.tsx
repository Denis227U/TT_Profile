import React from 'react';
import cl from './Error.module.scss';

interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <h2 className={cl.error}>
      Упс... &#128546; Произошла ошибка:
      <span className={cl.errorText}>{error}</span>
    </h2>
  );
};

export default Error;
