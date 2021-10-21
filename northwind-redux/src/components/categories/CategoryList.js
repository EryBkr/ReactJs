import React, { Component } from 'react'
import { connect } from 'react-redux'

class CategoryList extends Component {
    render() {
        return (
            <div>
                <p>Kategori Listesi</p>
                {/* bu değer store dan geliyor */}
                <h5>Seçili Kategori: {this.props.currentCategory}</h5>
            </div>
        )
    }
}

//Store içerisinde ki state ler içerisinden changeCategoryReducer a ulaşıp döndüğü değeri
//bu componentimizdeki currentCategory isimli props a atıyoruz
function mapStateToProps(state){
    return{
        currentCategory:state.changeCategoryReducer
    }
}

//Connect component ile store arasında ki bir köprü görevi görmektedir
export default connect(mapStateToProps)(CategoryList)
