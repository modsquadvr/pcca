import Im4VirtualProduction from './Im4VirtualProduction';
import Forest from './Forest';
import MocapInDance from './MocapInDance';
import AerialMachineVision from './AerialMachineVision';
import PythonAICamera from './PythonAICamera';
import KelpFarming from './KelpFarming';
import ForestFireMitigation from './ForestFireMitigation';
import CommunityConnection from './CommunityConnection';


import forest from 'assets/photos/card-thumbs-200x200/forest.png';
import mocap from 'assets/photos/card-thumbs-200x200/mocap.png'
import imagerecognition from "assets/photos/card-thumbs-200x200/image-recognition.png"
import im4 from "assets/photos/card-thumbs-200x200/im4-vr.png"
import multispec from "assets/photos/card-thumbs-200x200/multispec.png"
import kelpForest from "assets/photos/card-thumbs-200x200/kelp-forest.png"

const ProjectList = [
  {
    key:1,
    title:"IM4 Virtual Production",
    img:im4,
    alt:"",
    urlSlug:"im4-vr",
    component:Im4VirtualProduction
  },
  {
    key: 2,
    title:"The Forest",
    img:forest,
    alt:"",
    urlSlug:"the-forest",
    component:Forest
    
  },
  {
    key: 3,
    title:"MoCap in Dance",
    img:mocap,
    alt:"",
    urlSlug:"mocap-dance",
    component:MocapInDance
  },
  {
    key: 4,
    title:"Aerial Machine Vision",
    img:multispec,
    alt:"",
    urlSlug:"aerial-vision",
    component:AerialMachineVision

  },
  {
    key: 5,
    title:"Python AI Cameras",
    img:imagerecognition,
    alt:"",
    urlSlug:"python-camera",
    component:PythonAICamera
  },
  {
    key: 6,
    title:"Kelp Farming",
    img:kelpForest,
    alt:"",
    urlSlug:"kelp-farming",
    component:KelpFarming
  },
  {
    key: 7,
    title:"Forest Fire Mitigation",
    img:imagerecognition,
    alt:"",
    urlSlug:"forest-fires",
    component:ForestFireMitigation
  },
  {
    key: 8,
    title:"Community Connection",
    img:imagerecognition,
    alt:"",
    urlSlug:"community-connection",
    component:CommunityConnection
  } 
]

export default ProjectList;

