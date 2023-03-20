import React from 'react';
import styled from 'styled-components';

type SelectProps = {
    options: string[];
    label?: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
};

const StyledSelect = styled.select`
    display: flex;
    flex-direction: row;
    justify-content: center;    
    align-items: center;
    padding: 12px 12px 12px 16px;
    outline: none;
    background: #FFFFFF;
    border: 1px solid #A1A7C4;
    border-radius: 6px;
    flex-grow: 1;
`;

const StyledOption = styled.option`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 12px 12px 16px;
    background: #FFFFFF;
    border-radius: 6px;
    &:checked{
        background-color: #ECF2FF;
        color: #333752;
    }
`

const StyledLabel = styled.label`
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: #7E84A3;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;

`

function Select(props: SelectProps) {
    return (
        <StyledLabel>
            {props.label}
            <StyledSelect data-testid={`select-${props.label}`} onChange={props.onChange}>
                {props.options.map((item, index) => {
                    return <StyledOption data-testid='option' key={`${index}${item}`} value={item}>
                        {item}
                    </StyledOption>
                })}
            </StyledSelect>
        </StyledLabel>
    );
}

export default Select;