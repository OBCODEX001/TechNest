import "./Categories.css"
import {NavLink} from "react-router-dom"

const Categories = () => {
  return (
    <>
     <div className="firstInnerSection">
        <div className="categories">
          <h1>CATEGORY</h1>
        </div>
        <div className="shopCategories">
        <NavLink to="/Shop/AccessoriesSupplies" className={({isActive})=> isActive ? "activeTab": " "}><div><p>Accessories & Supplies</p></div></NavLink>
        <NavLink to="/Shop/HomeAudio" className={({isActive}) => isActive ? "activeTab" : " "}><div><p>Home Audio</p></div></NavLink>
        <NavLink to="/Shop/HeadPhones" className={({isActive})=> isActive ? "activeTab" : " "}><div><p>HeadPhones</p></div></NavLink>
        <NavLink to="/Shop/HomeAppliances" className={({isActive})=> isActive ? "activeTab" : " "}><div><p>Home Appliances</p></div></NavLink>
        <NavLink to="/Shop/TelevisionAudio" className={({isActive})=> isActive ? "activeTab" : " "}><div><p>Television and Audio</p></div></NavLink>
        <NavLink to="/Shop/WearableTechnology" className={({isActive})=> isActive ? "activeTab" : " "}><div><p>Wearable Technology</p></div></NavLink>
        </div>
      </div> 
    </>
  )
}

export default Categories
