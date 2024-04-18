import Experiment from "../models/Experiment.js";

export const showAll=async(req,res)=>{
    try{
        const experiments = await Experiment.find();
        res.status(200).json(experiments);
    }catch(err){
        console.error(err);
        res.status(500).json({ error:err.message });
    }
}
export const showOne=async(req,res)=>{
    try{
        const experimentId = req.params.id;
        const experiments = await Experiment.find(experimentId);
        if (!experiments) {
            return res.status(404).json({ error: 'Experiment not found' });
        }
        res.status(200).json(experiments);
    }catch(err){
        console.error(err);
        res.status(500).json({ error:err.message });
    }
}
export const addExperiment=async(req,res)=>{
    try{
        const {
        experimentName,
        description,
        difficulty,
        subjects,
      mainImage,
      materialsList,
      safetyPrecautions,
      instructions,
      categories,
      tags,
      isAdmin,
      creator
    }=req.body;
    if(!isAdmin){
        return res.status(404).json({ error: 'Permission Denied' });
    }else{
    const newExperiment=new Experiment({experimentName,
        description,
        difficulty,
        subjects,
      mainImage,
      materialsList,
      safetyPrecautions,
      instructions,
      categories,
      tags,
    creator
});
      const saveExperiment= await newExperiment.save();
      res.status(201).json(saveExperiment);
    }
    }catch(err){
        console.error(err);
        res.status(500).json({ error:err.message });
    }
}
export const editExperiment=async(req,res)=>{
    try {
        const experimentId = req.params.id;;
        const userId = req.user._id; 
        const {
            experimentName,
            description,
            difficulty,
            subjects,
          mainImage,
          materialsList,
          safetyPrecautions,
          instructions,
          categories,
          tags,
        }=req.body
        const experiment = await Experiment.findById(experimentId);
        if (!experiment) {
            return res.status(404).json({ error: 'Experiment not found' });
        }
        if (experiment.creator.toString() !== userId) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        const updatedExperiment = await Experiment.findOneAndUpdate(
            { _id: experimentId }, 
            {
                experimentName,
                description,
                difficulty,
                subjects,
              mainImage,
              materialsList,
              safetyPrecautions,
              instructions,
              categories,
              tags,
            }, 
            { new: true } 
        );
        res.json(updatedExperiment); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}