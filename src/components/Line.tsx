import { Divider } from "@mui/material";
import styled from "styled-components";

const StyledDivider = styled(Divider)`
	padding-top: 50px;
`;

export const Line = () => {
	return <StyledDivider variant="middle" flexItem />;
};
