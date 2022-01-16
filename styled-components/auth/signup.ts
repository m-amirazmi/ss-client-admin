import styled from "styled-components";

export const Background = styled.div`
	background: ${({ theme }) => theme.main.bg.light};
	display: flex;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	background: ${({ theme }) => theme.main.bg.white};
	max-width: 400px;
	width: 100%;
	padding: 28px 40px;
	text-align: center;
`;

export const Title = styled.h4`
	margin: 0px;
	margin-bottom: 12px;
	padding: 0px;
	font-size: 20px;
	font-weight: 500;
	text-align: center;
	color: ${({ theme }) => theme?.main.color["gray-1"]};
`;

export const Subtitle = styled.p`
	font-size: 14px;
	font-weight: 300;
	color: ${({ theme }) => theme?.main.color["gray-2"]};
	margin: 0px;
	margin-bottom: 12px;
`;

export const Form = styled.form`
	text-align: left;
	margin: 24px 0px;
	color: ${({ theme }) => theme.main.color["gray-2"]};
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 14px;
	position: relative;
`;

export const Label = styled.label`
	font-size: 12px;
	color: ${({ theme }) => theme.main.color["gray-2"]};
	font-weight: 300;
	margin-bottom: 4px;
`;

export const Input = styled.input`
	width: 100%;
	font-size: 14px;
	padding: 8px 12px;
	border: 1px solid rgba(110, 107, 123, 0.3);
	border-radius: 4px;
	color: ${({ theme }) => theme.main.color["gray-2"]};
	transition: all 0.2s ease-in-out;
	&:focus-visible,
	&:active {
		outline: none;
		border: 1px rgba(102, 16, 242, 0.5) solid;
		box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
	}
`;

export const ViewIcon = styled.div`
	position: absolute;
	top: 52%;
	right: 10px;
	cursor: pointer;
`;

export const FlexContainer = styled.div`
	display: flex;
	gap: 12px;
`;

export const Button = styled.button`
	padding: 8px 16px;
	background-color: ${({ theme }) => theme.main.color["primary-soft"]};
	border: none;
	color: #fff;
	display: flex;
	margin-left: auto;
	margin-bottom: 0px;
	border-radius: 4px;
	align-items: center;
	gap: 4px;
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	&:hover {
		background-color: ${({ theme }) => theme.main.color["primary"]};
		box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
	}
`;

export const ButtonBack = styled.button`
	padding: 0px;
	background-color: #fff;
	border: none;
	color: ${({ theme }) => theme.main.color["gray-2"]};
	display: flex;
	align-items: center;
	gap: 4px;
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	&:hover {
		color: ${({ theme }) => theme.main.color["primary"]};
	}
`;

export const FormName = styled.p`
	text-align: center;
	margin: 0px;
	margin-bottom: 24px;
`;
