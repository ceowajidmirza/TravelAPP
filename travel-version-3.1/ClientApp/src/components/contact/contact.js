import React, { } from 'react';
import './contact.css';
import { Segment, Icon, Header, Grid, Container, Form, Input, TextArea, Button, Divider, Image } from 'semantic-ui-react';
import image_logo from './image_used.jpg';

const contact = () => {
    return (
        <React.Fragment>
            <div>
                <Image src={image_logo} fluid />
                <Divider hidden section />
                <Container>
                    <Grid columns={3} divided stackable container>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment raised textAlign="center">
                                    <Header icon>
                                        <Icon name="phone" color="blue" />
                                    </Header>
                                    <Segment.Inline>
                                        <h2>Phone</h2>
                                        <p>+92-3059993330</p>
                                        <p>(042) 36525550-51</p>
                                        <p></p>
                                    </Segment.Inline>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment raised textAlign="center">
                                    <Header icon>
                                        <Icon name="laptop" color="blue" />
                                    </Header>
                                    <Segment.Inline>
                                        <h2>Email</h2>
                                        <p>info@sealinks.com</p>
                                        <br></br>
                                        <br></br>
                                    </Segment.Inline>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment raised textAlign="center">
                                    <Header icon>
                                        <Icon name="location arrow" color="blue" />
                                    </Header>
                                    <Segment.Inline>
                                        <h2>Location</h2>
                                        <p>20,Ijaz Plaza, Canal Bank Rd, Ghazi Pul</p>
                                        <p>Muslimabad Tajpura, Lahore, Punjab</p>
                                    </Segment.Inline>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="mt-5">
                            <Grid.Column>
                                <Segment raised textAlign="center">
                                    <Header icon>
                                        <Icon name="whatsapp" color="blue" />
                                    </Header>
                                    <Segment.Inline>
                                        <h2>Whatsapp</h2>
                                        <p> + 92 -3049992228</p>
                                        <br></br>
                                    </Segment.Inline>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment raised textAlign="center">
                                    <Header icon>
                                        <Icon name="skype" color="blue" />
                                    </Header>
                                    <Segment.Inline>
                                        <h2>Skype</h2>
                                        <p>skype@sealinks.com</p>
                                        <br></br>
                                    </Segment.Inline>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment raised textAlign="center">
                                    <Header icon>
                                        <Icon name="viber" color="blue" />
                                    </Header>
                                    <Segment.Inline>
                                        <h2>Viber</h2>
                                        <p>skype@sealinks.com</p>
                                        <br></br>
                                    </Segment.Inline>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <Divider horizontal section> or </Divider>
                <Container>
                    <Segment>
                        <Segment basic>
                            <Header as="h2" textAlign="center" color="blue">
                                Your Details
                            </Header>
                        </Segment>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    id='form-input-control-first-name'
                                    control={Input}
                                    label='Name'
                                    placeholder='Eg: John Merry '
                                />
                                <Form.Field
                                    id='form-input-control-last-name'
                                    control={Input}
                                    label='Email'
                                    placeholder='Eg: John@gmail.com'
                                />
                                <Form.Field
                                    control={Input}
                                    label='Country'
                                    placeholder='Eg: Pakistan'
                                />
                            </Form.Group>
                            <Form.Field
                                id='form-textarea-control-opinion'
                                control={Input}
                                label='Phone #'
                                placeholder='Eg: 03005785633'
                            />
                            <Form.Field
                                id='form-textarea-control-opinion'
                                control={Input}
                                label='Subject'
                                placeholder='Subject'
                            />
                            <Form.Field
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                label='Opinion'
                                placeholder='Opinion'
                            />
                            <Form.Field color="green"
                                id='form-button-control-public'
                                control={Button}
                                content='Confirm'
                            />
                        </Form>
                    </Segment>
                </Container>
            </div>
            <br></br><br></br>
        </React.Fragment>
    );
};
export default contact;