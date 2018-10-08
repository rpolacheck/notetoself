import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {
    constructor() {
        super();
        
        this.state = {
            text: '',
            notes: []
        };
    }
    
    submit() {
        const notes = this.state.notes;
        
        const newNote = { text: this.state.text };
        
        notes.push(newNote);
        
        this.setState({ notes: notes })
    }
    
    
    render() {
        return (
            <div>
                <h2>Note To Self</h2>
                <Form inline>
                    <FormControl onChange={event => this.setState({ text: event.target.value }) } />
                    {' '}
                    <Button onClick={() => this.submit() }>Submit</Button>
                </Form>
                {
                this.state.notes.map((note, index) =>{
                  return (
                  <div key={index}>{note.text}</div>
                  )  
                })
                }
            </div>    
        );
    }
}

export default App;