import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {bindActionCreators} from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";

class CategoryList extends Component {

    //Component çalıştığı zaman
     componentDidMount(){
         this.props.actions.getCategories();
     }

   //props ların action unda yer alan changeCategory fonksiyonuna parametre göndererek ona bağlı reducer aracılığıyla state i güncelledim
     selectCategory=(category)=>{
        this.props.actions.changeCategory(category);
        //Kategori seçildiği zaman getProducts metoduna categoryId göndermek suretiyle
        //tekrardan productList içerisinde ki products state imi güncelliyorum ve ona uygun dataları sayfada gösteriyorum
        this.props.actions.getProducts(category.id);
     }

    render() {
        return (
            <div>
                <p>Categories</p>
                <ListGroup>
                    {/* action u aktif edip reducer dan gelen değeri props tan okuyoruz */}
                        {
                            this.props.categories.map(category=>(
                                <ListGroupItem 
                                onClick={()=>this.selectCategory(category)} 
                                key={category.id}
                                active={category.id===this.props.currentCategory.id}
                                >
                                {category.categoryName}
                                </ListGroupItem>
                            ))
                        }
                </ListGroup>
            </div>
        )
    }
}

//Store içerisinde ki state ler içerisinden changeCategoryReducer a ulaşıp döndüğü değeri
//bu componentimizdeki currentCategory isimli props a atıyoruz
//Yine aynı şekilde state içerisinde categoryListReducer ın bize döneceği state değerini alıyoruz
function mapStateToProps(state){
    return{
        currentCategory:state.changeCategoryReducer,
        categories:state.categoryListReducer
    }
}

//aksiyonları prop lara bağla gibi basit bir tabir uygundur
//yukarıda ki örnekte direkt bir reducer bağladık burada ise action bağladık
//eğer bir aksiyon alınacaksa dispatch tarafında bunu ele alıyoruz
 function mapDispatchToProps(dispatch){
     return{
         actions:{
             getCategories:bindActionCreators(categoryActions.getCategories,dispatch),
             changeCategory:bindActionCreators(categoryActions.changeCategory,dispatch),
             //kategori seçildiği zaman ürünleri tekrar çağırmamız gerekiyor.bundan kaynaklı bu action propslarıma çağırmak üzere ekledim
             getProducts:bindActionCreators(productActions.getProducts,dispatch)
       }
     }
 }



//Connect component ile store arasında ki bir köprü görevi görmektedir
export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)

