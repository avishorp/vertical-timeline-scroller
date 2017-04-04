import ReactDom from 'react-dom'
import React from 'react'

const App = () => (
    <div>Hello React</div>
)

ReactDom.render(<App/>, document.getElementById('app'))
