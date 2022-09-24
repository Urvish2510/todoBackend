import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Creating Schema for activity model
const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Activity = mongoose.model("Activity", activitySchema);

export { Activity };
