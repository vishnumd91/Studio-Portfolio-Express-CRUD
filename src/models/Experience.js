import { Schema, model } from "mongoose";

// Experience Collection Schema
const experienceSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: String,
    required: true,
  },
});

export const Experience = model("Experience", experienceSchema);
