import { useParams } from "react-router-dom"
const Product = () => {

  const {idProduct} = useParams()


  return (
 <div>
 <h3>Producto id:{idProduct}</h3>
 </div> 
  )
}

export default Product