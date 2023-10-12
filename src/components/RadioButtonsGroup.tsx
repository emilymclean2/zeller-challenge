import Radio from "@mui/material/Radio";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel, { FormControlLabelProps } from "@mui/material/FormControlLabel";
import styled from "styled-components";
import { Name } from "./Text";
import { blueBackgroundColor, borderRadius } from "../helpers/styles";

const StyledFormControlLabel = styled(FormControlLabel)`
	background: ${(props) => props.checked && blueBackgroundColor};
	margin: 5px;
	padding: 5px;
	border-radius: ${borderRadius};
`;

const RadioGroupLabel = (props: FormControlLabelProps) => {
	const radioGroup = useRadioGroup();
	let checked = false;
	if (radioGroup) {
		checked = radioGroup.value === props.value;
	}

	return <StyledFormControlLabel checked={checked} {...props} />;
};

export const RadioButtonsGroup = ({ onRadioChange }: { onRadioChange: (value: Role) => void }) => {
	return (
		<RadioGroup
			aria-labelledby="radio-buttons-group-label"
			defaultValue="Admin"
			name="radio-buttons-group"
			onChange={(_event, value) => onRadioChange(value as Role)}
		>
			<RadioGroupLabel value="Admin" control={<Radio />} label={<Name>Admin</Name>} />
			<RadioGroupLabel value="Manager" control={<Radio />} label={<Name>Manager</Name>} />
		</RadioGroup>
	);
};
