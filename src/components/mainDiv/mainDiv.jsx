import MainText from "../mainText/mainText"
import Button from "../button/button"

const buttonAlert = (label)=>{
    alert(`O label do botão é: ${label}`)
}

const MainDiv = ({label='Botão'})=>{
    return(
        <>
            <MainText>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quos iure eum laborum quod? Possimus voluptatum nesciunt harum unde fuga expedita velit illum, enim cupiditate ipsam. Debitis, at. Quibusdam, sit.</p>
            </MainText>
            <Button buttonAlert={buttonAlert} label={label} />
        </>
    )
}

export default MainDiv