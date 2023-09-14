const Tag = require('../models/Tags');

exports.createTag = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({
                success: false,
                message: "All Fields Are Required"
            })
        }
        const TagDetails = await Tag.create({ name, description });
        res.status(200).json({
            success: true,
            message: "Tag Created Successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}
exports.getAllTags = async (req, res) => {
    try {
        const Tags = await Tag.find({}, { name: true, desc: true });
        res.status(200).json({
            success: true,
            data: Tags,
            message: "All tags returned"
        })
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

exports.deleteTag = async (req, res) => {
    try {
        const name = req.params.name;
        const Tags = await Tag.deleteOne({name:name})
        res.status(200).json({
            success: true,
            message: `${name} Tag Deleted Successfully`
        })
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}