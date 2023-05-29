import './index.css'

const UserProfile = (props) => {
    const {fullDetails} = props 
    const {imageUrl,name,role} = fullDetails
  
    console.log(props)
    return(
     <li className="main-container">
      
  
      <img className='image-style' alt ="across" src={imageUrl} />


        <div className="sub-container">
            <h1 className="heading">{name}</h1>
            <p className="description">{role} </p>

        </div>


    </li>
    )
}

export default UserProfile

