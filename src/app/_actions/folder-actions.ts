"use server";

import { api } from "~/trpc/server";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const schema = z.object({
	name: z.string({ required_error: "Provide a name" }),
});

export async function createGroupAction(formData: FormData) {
	const validatedFields = schema.safeParse({
		email: formData.get("name"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	await api.folder.create.mutate({
		name: formData.get("name")!,
	});

	revalidatePath("/n/");
}
