import * as React from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login(){
    return(
        <div className="d-flex justify-content-center mt-5 px-md-5">
            <Card className="shadow w-100 mx-md-5 ">  
                <Card.Body className="mt-3">
                    <Form>
                        <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
                            <FormLabel>メールアドレス</FormLabel>
                            <FormControl type="email" placeholder="name@example.com" />
                        </FormGroup>
                        <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
                            <FormLabel>パスワード</FormLabel>
                            <FormControl type="password"/>
                        </FormGroup>
                    </Form>
                    <div className="d-flex justify-content-center">
                        <Button variant="outline-success">ログイン</Button>
                    </div>
                </Card.Body>
                
            </Card>
            

        </div>
    )
}

export default Login