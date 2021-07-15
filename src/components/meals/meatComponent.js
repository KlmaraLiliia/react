import './meatComponent.css'

function MeatComponent (props){
    return <div>


        <img src={props.image} alt=""/>
            <h2>
                {props.description}
            </h2>


    </div>
}
export default MeatComponent;