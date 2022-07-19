import '@/styles/index.css'
// import "./global"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// const App = () => {
//   return (<div>asd</div>)
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)

postMessage({ payload: 'removeLoading' }, '*')

