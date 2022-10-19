import React from "react";
import Cards from "../cards/cards";
import ("./sevices.css");
// import footer from "../Footer/footer";
function Services(){
    return(
        <div className="services">
            {/*left side*/}
            <div className="awasome">
                <span>My Awosome</span>
                <span>Qulification</span>
                <spane>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla veniam illo, sint beatae <br/> architecto unde repellat doloribus velit tempora sunt aperiam reprehenderit error sed saepe est illum totam dolor quas!</spane>
                <button className="button s-button" style={{margin:"20px"}}>Download Cv</button>
            </div>
            {/*right side*/}
            <div className="cards">
               <div className="discription">
                <Cards 
                cardTitle = "Dipoma In IT" 
                cardSubTitle = "Languages"
                cardText = "Esoft Metro Campus"
                />
               </div>
               <div className = "discription">
                <Cards 
                cardTitle = "HND In IT"
                cardSubTitle = "Languages 2"
                cardText = "ATI Labuduwa Galle"
                />
               </div>
               <div className = "discription">
                <Cards 
                cardTitle = "Diploma In Java"
                cardSubTitle = ""
                cardText = "IJSE CMDJ"
                />
               </div>
            </div> 
            {/* <footer/>  */}
        </div>
    )
}
export default Services