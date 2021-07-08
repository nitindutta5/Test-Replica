import classnames from 'classnames';

const Overlay = ({ checkOpen }) => {
    return (
        <div className={classnames({
            "bg-overlay": true,
            "show":checkOpen
        })}>            
        </div>  
    );
} 

export default Overlay