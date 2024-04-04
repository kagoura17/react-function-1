import "./index.css"
import React from 'react';
import Card from "./Conponement/Card";




const App = () => {
  return (
    <div className="cards">
<Card userName="Selma" point={10} ></Card>
<Card userName="Nino" point={20}></Card>
<Card userName="Louna" point={30}></Card>
    </div>
  );
};

export default App;

