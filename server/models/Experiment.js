import mongoose from "mongoose";
const defaultSubjects = ['Physics', 'Chemistry', 'Botany', 'Zoology'];
const ExperimentSchema = new mongoose.Schema(
  {
    experimentName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    difficulty:{
        type:Number,
        required:true,
        min: 1,
        max: 5,
    },
    subjects:{
      type:[String],
      default:defaultSubjects,
    },
  mainImage:{
    type:String,
    required:true,
  },
  materialsList: [{ name: String, quantity: String }],
  safetyPrecautions: String,
  instructions: [{ 
    stepNumber: Number, 
    image: String, 
    description: String ,
  }],
  categories:{
    type:[String],

  },
  tags:{
    type:[String],
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true,
}
}
);

const Experiment = mongoose.model("Experiment", ExperimentSchema);
export default Experiment;