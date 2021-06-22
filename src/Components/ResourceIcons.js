import {
  MdRoomService,
  MdSpa,
  MdAttachMoney,
  MdSchool,
  MdBusinessCenter,
  MdInfo,
  MdHome,
  MdLocalMall,
  MdGavel,
  MdDirectionsCar,
  MdLocalHospital,
} from "react-icons/md";

const Icon=({type})=>{

    if(type==="Food"){
        return (<MdRoomService/>);
    }
    else if(type==="Care"){
        return (<MdSpa/>);
    }
    else if(type==="Money"){
        return <MdAttachMoney/>
    }
    else if(type==="Education"){
        return <MdSchool/>
    }
    else if(type==="Work"){
        return <MdBusinessCenter/>
    }
    else if(type==="Emergency"){
        return <MdInfo/>
    }
    else if(type==="Legal"){
        return <MdGavel/>
    }
    else if(type==="Housing"){
        return <MdHome/>
    }
    else if(type==="Goods"){
        return <MdLocalMall/>
    }
    else if(type==="Transit"){
        return <MdDirectionsCar/>
    }
    else if(type==="Health"){
        return <MdLocalHospital/>
    }
    else{
        return <MdInfo/>
    }
    
    

}
export default Icon;