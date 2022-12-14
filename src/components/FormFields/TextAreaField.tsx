import { Input, InputProps } from 'antd';
import { TextAreaProps } from 'antd/lib/input';
import React, { ChangeEvent } from 'react';
import { Control, useController } from 'react-hook-form';

export interface TextAreaFieldProps extends TextAreaProps {
  name: string;
  control: Control<any>;
  handleOnChange?: any;
  formGroupClassName?: string;
  errorClassName?: string;
}

const { TextArea } = Input;

export const TextAreaField: React.FunctionComponent<TextAreaFieldProps> = ({
  name,
  control,
  handleOnChange,
  formGroupClassName,
  errorClassName,
  ...otherProps
}) => {
  const {
    field: { value, onChange, onBlur },
    formState: { errors },
  } = useController({
    name,
    control,
  });

  return (
    <div className={`form__form-group-input-wrap ${formGroupClassName ? formGroupClassName : ''}`}>
      <TextArea
        value={value}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          if (handleOnChange) {
            handleOnChange(event);
          }
          onChange(event);
        }}
        onBlur={onBlur}
        {...otherProps}
      />
      {errors?.[name] && (
        <span className={`form__form-group-error ${errorClassName ? errorClassName : ''}`}>
          {errors[name].message}
        </span>
      )}
    </div>
  );
};
