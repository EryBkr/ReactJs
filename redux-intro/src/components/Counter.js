import React, { Component } from 'react'
//Redux a bağlanmayı sağlar
import {connect} from "react-redux";

//Bu component Redux ta bulunan sayaç değerini(state) tutar
  class Counter extends Component {
    render() {
        return (
            <div>
                {/* counter isimli propstan değeri okuyorum */}
                <h1>{this.props.counter}</h1>
            </div>
        )
    }
}

//Reducer ları index.js e eklemiştik zaten.Orası aracılığıyla counterReducer'a erişiyorum
function mapStateToProps(state){
    //Reducer içerisinden counter isimli props a değer ataması yapıyor
    return {counter:state.counterReducer}
}

//State i props a bağlayacak
export default connect(mapStateToProps)(Counter);
