import React from "react";
import RectangularButton from "../component/UI/Buttons/RectangularButton";
import COLOR from "../contants/color";
export default function ContactScreen() {
  return (
    <div className="contact">
      <div className="section__title">
        <span></span>
        <h3>Liên hệ</h3>
      </div>
      <div className="section__contact">
        <h2 className="section__contact--text">Liên hệ với tôi</h2>
        <div className="contact__btns">
          <div className="contact__btn">
            <RectangularButton
              buttonTitle={"Facebook"}
              linkAdress={"https://www.facebook.com/nhan.tranminh.16/"}
              mainColor={COLOR.BLUE}
              classAdd={"btn-blue"}
            />
          </div>
          <div className="contact__btn">
            <RectangularButton
              buttonTitle={"Zalo"}
              linkAdress={"https://zalo.me/0962165084"}
              mainColor={COLOR.BLUE}
              classAdd={"btn-blue"}
            />
          </div>
          <div className="contact__btn">
            <RectangularButton
              buttonTitle={"Mail"}
              linkAdress={"mailto:tranminhnhanhqng@gmail.com"}
              mainColor={COLOR.RED}
            />
          </div>
          <div className="contact__btn">
            <RectangularButton
              buttonTitle={"Phone"}
              linkAdress={"tel:0962165084"}
              classAdd={"btn-github"}
            />
          </div>
          <div className="contact__btn">
            <RectangularButton
              buttonTitle={"Github"}
              linkAdress={"https://github.com/TMN2611"}
              classAdd={"btn-github"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
