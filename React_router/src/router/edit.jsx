import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { updateContact } from '../contacts'

export async function action({ request, params }) {
    const formData = await request.formData()
    const update = Object.fromEntries(formData)
    await updateContact(params.contactId, update)
    return redirect(`/contacts/${params.contactId}`)
}

export default function EditContact() {
    const { contact } = useLoaderData()
    const navigate = useNavigate()
    return (
        <Form method="post" id="contact-form">
            <p>
                <span>Name</span>
                <input
                    placeholder="First"
                    aria-label="First name"
                    type="text"
                    name="first"
                    defaultValue={contact.first}
                />
                <input
                    placeholder="Last"
                    aria-label="Last name"
                    type="text"
                    name="last"
                    defaultValue={contact.last}
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    type="text"
                    name="twitter"
                    placeholder="@jack"
                    defaultValue={contact.twitter}
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    aria-label="Avatar URL"
                    type="text"
                    name="avatar"
                    placeholder="avatar.jpg"
                    defaultValue={contact.avatar}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                    name="notes"
                    rows={6}
                    defaultValue={contact.twitter}
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button
                    onClick={() => {
                        navigate(-1)
                    }}
                    type="button"
                >
                    Cancel
                </button>
            </p>
        </Form>
    )
}
