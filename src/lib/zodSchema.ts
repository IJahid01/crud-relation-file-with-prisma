import z from "zod";

export const teacherFormSchema = z.object({
	tfullname: z.string().min(6, "Full Name must be 6 characters long"),
	tsubject: z.string().min(1, "Please Select a subject"),
});

export const studentFormSchema = z.object({
	sfullname: z.string().min(6),
	semail: z.email().min(13),
	sgender: z.string().min(4, "Please Select Your Gender"),
	sphonenumber: z
		.string()
		.min(10)
		.max(10, "Please enter your 10 degit phone number"),
	teacher: z.string().min(1, "Please Select Your Teacher"),
});
