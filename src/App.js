import React, {useState} from 'react';
import logo from './logo.svg';
// import './App.css';
import {Route, Switch} from 'react-router-dom';
import  Datafetching from './Datafetching';
import Conceptuseeffect from './Conceptuseeffect';
import Titleuseffect from './Titleuseffect';
import Datafetching1 from './Datafetching1';
import ComA from './ComA';
import CounterOne from './CounterOne';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Service from './Service';
import Navbar from './Navbar';
import CounterTest from './CounterTest';
import Datafetchtext from './Datafetchtext';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';

function App() {

  const [addItem, setAddItem] = useState([]);
 
  const addNote = (note) => {
    // alert('I m clicked');
    setAddItem((prevData) => {
      return [...prevData, note];
    })
    console.log(note);
  }
  const onDelete = (id) => {
    setAddItem((olddata) => 
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    )
  };
      
  return (
    <>
      {/* <Datafetching /> */}
      {/* <Conceptuseeffect /> */}
      {/* <Titleuseffect /> */}
      {/* <Datafetching1 /> */}
      {/* <ComA /> */}
      {/* <CounterOne /> */}
      {/* <main>
      <Navbar />
      <Switch>
        <Route exact path='/' component={() => <About name="About" /> } /> 
        <Route exact path='/contact' component={Contact} />
        <Route path='/contact/name' component={Name} />
        <Route path='/service/:fname/:lname' render={() => <Service name="Service" /> } />
        <Route component={Error} />
        <Route />
      </Switch>
      </main> */}
      {/* Datafetchtext */}
      {/* <Datafetchtext /> */}
      <Header />
       <CreateNote passNote={addNote} />

       {addItem.map((val, index) => {
         return (
           <Note 
           key={index} 
           id={index} 
           title={val.title} 
           content={val.content} 
           deleteItem={onDelete}
           />
         );
       })}
       <Footer />
      
    </>
  );
}

export default App;
