import CreateStudentForm from "@/components/CreateStudentForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Student | User CRUD App",
	description: "Create student page of User CRUD App",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader className="grid place-items-center">
					<CardTitle className="text-2xl">Create Student</CardTitle>
				</CardHeader>

				<CardContent>
					<CreateStudentForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
