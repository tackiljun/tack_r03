import { useRef, useState } from "react";
import { postProduct } from "../api/productAPI";


const initState = {
    pname:'',
    pdesc:'',
    price:0
}


const ProductInput = () => {

    const fileRef = useRef()
    const [product, setProduct] = useState({...initState})

    const handleChange = (e) => {
        product[e.target.name] = e.target.value

        setProduct({...product})
    }

    const handleClickSave = (e) => {

        //console.log(board)
        //setBoard({...initState})
        const formData = new FormData();

        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)

        console.log(fileRef.current)

        const arr = fileRef.current.files

        for(let file of arr) {
            formData.append("files", file)  // 첨부파일을 받을때.
        }

        postProduct(formData)
    }

    const handleClickClear = (e) => {

        fileRef.current.value = ''
    }

    return ( 

        <div>
            <h1>INPUT</h1>
            <div>
                <input type='text' name='pname' value={product.pname} onChange={handleChange}></input>
            </div>
            <div>
                <input type='text' name='pdesc' value={product.pdesc} onChange={handleChange}></input>
            </div>
            <div>
                <input type='number' name='price' value={product.price} onChange={handleChange}></input>
            </div>
            <div>
                <input type='file' ref={fileRef} multiple name='images' onChange={handleChange}></input>
            </div>
            <div>
                <button onClick={handleClickSave}>SAVE</button>
                <button onClick={handleClickClear}>CLEARFILES</button>
            </div>
        </div>
     );
}
 
export default ProductInput;