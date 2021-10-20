import React, { Component } from 'react'
import alertify from "alertifyjs";
import { FormGroup,Label,Form,Input } from 'reactstrap';

//Form ile ilgili daha geniş örnek içeren component
export default class RichForm extends Component {

    //Formdan alacağım datalar
    state={email:"",password:"",city:"",description:""}

    //event paramatresi alan,formdan gelen dataları state eşleyen fonksiyon
    handleChange=event=>{
        let name=event.target.name;
        let value=event.target.value;

        //Eşleştirme işlemi input'un name'i ile state içerisinde ki property name ile gerçekleşir
        this.setState({[name]:value});
    }

    handleSubmit=event=>{
        //sayfa refresh olmasın diye ekledik
        event.preventDefault();

        //Eklendiğine dair uyarı mesajı
        alertify.success(`${this.state.email} başarıyla eklendi`);
        
    }

    render() {
        return (
            <div>
               <Form onSubmit={this.handleSubmit}>
                   <FormGroup>
                   <Label for="email">Email</Label>
                    <Input 
                     type="email"
                     name="email" 
                     placeholder="Enter Email" 
                     onChange={this.handleChange}/>
                   </FormGroup>
                  
                  <FormGroup>
                  <Label for="password">Password</Label>
                    <Input 
                     type="password"
                     name="password" 
                     placeholder="Enter password" 
                     onChange={this.handleChange}/>
                  </FormGroup>

                  <FormGroup>
                  <Label for="description">Description</Label>
                    <Input 
                     type="textarea"
                     name="description" 
                     placeholder="Enter description" 
                     onChange={this.handleChange}/>
                  </FormGroup>

                  <FormGroup>
                  <Label for="city">City</Label>
                    <Input 
                     type="select"
                     name="city" 
                     onChange={this.handleChange}>
                         <option>Ankara</option>
                         <option>Istanbul</option>
                         <option>Izmir</option>
                     </Input>
                  </FormGroup>

                  <button type="submit">Kaydet</button>
               </Form>
            </div>
        )
    }
}
