import React, { InputHTMLAttributes } from 'react';

import { InputBlock, Label, InputField } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const Input: React.FC<Props> = ({ label, name, ...rest }) => {
    return (
        <InputBlock>
            <Label htmlFor={ name }>{ label }</Label>
            <InputField { ...rest } id={ name }/>
        </InputBlock>
    );
}

export default Input;