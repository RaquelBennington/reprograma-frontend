function Header() {
    return (
        <>
            <div className="header-container">
                <div className="container-left">
                    <div className="logotipo">
                        <span>Raquel</span>
                    </div>

                    <div className="header-box">
                        <span>Frontend <br></br>Developer<span>.</span></span>
                    </div>

                    <div>
                        <p className="">Gosto de criar produtos frontend sólidos e escaláveis ​​com ótimas experiências de usuário.</p>
                    </div>
                </div>

                <div className="container-rigth">
                    <div className="menu" >
                        <img src="https://cdn.icon-icons.com/icons2/2582/PNG/512/menu_icon_153999.png" alt="menu" />
                    </div>
                    
                    <div>
                        <img className="header-photo" src="https://media-exp2.licdn.com/dms/image/C4D03AQFcLYXRecZUSw/profile-displayphoto-shrink_800_800/0/1580784091866?e=1662595200&v=beta&t=lT7jbWWhoqcPW91DMwTYo_s3PUfbi_C5q3zrkwyyhWw" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header