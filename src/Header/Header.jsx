import './Header.css'

function Header() {
 

    return (
      <>
     <section id='header'>
        <div className="container">
            <div className="header-wrapper">
                <div className="header-logo">
                    <img src="" alt="" />
                </div>
                <nav>
                    <div className="navbar-list">
                        <ul>
                           <li className='navbar-item'><a href="/">Home</a></li>
                           <li className='navbar-item'><a href="/">About</a></li>
                           <li className='navbar-item'><a href="/">Tours</a></li>
                           <li className='navbar-item'><a href="/">Contacts</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="header-box">
                    <div className="header-lang"></div>
                    <div className="header-social"></div>
                </div>
            </div>
        </div>
     </section>
      </>
    )
  }
  
  export default Header
  