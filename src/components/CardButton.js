
import { useDispatch } from "react-redux";
import { addItems, removeItem } from "../utills/cartSlice";



const CardButton = ({item , name , index}) => {


  const dispatch = useDispatch();
 

  const addOrRemove = (item , index) =>{
    // dispatch to action 
    if (name === "ADD +") {
      dispatch(addItems(item));
    }
    if (name === "Remove") {
      dispatch(removeItem(index));
    }
   

  }

  return (
    <>
      <button onClick={ () => addOrRemove(item , index)} className=" border-none bg-green-200 hover:bg-green-300 rounded-sm px-5 py-1 text-xl absolute bottom-2 w-full left-0">
        {name}
      </button>
    </>
  );
};


export default CardButton;
