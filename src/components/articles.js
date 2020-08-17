import React from "react";
import { connect } from "react-redux";
import Article from "./article";

const Articles = ({param}) => {
  console.log('testing', param)
  // const curso =   onGet(.id);

  return (
    <section className="Articles">
    <> test</>
      
    </section>
  );
};

const mapStateToProps = ({ param }) => ({ param });

export default connect(mapStateToProps)(Articles);
