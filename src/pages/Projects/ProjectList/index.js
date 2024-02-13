import Im4VirtualProduction from './Im4VirtualProduction';
import Forest from './Forest';
import MocapInDance from './MocapInDance';
import AerialMachineVision from './AerialMachineVision';
import AppliedPractical from './AppliedPractical';


import forest from 'assets/photos/card-thumbs-200x200/forest.png';
import mocap from 'assets/photos/card-thumbs-200x200/mocap.png'
import imagerecognition from "assets/photos/card-thumbs-200x200/image-recognition.png"
import im4 from "assets/photos/card-thumbs-200x200/im4-vr.png"
import multispec from "assets/photos/card-thumbs-200x200/multispec.png"

const ProjectList = [
  {
    key:1,
    title:"IM4 Virtual Production",
    img:im4,
    alt:"",
    component:Im4VirtualProduction
  },
  {
    key: 2,
    title:"The Forest",
    img:forest,
    alt:"",
    component:Forest
    
  },
  {
    key: 3,
    title:"MoCap in Dance",
    img:mocap,
    alt:"",
    component:MocapInDance
  },
  {
    key: 4,
    title:"Aerial Machine Vision",
    img:multispec,
    alt:"",
    component:AerialMachineVision

  },
  {
    key: 5,
    title:"Applied Practical Kits",
    img:imagerecognition,
    alt:"",
    component:AppliedPractical
  }
]

export default ProjectList;

