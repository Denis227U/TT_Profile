import { useEffect, useState } from 'react';

export interface IValidateOptions {
  isEmpty: boolean;
  minLength?: number;
}

export const useValidation = (value: string, validations: IValidateOptions) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLength, setMinLength] = useState(false);

  const [isTextFieldValid, setIsTextFieldValid] = useState(true);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation as keyof IValidateOptions) {
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;

        case 'minLength':
          value.length < Object.keys(validations).length &&
          validations[validation as keyof IValidateOptions]
            ? setMinLength(true)
            : setMinLength(false);
          break;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || minLength) {
      setIsTextFieldValid(false);
    } else {
      setIsTextFieldValid(true);
    }
  }, [isEmpty, minLength]);

  return {
    isEmpty,
    minLength,
    isTextFieldValid,
  };
};

export const useTextField = (
  initialValue: string,
  validations: IValidateOptions,
) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};
