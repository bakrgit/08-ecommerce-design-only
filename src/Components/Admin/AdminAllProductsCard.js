import React from 'react'
import { Col,Card,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod1 from '../../images/prod1.png'
const AdminAllProductsCard = () => {
    return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div className="d-inline item-delete-edit">ازاله</div>
                        <div className="d-inline item-delete-edit">تعديل</div>
                    </Col>
                </Row>
                <Link to="/products/:id" style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                                سود كربون ساعة يد ذكية بيب إس أسود كربون{" "}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">4.5</div>
                                <div className="d-flex">
                                    <div className="card-currency mx-1">جنيه</div>
                                    <div className="card-price">880</div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default AdminAllProductsCard
