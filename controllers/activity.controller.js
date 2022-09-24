import { Activity } from "../models/activity.model.js";
import mongoose from "mongoose";

// Get all activities
const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create and save activity
const addActivity = async (req, res) => {
  const newActivity = new Activity(req.body);
  try {
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Delete activity
const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Enter valid ID!!!" });
    } else {
      await Activity.findByIdAndRemove(id);
      res.json({ message: "Post deleted successfully." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getActivities, addActivity, deleteActivity };
