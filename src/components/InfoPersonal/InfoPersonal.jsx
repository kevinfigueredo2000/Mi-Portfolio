import { Row } from "react-bootstrap"
import { FaUser } from "react-icons/fa"

export const InfoPersonal = (prop) => {
    const IDYH = prop.IDYH
    return (
        <Row className="mb-5">
            {IDYH && IDYH.map(item => {
                return (
                    <div className="col-sm-6 col-12 my-3">
                        <div className="card shadow">
                            <div className="row py-4 px-3">
                                <div id="cardd" className="col-sm-3 col-5">
                                    <FaUser className="fa-comment-alt text-center my-4" />
                                </div>
                                <div className="col">
                                    <h3>{item.nombre}</h3>
                                    <h4>{item.i1}</h4>
                                    <h4>{item.i2}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Row>
    )
}