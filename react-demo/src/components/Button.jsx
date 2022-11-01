import React from 'react';
import "./Button.css"
const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick} className='add-button'>
            {children}
        </button>
      );
}
 
<button>

</button>
export default Button;