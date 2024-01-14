"use server";

import { api } from "~/trpc/server";

export function deleteSubscriber() {}

export async function addSubscriber(formData: FormData) {
	await api.subscriber.add.mutate(formData);
}
