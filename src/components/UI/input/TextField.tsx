import React from 'react';
import cl from './TextField.module.scss';

interface TextFieldProps {
  type?: string;
  value?: string;
  multiline?: string;
  disabled?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
  const rootClass = [cl.textField];

  if (props.multiline) {
    rootClass.push(cl.textArea);

    return <textarea className={rootClass.join(' ')} {...props}></textarea>;
  }

  return <input className={rootClass.join(' ')} {...props} />;
};

export default TextField;
