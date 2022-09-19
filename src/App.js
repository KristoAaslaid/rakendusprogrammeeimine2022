import './App.css';

// Paigaldasime MUI (mui.com)
import Button from '@mui/material/Button';
import React, {useState} from 'react';

function App() {
  // const [show, setShow] = React.useState(true)
  const [show, setShow] = useState(true)

  return (
    <>
      <Button variant="contained">Toggle popup</Button>
      <MimicPopup show={show}/>
      {JSON.stringify(show)}
    </>
  )
}


const MimicPopup = ({show}) => {
  if (show){
    return <h1>Showing</h1>
  } else {
    return <h1>Hidden</h1>
  }
}


// Esimene võimalus
// const PropExample = (props) => <h1>Hello {props.name}</h1>

// Teine võimalus
//const PropExample = (props) => {
//  const {name} = props

//  return <h1>Hello {name}</h1>
//}

// Kolmas võimalus, apparently best õpsi arvates
const PropExample = ({name}) => <h1>Hello {name}</h1>

// PropTypes
PropExample.defaultProps = {
  name:"Joey"
}


export default App;


// Vaata korra salvestuses mui osa üle, üks link jäi kopeerimata