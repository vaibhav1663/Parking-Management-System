import iotData from "./schema.js";

export const getSensData = async(req, res) =>{
    try {
        const sensData = await iotData.find();
        res.status(200).json(sensData);
        
    } catch (err) {
        res.status(404).json({message: err.message})
        
    }
}