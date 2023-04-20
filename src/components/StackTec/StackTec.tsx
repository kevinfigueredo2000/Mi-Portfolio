import { Row } from "react-bootstrap"
import StackTec from "../StackTec.json";
import React from "react";

export const StackTecComponent = () => (
    <Row className="mb-3 inner">
        {
            StackTec && StackTec.map(stack => {
                return (
                    <div className="col-6 col-sm-3 col-xxl-2 col-xl-2 mb-3">
                        <div className="card shadow">
                            <img src={stack.icon} className="imgscards" key={stack.caption} alt={stack.caption} /> <br />
                            <h3 className="text-center tec">{stack.caption}</h3>
                        </div>
                    </div>
                )
            })
        }
    </Row>
)
