import Im4VirtualProduction from './Im4VirtualProduction';
import TheForest from './TheForest';
import MocapInDance from './MocapInDance';
import AerialMachineVision from './AerialMachineVision';
import PythonAICamera from './PythonAICamera';
import KelpFarming from './KelpFarming';
import ForestFireMitigation from './ForestFireMitigation';
import CommunityConnection from './CommunityConnection';
import HealthCareUnburdened from './HealthCareUnburdened';


import forest from 'assets/photos/card-thumbs-200x200/forest.png';
import mocap from 'assets/photos/card-thumbs-200x200/mocap.png'
import imagerecognition from "assets/photos/card-thumbs-200x200/image-recognition.png"
import im4 from "assets/photos/card-thumbs-200x200/im4-vr.png"
import multispec from "assets/photos/card-thumbs-200x200/multispec.png"
import kelpForest from "assets/photos/card-thumbs-200x200/kelp-forest.png"
import forestFire from "assets/photos/card-thumbs-200x200/forest-fire.png"

const ProjectList = [
  {
    key:1,
    title:"IM4 Virtual Production",
    fullTitle:"The IM4 Virtual Production Program",
    img:im4,
    alt:"",
    urlSlug:"im4-vr",
    component:Im4VirtualProduction
  },
  {
    key: 2,
    title:"The Forest",
    fullTitle:"The Forest",
    img:forest,
    alt:"",
    urlSlug:"the-forest",
    component:TheForest
    
  },
  {
    key: 3,
    title:"MoCap in Dance",
    fullTitle:"MoCap in Dance",
    img:mocap,
    alt:"",
    urlSlug:"mocap-dance",
    component:MocapInDance
  },
  {
    key: 4,
    title:"Aerial Machine Vision",
    fullTitle:"Aerial Machine Vision",
    img:multispec,
    alt:"",
    urlSlug:"aerial-vision",
    component:AerialMachineVision

  },
  {
    key: 5,
    title:"Python AI Cameras",
    fullTitle:"Python AI Cameras",
    img:imagerecognition,
    alt:"",
    urlSlug:"python-camera",
    component:PythonAICamera
  },
  {
    key: 6,
    title:"Kelp Farming",
    fullTitle:"Kelp Farming",
    img:kelpForest,
    alt:"",
    urlSlug:"kelp-farming",
    component:KelpFarming
  },
  {
    key: 7,
    title:"Forest Fire Mitigation",
    fullTitle:"Forest Fire Mitigation",
    img:forestFire,
    alt:"",
    urlSlug:"forest-fires",
    component:ForestFireMitigation
  },
  {
    key: 8,
    title:"Community Connection",
    fullTitle:"Community Connection",
    img:imagerecognition,
    alt:"",
    urlSlug:"community-connection",
    component:CommunityConnection
  },
  {
    key: 9,
    title:"Health Care Unburdened",
    fullTitle:"Health Care Unburdened",
    img:imagerecognition,
    alt:"",
    urlSlug:"healthcare-unburdened",
    component:HealthCareUnburdened
  } 
]

export default ProjectList;

