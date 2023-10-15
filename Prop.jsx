import React from "react";

// props is a way its used for transfer data from one components to another components (Parents To Child)

const Prop = (props) =>{
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card1">
                            <img src={props.img} alt="net1" height='180px' width='100%'></img>

                            <h3>{props.name}</h3>
                            <span>{props.desc}</span>

                            <div className="btn">
                                <a href={props.link}>
                                    <button>{props.btn}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prop;