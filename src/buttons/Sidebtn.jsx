
import '../cssFile/Sidebtn.css'


function Sidebtn(props){
    const {icon,text}=props
    return(
        <div className="HA_side_btn_main">
            {icon}
            <span className='HA_side_btn_text'>{text}</span>
        </div>
    )
}
export default Sidebtn