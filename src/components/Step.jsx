const Step = (props) => {

return(
    <form action="">
        <label htmlFor=""></label>
        <input type="number"  onClick={(event)=> {props.updateStep(event)}} />
    </form>
)

}

export default Step;