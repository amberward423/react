import { useLike } from "../hooks/apiHooks"
import {useState useEffect} from "react"
import { useUserContext } from "../contexts/UserContext.jsx";

const Likes =  ({media_id}) => {

const{ postLike,deleteLike,getLikeCountByMediaId,getLikeByUser} = useLike()
 const {user} = useUserContext()
 
const [likeCount, setLikeCount] = useState(0);
const [userLike, setUserLike] = useState(null);
useEffect(() => {
    const getLikes = async () =>{
   const result = await getLikeCountByMediaId(media_id)
   setLikeCount(result)
   if (user){
    const token = localStorage.getItem("token")
    const userLikeResult = await getLikeByUser(user.id, token)
   }
    }
    getLikes()
    },[media_id]);
 

} 