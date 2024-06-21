import React from "react";
import {Box, Stack} from "@chakra-ui/react"
import Card from "./Card.jsx"
import axios from "axios";
import "./homeindex.css";
import { Container, Row, Col, Button} from "react-bootstrap";
import MainNavbar from "./navbar";
const Home = () => {

    const checkoutHandler = async(amount) =>{

        const {data:{key}} = await axios.get("http://localhost:4000/api/getkey")
        const {data: {order}} = await axios.post("http://localhost:4000/api/checkout",{
            amount
        })
        const options = {
            key, 
            amount : order.amount, 
            currency : "INR",
            name : "Foundation",
            description : "Test Transaction",
            image : "https://example.com/your_logo",
            order_id : order.id, 
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Yash Jain",
                email: "yash25465@gmail.com",
                contact: "8618444917"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#0d0d0d"
            }
        }
        var razor = new window.Razorpay(options);
        razor.open();
    }
    return (
        <div className="dashboard">
            <MainNavbar />
            <Row className="row-main">
                <Col className="left">
                    <Container className="dashboard-container">
                    <h1>Charity is an act of Soft Heart.</h1> <br></br>
                    <p>
                        We Have Built A Community Of Sharing Knowledge, Helping<br></br>
                        Each Other. We Encourage Asking For Help, And Let Inner <br></br>
                        Desire Drive Students To Success.
                    </p>
                    <Button
                        variant="outline-dark"
                        className="button-donate"
                        href="https://rzp.io/l/f2Gh0jF"
                    > Donate
                    </Button>
                    {/*
                    <Box>
                        <Stack h = {"100vh"} alignItems = "left" justifyContent={"left"} direction={["column","row"]}>
                            <Card amount = {300} img = 'https://img.etimg.com/thumb/msid-63293846,width-300,height-225,imgsize-49958,resizemode-75/donation-charity.jpg'checkoutHandler={checkoutHandler}/>
                        </Stack>
                    </Box>
                     */}

                </Container>
                </Col>
                <Col className="right">
                    <div className="right-img">
                        <img src="student.jpg" alt=""/>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default Home