import React from 'react'
import Navbar from './components/Navbar';
import MainContent from './MainContent';
import Footer from './components/Footer';
import Contact from './Contacts';
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
      <Contact
        name = "Dwyane Wade"
        imgUrl = "https://d1tjohjvimcqgl.cloudfront.net/category/913_n.jpg"
        phone = "9541234567"
        email = "wade3@gmail.com"
      />
      <Contact
        name = "Lebron James"
        imgUrl = "https://specials-images.forbesimg.com/imageserve/1053463768/960x0.jpg?fit=scale"
        phone = "9541234567"
      />


      <h2 style = {styles}> TO DO LIST </h2>
      <div className= "list">
        {TodoComponents}  
      </div>

      <Footer/>
    </div>
  )
}



export default App
