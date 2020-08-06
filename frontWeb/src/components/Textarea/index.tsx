import React, { TextareaHTMLAttributes } from 'react';

import { TextareaBlock, Label, TextareaField } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const Textarea: React.FC<Props> = ({ label, name, ...rest }) => {
    return (
        <TextareaBlock>
            <Label htmlFor={ name }>{ label }</Label>
            <TextareaField { ...rest } id={ name }/>
        </TextareaBlock>
    );
}

export default Textarea;