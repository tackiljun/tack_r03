import axios from "axios"


export const postProduct = async (formData) => {

    const header = {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }

    const res = await axios.post('http://localhost:8080/api/products/', formData, header )

    return res.data
}