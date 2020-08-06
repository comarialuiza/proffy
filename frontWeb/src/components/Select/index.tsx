import React, { SelectHTMLAttributes } from 'react';

import { SelectBlock, Label, SelectField } from './styles';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    options: Array<{
        value: string;
        label: string;
    }>
}

const Select: React.FC<Props> = ({ label, name, options, ...rest }) => {
    return (
        <SelectBlock>
            <Label htmlFor={ name }>{ label }</Label>
            <SelectField { ...rest } id={ name }>
                <option value='' disabled defaultValue='' hidden>Selecione uma opção</option>
                { options.map(option => (
                    <option key={ option.value } value={ option.value }>{ option.label }</option>
                )) }
            </SelectField>
        </SelectBlock>
    );
}

export default Select;