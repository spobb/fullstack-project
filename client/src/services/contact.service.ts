import { Contact } from "types/contact.type";

const baseUrl = import.meta.env.VITE_API_URL;

export async function getAllContacts(): Promise<Contact[]> {
    const response = await fetch(`${baseUrl}/contacts`);

    if (!response.ok) throw new Error('Error while loading contacts');

    return await response.json();
}