import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";

const API_URL = "http://localhost:9800/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const cookies = new Cookies(req, res);
	const { email, password, confirmPassword, firstName, lastName, companyName, companyPhone, phone } = req.body;
	// 1. Sign up the user -> Save the token to cookie
	// 2. Save the company detail
	// 3. Save the staff detail

	try {
		const { data: response } = await axios.post(`${API_URL}/auth/signup`, { email, password });

		const headers = { Authorization: `Bearer ${response.data.token}` };

		const { data: response2 } = await axios.post(`${API_URL}/companies`, { name: companyName, phone: companyPhone }, { headers });

		const { data: response3 } = await axios.post(
			`${API_URL}/staffs`,
			{
				firstName,
				lastName,
				phone,
				company: response2.data._id,
				email,
			},
			{ headers }
		);

		cookies.set("t", response.data.token);

		return res.status(201).json({ message: response3.message, data: response3.data });
	} catch (error) {
		console.error(error);
	}
}
