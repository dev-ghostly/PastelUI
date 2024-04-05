import styled from "styled-components";

export interface CheckboxProps {
  $checked?: boolean | undefined;
  $label?: string | undefined;
}

const Check = styled.input.attrs<CheckboxProps>(({ $checked }) => ({
  type: "checkbox",
  checked: $checked,
}))<CheckboxProps>`
  margin-right: 10px;
`;

const Label = styled.label`
    font-size: 16px;
    font-family: "Montserrat";
`;

const Checkbox = ({ $checked, $label }: CheckboxProps) => {
    return (
        <>
            <Check $checked={$checked} />
            <Label>{$label}</Label>
        </>
    );
}
export { Label };

export default Checkbox;