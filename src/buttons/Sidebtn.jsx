import React from 'react';
import '../cssFile/Sidebtn.css';

function Sidebtn(props) {
    const { icon, text, onClick, selected } = props;

    const buttonStyle = {
        backgroundColor: selected ? 'gray' : 'initial', // Change 'blue' to the desired color
    
    };

    return (
        <div className="HA_side_btn_main" style={buttonStyle} onClick={onClick}>
            {icon}
            <span style={{display:'block'}} className='HA_side_btn_text'>{text}</span>
        </div>
    );
}

export default Sidebtn;
