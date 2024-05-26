import { Experience } from "../models/Experience.js";

export const getExperience = async (req, res) => {
  try {
    const findAllExperience = await Experience.find();
    return res.status(200).json(findAllExperience);
  } catch (err) {
    console.log(err.message);
  }
};

export const postExperience = async (req, res) => {
  try {
    const postedExperience = await Experience.create(req.body);
    return res
      .status(201)
      .json({ msg: "Experience Created Successfully", postedExperience });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateExperienceByPut = async (req, res) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res
      .status(200)
      .json({ msg: "Experience Updated using PUT", updatedExperience });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateExperienceByPatch = async (req, res) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res
      .status(200)
      .json({ msg: "Experience Updated using PATCH", updatedExperience });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteExperience = async (req, res) => {
  try {
    const deletedExperience = await Experience.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "Experience Deleted Succesfully",
      deletedId: deletedExperience._id,
    });
  } catch (err) {
    console.log(err.message);
  }
};
