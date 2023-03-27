import { Row } from "react-bootstrap"
import React from "react"
import { MdLocalActivity } from "react-icons/md"
import { HiLanguage } from "react-icons/hi2"
import { IdYHobbs } from "./InfoPersonalD"

interface Prop {
    IDYH: Array<IdYHobbs>
}

export const InfoPersonal = (prop: Prop) => {
    return (
        <Row className="mb-5">
            {prop.IDYH && prop.IDYH.map(item => {
                return (
                    <article className="col-sm-6 col-12 my-3">
                        <div className="card shadow">
                            <div className="row py-4 px-3">
                                <div id="cardd" className="col-sm-3 col-5">
                                    {item.nombre === "IDIOMAS" ? <HiLanguage className="fa-comment-alt text-center my-4" /> : <MdLocalActivity className="fa-comment-alt text-center my-4" />}
                                </div>
                                <div className="col">
                                    <h3>{item.nombre}</h3>
                                    <h4>{item.i1}</h4>
                                    <h4>{item.i2}</h4>
                                </div>
                            </div>
                        </div>
                    </article>
                )
            })}
        </Row>
    )
}