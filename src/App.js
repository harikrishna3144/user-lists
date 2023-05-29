import UserProfile from "./components/UserProfile";
import './App.css'
const userDetailsList = [
    {
    uniqueNo :1,
  imageUrl : "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name : "Suresh",
  role : "Fullstack Developer",

  },
  {
    uniqueNo: 2,
    imageUrl : "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name : "Lucky",
    role : "Frontend Developer",
  
    },
    {
      uniqueNo : 3,
      imageUrl : "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
      name : "Pandu",
      role : "Backend Developer",
    
      },
      {
        uniqueNo : 4,
        imageUrl : "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
        name : "Jacob",
        role : "Fullstack Developer",
      
        },

]


const App = () =>(
  <div className="app-container">
    <h1 className="heading-text">User Lists</h1>
    <ul>
     {userDetailsList.map(eachItem=>(
      <UserProfile fullDetails={eachItem} key={eachItem.uniqueNo} />)
     )}
    </ul>
  </div>
)

export default App