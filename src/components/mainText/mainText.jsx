const MainText = (props, color=" #ac0095")=>{
    return(
        <div  style={{color:color, textTransform:'uppercase'}}>
            {props.children}
        </div>
    )
}

export default MainText