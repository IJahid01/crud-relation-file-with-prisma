import CreateTeacherForm from "@/components/CreateTeacherForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create teacher | User CRUD App",
	description: "Create teacher page of User CRUD App",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader className="grid place-items-center">
					<CardTitle className="text-2xl">Create Teacher</CardTitle>
				</CardHeader>

				<CardContent>
					<CreateTeacherForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
