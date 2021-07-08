const NextBtn = (props) => {
    const { onClick, className, style } = props;
    return (
		<svg id="next" style={style} className={className} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="75.263" height="75.263" viewBox="0 0 75.263 75.263"><g transform="translate(75.263 75.263) rotate(180)"><ellipse cx="37.631" cy="37.632" rx="37.631" ry="37.632" fill="#fff"/><path d="M12232.827,4756l-13.487,13.487,13.487,13.488" transform="translate(-12188.588 -4731.892)" fill="none" stroke="#828692" strokeLinecap="round" strokeWidth="2"/></g></svg>
    )
}

export default NextBtn