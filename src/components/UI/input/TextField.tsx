import React from 'react';
import cl from './TextField.module.scss';

interface TextFieldProps {
  type?: string;
  value?: string;
  isNotValid?: boolean;
  multiline?: string;
  disabled?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  onBlur,
  isNotValid,
  ...props
}) => {
  const rootClass = [cl.textField];

  console.log('isNotValid', isNotValid);

  if (isNotValid) {
    rootClass.push(cl.error);
  }

  if (props.multiline) {
    rootClass.push(cl.textArea);

    return <textarea className={rootClass.join(' ')} {...props}></textarea>;
  }

  return (
    <input
      className={rootClass.join(' ')}
      {...props}
      onBlur={(e) => onBlur && onBlur(e)}
    />
  );
};

export default TextField;
