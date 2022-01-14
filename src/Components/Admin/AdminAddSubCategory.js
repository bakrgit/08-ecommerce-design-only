import React from 'react'
import { Row, Col } from 'react-bootstrap'

const AdminAddSubCategory = () => {
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف الفرعي"
                    />
                    <select name="languages" id="lang" className="select mt-3 px-2 ">
                        <option value="val">التصنيف الاول</option>
                        <option value="val2">التصنيف الثاني</option>
                        <option value="val2">التصنيف الثالث</option>
                        <option value="val2">التصنيف الرابع</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddSubCategory
