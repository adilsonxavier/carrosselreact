import React from "react";
import logo from "./static/images/super-shoes.png";
import "./App.css";
import chevronright from "./static/images/chevronright.png";

export default function App() {
    const [data, setData] = React.useState([])
    const carouselRef = React.useRef(null)

    React.useEffect((
    ) => {
        fetch("http://localhost:3054/public/shoes.json",
            {
                method: "get",
                headers: {
                    "content-type": "application/json"
                }
            })
            .then((resp) => resp.json())
            .then((shoes) => setData(shoes))
            .catch((erro) => console.log(erro));
    }, []);

    if (!data || !data.length) { return false; }

    const handleLeftClick = (e) => {
        e.preventDefault();
        console.log(carouselRef.current.offsetWidth);
        console.log(carouselRef.current.offsetHeight);
        carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth 
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carouselRef.current.scrollLeft += carouselRef.current.offsetWidth 
    }

    return (
        (data &&
            (

                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="imagem" />
                    </div>

                <div className="carousel" ref={carouselRef }>
                        {data.map((item) => {
                            const { id, name, price, oldPrice, image } = item;
                            return (
                                <div className="item" key={id}>
                                    <div className="image">
                                        <img src={image} alt="shoe" />
                                    </div>
                                    <div className="info">
                                        <span className="name">{name}</span>
                                        <span className="oldPrice">{oldPrice}</span>
                                        <span className="price">{price}</span>

                                    </div>
                                </div>)
                        })}


                    </div>
                    <div className="buttons" >
                    <button onClick={ handleLeftClick}> <img src={chevronright} alt="scroll left" /> </button>
                    <button onClick={handleRightClick} > <img src={chevronright} alt="scroll right" /> </button>
                    </div>
                </div>
            )
        )
    );
}

