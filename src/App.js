// App.js
import React from 'react';
import './App.css';  // Assuming CSS styles from naruto.css are copied here

const CharacterBox = ({ name, name2, image, link }) => {
    return (
        <div className="box">
            <a href={link}>
                <img src={image} alt={name} />
                <div className="layer">
                    <h3>{name}</h3>
                    <h3>{name2}</h3>
                </div>
            </a>
        </div>
    );
};

function App() {
    return (
        <div className="main">
            <h1>WELCOME TO NARUTO-VERSE</h1>
            <h3>CLICK ON YOUR FAVOURITE CHARACTER</h3>
            <div className="section">
                <div className="container">
                    <CharacterBox name="SAI" name2='' image="sai.jpg" link="https://naruto.fandom.com/wiki/Sai" />
                    <CharacterBox name="SAKURA" name2= 'HARUNO' image="sakura.png" link="https://naruto.fandom.com/wiki/Sakura_Haruno" />
                    <CharacterBox name="KAKASHI" name2='HATAKE'image="kakashi.jpg" link="https://naruto.fandom.com/wiki/Kakashi_Hatake" />
                    <CharacterBox name="NARUTO" name2='UZUMAKI'image="naruto.jpg" link="https://naruto.fandom.com/wiki/Naruto_Uzumaki" />
                    <CharacterBox name="SASUKE" name2 ='UCHIHA' image="sasuke.jpg" link="https://naruto.fandom.com/wiki/Sasuke_Uchiha" />
                </div>
            </div>
        </div>
    );
}

export default App;
