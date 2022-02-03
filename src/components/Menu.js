import React,{ useEffect } from 'react';
import "../styles/LeftMenu.css";

function Menu({title, MenuObject}){
useEffect(() => {
    const allLi = document
    .querySelector(".MenuContainer ul")
    .querySelectorAll("li");

    function changeMenuActive(){
        allLi.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
}, []);

    return (
        <div className="MenuContainer">
        <p className="title">{title}</p>

        <ul>
            {MenuObject &&
            MenuObject.map((Menu) => (
                <li key={Menu.id}>
                    {" "}
                    <a href='a'>
                        <i>{Menu.icon}</i>
                        <span>{Menu.name}</span>
                    </a>
                </li>
            ))
            }
        </ul>
            
        </div>
    );
}

export {Menu};
