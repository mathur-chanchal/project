import React from 'react';
import './App.css'
import Card from './card.jsx'
import './App.css'

function App(){
    return(
        <div className='card-container'>
        <Card image = "\src\download.png"
            title = "React Basics"
            description = 'Learn about components'
        />
        <Card image = "\src\download.png"
            title = "React Basics"
            description = 'Learn about components'
        />
        <Card image = "\src\download.png"
            title = "React Basics"
            description = 'Learn about components'
        />

    </div>
    )
}
export default App;