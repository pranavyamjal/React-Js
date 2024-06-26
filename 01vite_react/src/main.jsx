import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Children } from 'react'


function myApp()
{
  return(
    <div>
      <h1> Custom App</h1>
    </div>
  )
}

//  const ReactElement = {
//       type: 'a',
//       props: {
//         href: 'https://google.com',
//         target: '_blank'
//       },

//       children: 'Click me to visit google'
//  }


const anotherElement = (
  
  < a href= "https://google.com" target='_blank'>
    Vist Google
  
  </a>

)

const anotherUser = "chai aur code"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com', target: '_blank'
  },
  'Click me to visit Google',
  
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)