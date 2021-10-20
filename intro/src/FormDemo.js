import React, { Component } from 'react'

export default class FormDemo extends Component {
    
    state={userName:"",city:""}

    onChangeHandler=(event)=>{

        //input içerisinde ki her değişikliğin değerini alıp state içerisinde bulunan datamıza veriyoruz
        //atama işlemi name parametresi ile atanacak olanın değişken ismine bağlı olarak gerçekleşir
        let name=event.target.name;
        let value=event.target.value;

        this.setState({[name]:value});
    }

    //Form submit edildiğinde çalışacak olan fonksiyonumuz
    onSubmitHandler=(event)=>{
        //Form submit ederken refresh eylemini gerçekleştirmesin
        event.preventDefault();
        alert(this.state.userName);
    }

    render() {
        return (
            <div>
                {/* Submit olduğunda onSubmitHandler fonksiyonu çalışsın */}
                <form onSubmit={this.onSubmitHandler}>
                    <h3>User Name</h3>
                    {/* Input onChange olunca yukarıda ki fonksiyon tetiklenecek */}
                    <input name="userName" onChange={this.onChangeHandler} type="text"></input>
                    <h3>User Name is {this.state.userName}</h3>

                    <h3>City</h3>
                    {/* Input onChange olunca yukarıda ki fonksiyon tetiklenecek */}
                    <input name="city" onChange={this.onChangeHandler} type="text"></input>
                    <h3>City is {this.state.city}</h3>

                    <button type="submit">Gönder Gelsin</button>
                </form>            
            </div>
        )
    }
}
