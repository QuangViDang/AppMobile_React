import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'
import Root, { loader as rootLoader, action as rootAction } from './router/root'
import ErrorPage from './error-page'
import Contact, {loader as contactLoader} from './router/contact'
import EditContact, {action as editAction} from './router/edit'

const Main = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                path: 'contacts/:contactId',
                element: <Contact />,
                loader: contactLoader,
            },
            {
                path: 'contacts/:contactId/edit',
                element: <EditContact />,
                loader: contactLoader,
                action: editAction
            },
        ],
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={Main} />
    </React.StrictMode>
)
