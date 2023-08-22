import React, { useState } from 'react'
import "./style.css"
import menu from './Menuapi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList = [...new Set(menu.map((curElem) => {
    return curElem.category;
})
),
    "All",
];

console.log(uniqueList);

const Restaurant = () => {
    const [menuData, setMenuData] = useState(menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(menu);
            return;
        }

        const updatedList = menu.filter((curElem) => {
            return curElem.category === category;
        });

        setMenuData(updatedList);
    };


    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
