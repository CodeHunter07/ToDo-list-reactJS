import homeImg from "../images/home-img.jpg"

export default function Home(){



  return(
    <div className="home-content d-flex align-center justify-center driction-column">
      <div className="home-img">
        <img src={homeImg} />
      </div>
      <h3 className="home-title">
        Otajon Asatullayev
      </h3>
      <div className="text-timer">
        <p className="key-words">Front end dasturchi</p>
        {/* <p className="key-words">Web dezayner</p> */}
      </div>
      <p className="home-subtitle">
        Men ITEG IT Academyda Front-end React dasturchiman. Bu sohada 2 yildan ortiq professional tajribaga egaman
      </p>
    </div>
  )
}