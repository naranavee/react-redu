import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { buyIceCream } from "../redux";

function CakeContainer(props) {
  return (
    <>
    <div>
      <h2> num of cakes are-{props.numCakes}</h2>
      <button onClick={props.buyCake}>buy cake</button>
    </div>
    <div>
    <h2> num of iceCream are-{props.numIcecreams}</h2>
    <button onClick={props.buyIceCream}>buy iceCream</button>
  </div>
  </>
  );
}

const mapStateToProps = (state) => {
  return {
    numCakes: state.cake.numCakes,
    numIcecreams: state.iceCream.numIcecreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIceCream: () => dispatch(buyIceCream()),

  };
};



export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
