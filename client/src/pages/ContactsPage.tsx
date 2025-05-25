import { Contact } from '#types/contact.type';
import { useFetch } from '#services/fetch.hook.ts';

import './ContactsPage.css';

export function ContactsPage() {
    const { data: contacts, loading, error } = useFetch<Contact[]>(`${import.meta.env.VITE_API_URL}/contacts`);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error | {error}</p>;

    return (
        <ul>
            {contacts?.map(contact => (
                <li key={contact.id}>
                    <img src={contact.avatar} alt={contact.firstName + contact.lastName} width={50} />
                    <div>{contact.firstName + contact.lastName} - {contact.email}</div>
                </li>
            ))}
        </ul>
    );
}