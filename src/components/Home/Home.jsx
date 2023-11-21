import {useState} from "react";

const Home = (props) => {
    const [dishes,
        setDishes] = useState(props.dishes);

    return (
        <div>

            <ul>{dishes.map((dish) => <li>{dish.name}</li>)}</ul>

        </div>
    );
}

export default Home