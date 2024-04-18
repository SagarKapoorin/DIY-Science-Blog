import { Box } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExperiments } from "../../state";
import PostWidget from "../../components/Exp";
import FlexBetween from "../../components/Flexbetween";
import Navbar from "../../components/NavBar";
const Experimentss=()=>{

  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const dispatch=useDispatch();
    const getall=async()=>{
      console.log("ooop");
        const response = await fetch(
            `http://localhost:6001/experiments`,
            {
              method: "GET",
            }
          );
          const data = await response.json();
          console.log("lo")
          console.log(data);
          dispatch(setExperiments({ posts: data }));
    }
    useEffect(() => {
     getall();
    }, []);
    return(
       <>
       <FlexBetween>
        {/* {console.log(posts)} */}
        {posts.length>0 && posts.map(
        ({
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
        }) => (
          <PostWidget
           experimentName={experimentName}
           description={description}
           difficulty={difficulty}
           subjects={subjects}
           mainImage={mainImage}
           materialsList={materialsList}
           instructions={instructions}
           categories={categories}
           tag={tag}
           creator={creator}
          />
        )
      )}
      </FlexBetween>
       </>
    );
}
export default Experimentss;