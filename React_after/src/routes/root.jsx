import {
    Outlet,
    useLoaderData,
    Form,
    redirect,
    NavLink,
    useNavigation,
    useSubmit,
    Link,
} from 'react-router-dom'
import { createContact, getContacts } from '../contacts'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export async function loader({ request }) {
    const url = new URL(request.url)
    const q = url.searchParams.get('q')
    const contacts = await getContacts(q)
    return { contacts, q }
}

export async function action() {
    const contact = await createContact()
    return redirect(`/contacts/${contact.id}/edit`)
}

export default function Root() {
    const { contacts, q } = useLoaderData()
    const navigation = useNavigation()
    const submit = useSubmit()

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has('q')

    useEffect(() => {
        document.getElementById('q').value = q
    }, [q])

    const dispatch = useDispatch()
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <Form id="search-form" role="search">
                        <input
                            id="q"
                            className={searching ? 'loading' : ''}
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                            defaultValue={q}
                            onChange={(event) => {
                                const isFirstSearch = q == null
                                // console.log(q, isFirstSearch)
                                submit(event.currentTarget.form, {
                                    replace: !isFirstSearch,
                                })
                            }}
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={!searching}
                        />
                        <div className="sr-only" aria-live="polite"></div>
                    </Form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Link>
                        <button to={`/`}>Home</button>
                    </Link>
                    <Link to={`/posts/edit`}>
                        <button>New post</button>
                    </Link>
                    <Link to={`/posts`}>
                        <button>Post</button>
                    </Link>
                    <Link to={`/users`}>
                        <button>User</button>
                    </Link>
                    <Link to={`/landing`}>
                        <button>Landing</button>
                    </Link>
                    <Link to={`/table`}>
                        <button>Table</button>
                    </Link>
                    <Link to={`/textEdit`}>
                        <button>TextEdit</button>
                    </Link>
                    <Link to={`/textEdit_SunEditor`}>
                        <button>SunEditor</button>
                    </Link>
                </div>

                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <NavLink
                                        to={`contacts/${contact.id}`}
                                        className={({
                                            isActive,
                                            isPending,
                                        }) => {
                                            isActive
                                                ? 'active'
                                                : isPending
                                                ? 'pending'
                                                : ''
                                        }}
                                    >
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{' '}
                                        {contact.favorite && <span>★</span>}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>
            </div>
            <div
                id="detail"
                className={navigation.state === 'loading' ? 'loading' : ''}
            >
                <Outlet />
            </div>
        </>
    )
}
