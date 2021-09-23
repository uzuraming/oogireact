import { Navbar, Container } from "react-bootstrap";

function Header(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container className="py-2">
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Container>
        </Navbar>
    )

}

export default Header