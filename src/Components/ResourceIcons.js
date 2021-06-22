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

const Icon = ({ type }) => {
  if (type === "Food") {
    return <MdRoomService size={25} />;
  } else if (type === "Care") {
    return <MdSpa size={25} />;
  } else if (type === "Money") {
    return <MdAttachMoney size={25} />;
  } else if (type === "Education") {
    return <MdSchool size={25} />;
  } else if (type === "Work") {
    return <MdBusinessCenter size={25} />;
  } else if (type === "Emergency") {
    return <MdInfo size={25} />;
  } else if (type === "Legal") {
    return <MdGavel size={25} />;
  } else if (type === "Housing") {
    return <MdHome size={25} />;
  } else if (type === "Goods") {
    return <MdLocalMall size={25} />;
  } else if (type === "Transit") {
    return <MdDirectionsCar size={25} />;
  } else if (type === "Health") {
    return <MdLocalHospital size={25} />;
  } else {
    return <MdInfo size={25} />;
  }
};
export default Icon;
