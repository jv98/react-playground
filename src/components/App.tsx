import React, { CSSProperties } from 'react';
import Layout from './Layout';

function App() {
    return(
        <div>
        <h1 style={hedtag}>React playground</h1>
        <div > 

        <Layout/>
        
        </div>
        </div>
    );
   
}
const hedtag: CSSProperties ={
    background: 'black',
    display: 'flex',
    color: 'white',
    fontSize: 50,
    margin: 0,
};

export default App;