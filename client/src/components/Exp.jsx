  import EditIcon from '@mui/icons-material/Edit';
  import { Box, Divider, IconButton, Typography} from "@mui/material";
  import { Navigate, useNavigate } from 'react-router-dom';
  import WidgetWrapper from "./WidgetWrapper.jsx";
import FlexBetween from "./Flexbetween.jsx";
import { useDispatch, useSelector } from 'react-redux';

  
  const PostWidget = ({
   experimentName,
   description,
   difficulty,
   subjects,
   mainImage,
   materialsList,
   instructions,
   categories,
   tag,
   creator
  }) => {
    const navigate=useNavigate();
    const user = useSelector((state) => state.user);
      return (
        <WidgetWrapper m="2rem 0" maxWidth={'40%'}>
          <FlexBetween >
          <h3 style={{fontWeight:'700',fontSize:'30px' ,color:'white',marginLeft:"30%"}}>{experimentName}</h3>
             {user.isAdmin && <IconButton sx={{color:'white'}} onClick={()=>{if(user.isAdmin==true)navigate("/edit")}}> 
                <EditIcon/>
            </IconButton>}
         
         </FlexBetween>
          <Typography color={'white'} sx={{ mt: "1rem", fontWeight:"700", fontSize: '20px' }}>
            Difficulty Level : {difficulty}
          </Typography>
          <Typography color={'white'} sx={{ mt: "1rem" }}>
           <u><b>  Description</b></u>: {description}
          </Typography>
          {mainImage && (
            <img
              width="100%"
              height="300px"
              alt="post"
              style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
              src={`http://localhost:6001/assests/${mainImage}`}
            />
          )}
          <h3 style={{fontWeight:'700',fontSize:'30px' ,color:'white'}}> Instructions : </h3>
           <Typography color={'white'} sx={{ mt: "1rem" }}>
            {instructions.map(inst=>
                <div>
                <Typography>Step Number : {inst.stepNumber}</Typography>
                <Typography> Description : {inst.description}</Typography>
                {inst.image &&(
            <img
              width="50%"
              height="20%"
              alt="post"
              style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
              src={`http://localhost:6001/assests/${inst.image}`}
            />)}
                </div>
            )}
          </Typography>
          <Typography>
            <b>Material List :</b>{materialsList.map(ma=>{<p>{ma}</p>})}
          </Typography>
        </WidgetWrapper>
      );
    };
    
    export default PostWidget;