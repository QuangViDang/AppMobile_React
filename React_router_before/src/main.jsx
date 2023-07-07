import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root, { loader as rootLoader, action as rootAction } from './router/root'
import ErrorPage from './error-page'
import Contact, { loader as contactLoader } from './router/contact'
import EditContact, { action as editAction } from './router/edit'
import { action as destroyAction } from './router/destroy'
import Index from './router'
import { Provider } from 'react-redux'
import store from './app/store'
import { Counter } from './feature/counter/counter'
import AddPostForm from './feature/counter/posts/AddPostForm'
import PostList from './feature/counter/posts/PostList'

const Main = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            { index: true, element: <Index /> },
            { path: 'counter', element: <Counter /> },
            {
                path: 'contacts/:contactId',
                element: <Contact />,
                loader: contactLoader,
            },
            {
                path: 'contacts/:contactId/edit',
                element: <EditContact />,
                loader: contactLoader,
                action: editAction,
            },
            {
                path: '/posts/edit',
                element: <AddPostForm />,
            },
            {
                path: '/posts',
                element: <PostList/>,
            },
            {
                path: 'contacts/:contactId/destroy',
                action: destroyAction,
            },
        ],
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        {' '}
        <React.StrictMode>
            <RouterProvider router={Main} />
        </React.StrictMode>
    </Provider>
)
