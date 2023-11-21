import {useState} from "react";
import {Button, Card, Col, Row} from "react-bootstrap";

const Menu = (props) => {
    const [dishes,
        setDishes] = useState(props.dishes);

    return (
        <Row>
            {dishes.map((dish) => (
                <Col key={dish.id} md={4}>
                    <Card style={{
                        margin: '10px'
                    }}>
                        <Card.Img variant="top" src={dish.image} alt={dish.name}/>
                        <Card.Body>
                            <Card.Title>{dish.name}</Card.Title>
                            <Card.Text>{dish.description}</Card.Text>
                            <Card.Text>Price: ${dish
                                    .price
                                    .toFixed(2)}</Card.Text>
                            <Button variant="primary">Order Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Menu