const Button =({label, buttonAlert})=>{
    return (
        <button onClick={() => buttonAlert(label)}>{label}</button>
    )
}

export default Button