import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/Uitily/Pagination'
import AdminOrderDetalis from '../../Components/Admin/AdminOrderDetalis'
import AdminAddBrand from '../../Components/Admin/AdminAddBrand'
import UserSideBar from '../../Components/User/UserSideBar'
import UserAllOrder from '../../Components/User/UserAllOrder'
const UserAllOrdersPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <UserAllOrder />
                </Col>
            </Row>
        </Container>
    )
}


export default UserAllOrdersPage
