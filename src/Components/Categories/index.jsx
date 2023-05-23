import { connect } from "react-redux";
import { selectCategory } from "../../store/reducer";
import { ButtonGroup, Button, Card, CardMedia} from "@mui/material";


const Catergories = ({catergories, selectCategory}) => {
  //console.log({catergories});
  //console.log({selectCategory});

return(
  <>
  <ButtonGroup 
  variant="text">
  {catergories.map((category, idx) => (
    <Button 
      key={`categories - ${idx}`} 
      onClick={() => selectCategory(category.name)}>
      
      {category.displayName}
   
      </Button>
  ))}
  </ButtonGroup>
  </>
)
};

const mapStateToProps = ({products}) => {
  return {
    catergories: products.categories,
  }
};

const mapDispatchToProps = {selectCategory};

export default connect(mapStateToProps,mapDispatchToProps) (Catergories);
