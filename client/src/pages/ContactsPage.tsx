import { useEffect, useState } from 'react';
import { Contact } from '#types/contact.type';
import { getAllContacts } from '#services/contact.service';

export function ContactsPage() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getAllContacts()
            .then(data => setContacts(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <img src={contact.avatar} alt={contact.firstName + contact.lastName} width={50} />
                    <div>{contact.firstName + contact.lastName} - {contact.email}</div>
                </li>
            ))}
        </ul>
    );
}