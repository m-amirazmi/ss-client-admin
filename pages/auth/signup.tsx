import Head from "next/head";
import { Background, Button, ButtonBack, Container, FlexContainer, Form, FormName, Input, InputContainer, Label, Subtitle, Title, ViewIcon } from "styled-components/auth/signup";
import { FiArrowLeft, FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";
import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";

export default function SignUp() {
	const [typePassword, setTypePassword] = useState<string>("password");
	const [typeConfirmPassword, setTypeConfirmPassword] = useState<string>("password");
	const [step, setStep] = useState<number>(0);
	const [input, setInput] = useState({});

	const toggle = (type: string, setState: Dispatch<SetStateAction<string>>) => {
		if (type === "password") setState("text");
		else setState("password");
	};

	const handleInput = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => setInput({ ...input, [currentTarget.name]: currentTarget.value });

	const handleSubmit = async () => {
		const { data } = await axios.post("/api/auth/signup", input);
		console.log(data);
	};

	const renderUserInput = (
		<>
			<FormName>USER INFORMATION</FormName>
			<FlexContainer>
				<InputContainer>
					<Label>First Name</Label>
					<Input type="text" name="firstName" placeholder="eg: John" onChange={handleInput} />
				</InputContainer>
				<InputContainer>
					<Label>Last Name</Label>
					<Input type="text" name="lastName" placeholder="eg: Doe" onChange={handleInput} />
				</InputContainer>
			</FlexContainer>

			<InputContainer>
				<Label>Phone Number (+60)</Label>
				<Input type="text" name="phone" placeholder="eg: +60123456789" onChange={handleInput} />
			</InputContainer>

			<InputContainer>
				<Label>Email</Label>
				<Input type="email" name="email" placeholder="eg: johndoe@gmail.com" onChange={handleInput} />
			</InputContainer>

			<InputContainer>
				<Label>Password</Label>
				<Input type={typePassword} name="password" placeholder="············" onChange={handleInput} />
				<ViewIcon onClick={() => toggle(typePassword, setTypePassword)}>{typePassword === "password" ? <FiEye /> : <FiEyeOff />}</ViewIcon>
			</InputContainer>

			<InputContainer>
				<Label>Confirm Password</Label>
				<Input type={typeConfirmPassword} name="confirmPassword" placeholder="············" onChange={handleInput} />
				<ViewIcon onClick={() => toggle(typeConfirmPassword, setTypeConfirmPassword)}>{typeConfirmPassword === "password" ? <FiEye /> : <FiEyeOff />}</ViewIcon>
			</InputContainer>
		</>
	);

	const renderCompanyInput = (
		<>
			<FormName>COMPANY INFORMATION</FormName>

			<InputContainer>
				<Label>Name</Label>
				<Input type="text" name="companyName" placeholder="eg: John Tech Sdn Bhd" onChange={handleInput} />
			</InputContainer>

			<InputContainer>
				<Label>Phone Number (+60)</Label>
				<Input type="text" name="companyPhone" placeholder="eg: +60123456789" onChange={handleInput} />
			</InputContainer>
		</>
	);

	const renderStepButton = () => {
		if (step === 0)
			return (
				<Button onClick={() => setStep(step + 1)}>
					Next
					<FiArrowRight />
				</Button>
			);
		else
			return (
				<>
					<ButtonBack onClick={() => setStep(step - 1)}>
						<FiArrowLeft />
						Back
					</ButtonBack>
					<Button onClick={handleSubmit}>Sign Up</Button>
				</>
			);
	};

	return (
		<>
			<Head>
				<title>Sign Up!</title>
			</Head>
			<Background>
				<Container>
					<Title>Streamline Your Business!</Title>
					<Subtitle>Your business companion on managing staffs, inventories and sales record!</Subtitle>
					<Form>
						{step === 0 && renderUserInput}
						{step === 1 && renderCompanyInput}
					</Form>
					<FlexContainer>{renderStepButton()}</FlexContainer>
				</Container>
			</Background>
		</>
	);
}
