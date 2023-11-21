import {Button} from "react-bootstrap";
import './Home.css'

const Home = () => {

    return (
        <div className="jumbotron container-fluid text-sm-center p-5 bg-light">
            <h1>Welcome to Sabor Boricua</h1>
            <p>
                Your culinary passport to the vibrant flavors of Puerto Rico right in the heart
                of Spain.
            </p>
            <p>
                Immerse yourself in the rich tapestry of Puerto Rican cuisine, where each dish
                is a celebration of tradition, passion, and a fusion of diverse influences.
            </p>
            <p>
                Join us at Sabor Boricua and embark on a culinary adventure that transcends
                borders. Let the rhythmic beats of salsa and the tropical ambiance transport you
                to the enchanting island of Puerto Rico, right here in Spain. ¡Buen provecho!
            </p>
            <p>
                <Button variant="primary">View Menu</Button>
            </p>
        </div>
    )
}

export default Home