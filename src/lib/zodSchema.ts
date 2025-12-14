import z from "zod";

export const teacherFormSchema = z.object({
	tFullName: z.string().min(6, "Full Name must be 6 characters long"),
	tSubject: z.string().min(1, "Please Select a subject"),
});

export type TeacherFormType = z.Infer<typeof teacherFormSchema>;

export const studentFormSchema = z.object({
	sFullName: z.string().min(6),
	sEmail: z.email().min(13),
	sGender: z.string().min(4, "Please Select Your Gender"),
	sPhoneNumber: z
		.string()
		.length(10, "Please enter your 10 degit phone number"),
	teacherId: z.string().min(1, "Please Select Your Teacher"),
});
