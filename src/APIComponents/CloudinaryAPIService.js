import axios from "axios";

const CLOUDINARY_CLOUD_URL    =   'dz6oeh4ym/image/upload/v1619882372/'

export default axios.create({
    baseURL: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_URL}`
})