import React, {useState} from "react"
import './App.css';
import Header from "../header/header";
import Showcase from "../showcase/showcase";
import Products from "../products/products";
import Slider from "../slider/slider"
import Footer from "../footer/footer";
import Questions from "../questions/questions";
import JoinButton from "../join/joinButton";


export default function App() {

    const [inBasket, setInBasket] = useState([])
    const [join, setJoin] = useState(false)

    function AddToBasket(title) {
        setInBasket((prev) => [...new Set([...inBasket, title])])
    }

    function Delete(item) {
        setInBasket((prev) => inBasket
            .filter(prev => item !== prev))
    }

    return (
        <div className="App">
            <Header
                inBasket={inBasket}
                setInBasket={setInBasket}
                Delete={Delete}
            />
            <Showcase/>
            <Products
                setInBasket={AddToBasket}
                inBasket={inBasket}
                Delete={Delete}
            />
            <Slider/>
            <Questions/>
            <Footer/>
            <JoinButton
                join={join}
                setJoin={setJoin}
            />
        </div>
    );
}



