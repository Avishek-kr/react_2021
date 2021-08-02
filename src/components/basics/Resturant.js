import {React ,useState} from 'react'
import './style.css'
import Menu from "./MenuApi"
import MenuCard from './MenuCard';

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const filterItem = (category) =>{
        const updatedList= Menu.filter((currEle)=>{
            return currEle.category === category;
        })
        setMenuData(updatedList)
    }
    return (
        <>
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>Breakfast</button>
                <button className="btn-group__item">lunch</button>
                <button className="btn-group__item">Evening</button>
                <button className="btn-group__item">Dinner</button>
                <button className="btn-group__item">All</button>
            </div>
        </nav>
          <MenuCard menuData={menuData}/>
        </>
    )
}

export default Resturant
