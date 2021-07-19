import classnames from 'classnames';

const Overlay = ({ checkOpen }) => {
    return (
        <div className={classnames({
            "bg-overlay": true,
            "show-nav":checkOpen
        })}>            
        </div>  
    );
} 

export default Overlay