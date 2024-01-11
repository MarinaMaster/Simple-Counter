import React, {useEffect, useState} from "react";

const Counter=()=>{
    const [counter, setCounter]= useState(0);

    useEffect(() => {
        setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1)
        }, 1000);
    }, []);

    let firstDigit = Math.floor(counter/ 1000) % 10;
    let secondDigit = Math.floor(counter/100) % 10;
    let thirdDigit = Math.floor(counter/10) % 10;
    let fourthDigit = Math.floor(counter) % 10;
    return (
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col-sm">
                    <div className="block">
                        <i className="far fa-clock"></i>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="block">
                        {firstDigit}
                    </div>
                </div>
                <div className="col-sm">
                    <div className="block">
                        {secondDigit}
                    </div>
                </div>
                <div className="col-sm">
                    <div className="block">
                        {thirdDigit}
                    </div>
                </div>
                <div className="col-sm">
                    <div className="block">
                       {fourthDigit}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter