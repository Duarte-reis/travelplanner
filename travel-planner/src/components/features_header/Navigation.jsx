import "../../index.css"

function Navigation() {
    return (
        <div className="navigation_container">
          <input type="text" placeholder="Search" className="search_bar" />
              
                <div className="nav_btns">
                  <div className="icon-btn" id="settings">
                    <img src="./src/images/cog-outline.svg" alt="settings" />
                  </div>
                  <div className="icon-btn"  id="notifications">
                    <img src="./src/images/bell-outline.svg" alt="notifications" />
                  </div>
                </div>
                <div className="profile">
                  <img alt="avatar" src="./src/images/avatar.png" />
                  <div className="profile_name">
                    <p>Tom Scott</p>
                    <p>Global Travel</p>
                  </div>
                </div>
            </div>


    )
}

export default Navigation