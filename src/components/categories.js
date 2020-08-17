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
                  <a href=""><i className="fa fa-balance-scale fa-lg"></i>  Política</a>
              </Link>
              </li>

               <li>
               <Link to={"/categories/international"}>
                    <a href=""><i className="fa fa-globe fa-lg "></i>  Internacionales</a>
               </Link>
              </li>

               <li>
               <Link to={"/categories/tech"}>
                   <a href=""><i className="fa fa-laptop fa-lg "></i>  Tecnología</a>
               </Link>
               </li>

               <li>
               <Link to={"/categories/shows"}>
                   <a href=""><i className="fa fa-film fa-lg "></i>  Espectáculos</a>
                </Link>
                </li>

               <li>
               <Link to={"/categories/sports"}>
                   <a href=""><i className="fa fa-futbol-o fa-lg "></i> Deportes</a>
               </Link>
               </li>

               <li>
               <Link to={"/categories/design"}>
                    <a href=""><i className="fa fa-paint-brush fa-lg "></i>  Diseño</a>
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

