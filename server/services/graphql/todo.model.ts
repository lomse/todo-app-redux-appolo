import { Schema, Model, model } from "mongoose";
import { ITodoModel } from "./todo.interfaces";

const todoSchema = new Schema({
  title: {
      type: String
  },
  dueDate: {
      type: Date,
      min: Date.now()
  },
  dueTime: {
      type: Number,
      min: 0,
      max: 23
  },
  repeatInterval: {
      type: String,
      enum: ['Weekly', 'Monthly', 'Yearly']
  },
  status: {
      type: String, 
      enum: ['Active', 'Completed']
  }
}, { timestamps: true });

const todo: Model<ITodoModel> = model("Todo", todoSchema);

export default todo;