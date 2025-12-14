"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { teacherFormSchema, TeacherFormType } from "@/lib/zodSchema";
import { Field, FieldError, FieldLabel } from "./shadcnui/field";
import { Input } from "./shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcnui/select";

const CreateTeacherForm = () => {
	const { handleSubmit, control } = useForm({
		resolver: zodResolver(teacherFormSchema),
		defaultValues: {
			tFullName: "",
			tSubject: "",
		},
		mode: "all",
	});

	const createTeacherHandler = async (ctData: TeacherFormType) => {
		await new Promise<void>((r) => setTimeout(r, 1000));

		console.log(ctData);
	};

	return (
		<form
			onSubmit={handleSubmit(createTeacherHandler)}
			className="grid gap-4"
			noValidate>
			<Controller
				name="tFullName"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
						<Input
							{...field}
							id={field.name}
							aria-invalid={fieldState.invalid}
							placeholder="Enter Your Full Name"
							autoComplete="name"
						/>

						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="tSubject"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Select your subject</FieldLabel>
						<Select
							name={field.name}
							value={field.value}
							onValueChange={field.onChange}>
							<SelectTrigger
								id={field.name}
								aria-invalid={fieldState.invalid}>
								<SelectValue placeholder="Select subject" />
							</SelectTrigger>
							<SelectContent position="item-aligned">
								<SelectItem value="bengali">Bangali</SelectItem>
								<SelectItem value="english">English</SelectItem>
								<SelectItem value="math">Math</SelectItem>
								<SelectItem value="physics">Physics</SelectItem>
								<SelectItem value="chem">Chem</SelectItem>
							</SelectContent>
						</Select>

						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>
		</form>
	);
};

export default CreateTeacherForm;
