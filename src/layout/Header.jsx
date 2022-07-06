import meImg from "../images/me.jpg"

export default function Header(){
  return(
    <nav className="navbar">
      <div className="brand-logo d-flex align-center justify-center">
        <a href="#">Otajon <span>Asatullayev</span> </a>
        <div className="moon-sun d-flex align-center justify-center">
          <i class="bi bi-moon-fill moon"></i>
          {/* <i class="bi bi-brightness-high sun"></i> */}
        </div>
      </div>

      <ul className="menu-list">
        <li className="menu-item">
          <a href="#" className="active">
            <i class="bi bi-house-door icon"></i> 
            Bosh sahifa
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <i class="bi bi-person icon"></i>
            Men haqimda
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <i class="bi bi-gear icon"></i>
            Xizmatlar
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <i class="bi bi-briefcase icon"></i>
            Portfolio
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <i class="bi bi-menu-button-wide icon"></i>
            Blog
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <i class="bi bi-telephone icon"></i>
            Bog'lanish
          </a>
        </li>
      </ul>

      <footer className="footer">
        <a href="mailto:otajonasatullayev@gmail.com" className="footer-link">
          <div className="footer-box d-flex align-center justify-center">
            <div className="footer-img">
              <img src={meImg} />
            </div>
            <div className="footer-text">
              <h3>Otajon asatullayev</h3>
              <em>otajonasatullayev@gmail</em>
            </div>
          </div>
        </a>
      </footer>
    </nav>
  )
}