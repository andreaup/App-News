import React from "react";
import {connect} from "react-redux"
import {fetchArticles} from '../actions/actions'
import { Link } from "react-router-dom";


const Categories = ({ categories }) => {
    // console.log("categories", categories);
    //fa-inverse
    return(

        <nav className ="Categorias">
           <ul>
               <li>
               <Link to={"/categories/home"}>
               {/* <a href= {categories}><i className="fa fa-home fa-lg"></i>  Home</a> */}
               <button onClick={categories}>obtener noticias</button>
               </Link>
               </li>

               <li>
              <Link to={"/categories/politics"}>
                  <i className="fa fa-balance-scale fa-lg"></i>  Política
              </Link>
              </li>

               <li>
               <Link to={"/categories/international"}>
                    <i className="fa fa-globe fa-lg "></i>  Internacionales
               </Link>
              </li>

               <li>
               <Link to={"/categories/tech"}>
                   <i className="fa fa-laptop fa-lg "></i>  Tecnología
               </Link>
               </li>

               <li>
               <Link to={"/categories/shows"}>
                   <i className="fa fa-film fa-lg "></i>  Espectáculos
                </Link>
                </li>

               <li>
               <Link to={"/categories/sports"}>
                   <i className="fa fa-futbol-o fa-lg "></i> Deportes
               </Link>
               </li>

               <li>
               <Link to={"/categories/design"}>
                    <i className="fa fa-paint-brush fa-lg "></i>  Diseño
               </Link>
               </li>
           </ul>
        </nav>
    ); 
  };

  

const mapDispatchToProps = dispatch =>{
    return{
        fetchArticles(){
            dispatch(fetchArticles());
        }
    };
};


  export default connect(null, mapDispatchToProps)(Categories) ;

