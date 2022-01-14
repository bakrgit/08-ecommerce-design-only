import React from 'react'
import { Row,Col } from 'react-bootstrap'

const ProductText = () => {
    return (
        <div>
      <Row className="mt-2">
        <div className="cat-text">الالكترونيات :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
            تايم (برودكت) أحمر <div className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">سامسنوج </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "#E52C2C" }}></div>
          <div
            className="color ms-2 border "
            style={{ backgroundColor: "white" }}></div>
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "black" }}></div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            يتميز بوجود بطاقة SIM مزدوجة بطاقة فعلية وبطاقة e-SIM يمكنك فتح قفل
            هاتفك الآيفون وتسجيل الدخول إلى التطبيقات والحسابات وغيرها بسهولة،
            وتعدّ خاصية معرَف الوجه الأسرع والأكثر أماناً للمصادقة عن طريق بصمة
            الوجه يتميز بشريحة A12 بايونيك والتي تعد أذكى وأقوى شريحة في الهواتف
            الذكية شكلت أكثر كاميرات العالم شهرة عصراً جديداً من التصوير
            الفوتوغرافي حيث يعمل جهاز الاستشعار الابتكاري بخاصية ISP والمحرك
            العصبي، ما يمكّنك من التقاط صور لم يسبق لها مثيل كاميرا بعدسة واحدة
            تجعل الأشخاص الموجودين في الأمام في نطاق تركيز دقيق على عكس نطاق
            الخلفية غير الواضح نظرة عامة
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">34000 جنية</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>
        </Col>
      </Row>
    </div>
    )
}

export default ProductText
