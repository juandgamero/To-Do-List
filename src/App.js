import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './MainContent';
import Footer from './components/Footer';
import todoData from './todoData';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todoData
    }
  }

  render(){
      const styles = {
        color: "#696969",
        margin: 50,
        textAlign: "center"
      }
      const TodoComponents = this.state.todos.map(item => <MainContent key = {item.id} item = {item}/>)


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
  }





export default App
