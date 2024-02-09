import Im4VirtualProduction from './Im4VirtualProduction';
import Forest from './Forest';
import MocapInDance from './MocapInDance';
import AerialMachineVision from './AerialMachineVision';
import AppliedPractical from './AppliedPractical';


import flower from './media/flower.png';
import steam from './media/mocap-dance-combo-500x500.png'
import bee from "./media/bee-500x500bw.png"
import im4 from "./media/im4-vr.jpeg"
import multispec from "./media/multispec.png"

const ProjectList = [
  {
    key:1,
    title:"IM4 Virtual Production",
    img:im4,
    alt:"",
    blurb: `This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.`,
    component:Im4VirtualProduction
  },
  {
    key: 2,
    title:"The Forest",
    img:flower,
    alt:"",
    blurb: `This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.`,
    component:Forest
    
  },
  {
    key: 3,
    title:"MoCap in Dance",
    img:steam,
    alt:"",
    blurb: `This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.`,
    component:MocapInDance
  },
  {
    key: 4,
    title:"Aerial Machine Vision",
    img:multispec,
    alt:"",
    blurb: `This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.`,
    component:AerialMachineVision

  },
  {
    key: 5,
    title:"Applied Practical Kits",
    img:bee,
    alt:"",
    blurb: `This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.`,
    component:AppliedPractical
  }
]

export default ProjectList;

