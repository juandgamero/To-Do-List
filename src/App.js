import React from 'react'
import Navbar from './components/Navbar';
import MainContent from './MainContent';
import Footer from './components/Footer';
import todoData from './components/todoData';



function App(){

  const styles = {
    color: "#696969",
    margin: 50,
    textAlign: "center"
  }
  const TodoComponents = todoData.map(item => <MainContent key = {item.id} item = {item}/>)


  return(
    <div>
      <Navbar/>


      <h2 style = {styles}> TO DO LIST </h2>
      <div className= "list">
        {TodoComponents}
      </div>

      <Footer/>
    </div>
  )
}



export default App
