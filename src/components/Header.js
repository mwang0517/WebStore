import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Panel from 'components/Panel'
import UserProfile from "components/UserProfile"


const Header = props => {

    const toProfile = () =>{
        Panel.open({
            props:{
                user: props.user 
            },
            component:UserProfile,
            callback: data=>{
                if (data === 'logout'){
                    props.history.go(0); 
                }
            }
        })
    }

    return(
        <div className="header"> 
        <div className="grid">
            <div className="start"> 
                <Link to="/">Home</Link>
            </div>
            <div className="end">
                {props.user.nickname ? (     
                    <span className="nickname" onClick={toProfile}>
                        <i className="far fa-user"></i>
                        {props.user.nickname}                  
                    </span>
                ):(
                    <React.Fragment>
                        <Link to="/login">Login</Link> 
                        <Link to="/register">Register</Link>
                    </React.Fragment>
                )}
            </div>
        </div>
    </div>
    )
}
export default withRouter(Header);



// class Header extends React.Component{

//     renderLink(){
//         const nickname = this.props.nickname
//         if(nickname){
//             return(
//                 <span className="nickname">
//                     <i className="far fa-user"></i>
//                     {nickname}
//                 </span>
//             )
//         }else{
//             return(
//                 <React.Fragment>
//                     <a href="/">LOGIN</a>
//                     <a href="/">REGISTER</a>
//                 </React.Fragment>
//             )
//         }
//     }
    
//     render(){
//         return(
//             <div className="header">
//                 <div className="grid"> 
//                     <div className="start">
//                         <a href="/">Home</a> 
//                     </div>
//                     <div className="end">{this.renderLink()}</div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Header