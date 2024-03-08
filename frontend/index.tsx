import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import App from './App'

const rootElement = document.getElementById('root')

const reactRoot = ReactDOM.createRoot(rootElement as HTMLElement)

reactRoot.render(
    <App />
)