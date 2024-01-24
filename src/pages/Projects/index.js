import * as React from 'react';
import BasePage from "../BasePage"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardModal from './CardModal';

import flower from '../../assets/photos/flower.png';
import steam from '../../assets/photos/mocap-dance-combo-500x500.png'
import bee from "../../assets/photos/bee-500x500bw.png"
import im4 from "../../assets/photos/im4-vr.jpeg"
import multispec from "../../assets/photos/multispec.png"

import "./projects.css"

  
const projects = [
  {
    title:"IM4 Virtual Production",
    img:im4,
    alt:"",
    blurb: `This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.`,
    fullText: `
      <p>Calosoma retusum is a beetle of the family Carabidae.</p>
      <p>Calosoma retusum reaches about 25–32 millimetres (0.98–1.26 in) in length. This species usually has a bright metallic dark green or bronze green coloration, sometime with bluish reflections. The borders of the pronotum are rounded and raised. Elytra are striated, with large punctures. These beetles are voracious consumer of caterpillars, so they are considered beneficial insects for the agriculture.</p>
    `
  },
  {
    title:"The Forest",
    img:flower,
    alt:"",
    blurb: `This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.`,
    fullText: `
    <p>The Moyle Interconnector is a 500 megawatt (MW) HVDC link between Scotland and Northern Ireland, running between Auchencrosh in Ayrshire and Ballycronan More in County Antrim. It went into service in 2001 and is owned and operated by Mutual Energy. </p>
    <p>The Moyle Interconnector has a capacity of 500 MW and is of dual monopole configuration. Each pole consists of a coaxial 250 kV DC cable with integrated return conductors (IRC), each cable having a transmission capacity of 250 MW. The LV return conductor elements of the IRCs have suffered failures (see below), and their function was restored by laying new separate metallic return conductors (MRCs) in 2016. The converter stations were designed and constructed by Siemens, and were the first to feature Siemens light-triggered thyristors.</p>
    <p>Moyle is a Line Commutated Converter (LCC) design; as a result, it cannot offer Black Start capability, unlike Voltage Sourced Converters. However LCC technology offers lower losses and hence more efficient power transfer. </p>
    `
  },
  {
    title:"MoCap in Dance",
    img:steam,
    alt:"",
    blurb: `This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.`,
    fullText: `
    <p>Belcher is a village in Caddo Parish, Louisiana, United States. The population was 263 at the 2010 census. It is part of the Shreveport- Bossier city metropolitan statistical area. </p>
    <p>Previously named Horseshoe after the bayou that runs through the town, Belcher was renamed in 1899 after James Clinton Belcher, a former confederate soldier and overseer of Wild Lucia plantation.</p>`
  },
  {
    title:"Aerial Machine Vision",
    img:multispec,
    alt:"",
    blurb: `This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.`,
    fullText: `
    <p>The Minera Lead Mines were a mining operation and are now a country park and tourist centre in the village of Minera near Wrexham, in Wrexham County Borough, Wales.</p>
    <p>The first written record of lead mining at Minera dates back to 1296, when Edward I of England hired miners from the site to work in his new mines in Devon. Not all of them vacated the area, however, as mining went on until the Black Death in 1349, when it ended.</p>
    <p>In 1527, two men bought the rights to mine on the site, but deeper workings were unworkable due to the presence of underground rivers, and the inability to prevent flooding. The inability to pay for steam engines to pump out water closed the mines again until 1845, when John Taylor & Sons, mining agents from Flintshire, formed the Minera Mining Company. They were able to build a stationary steam engine on site, and also blast caves from down in the valley into the mines, for extra drainage. The steam engine was a Cornish engine (i.e. a Beam engine), typical for stationary engines at the time.</p>
    <p>John Taylor & Sons had used a £30,000 investment at the time, yet the profits for 1864 alone were £60,000 (equivalent to over £4 Million in 2008. By 1900, the price of lead and zinc had fallen dramatically, while the price of coal used for the steam engine rose. The stationary steam engine stopped work in 1909. The owners sold off the mines and all assets by 1914. </p>`
  },
  {
    title:"Applied Practical Kits",
    img:bee,
    alt:"",
    blurb: `This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.`,
    fullText: `
    <p>On 10 February 2018, an explosion occurred in the afternoon of the Bolivian city of Oruro during the traditional carnival of the city. In a street food stand, eight people were killed by an explosion near the main street of Oruro. At first it was thought that it was the explosion of a gas canister due to mishandling, but not finding fragments of the alleged canister or a gas leak that caused it, the government has discarded this theory. It also left more than forty people injured.</p>
    <p>Three days later, another attack occurred at 18:57. Approximately three kilos of dynamite mixed with ANFO were used, which were detonated a short distance from the first explosion. The explosion caused the death of four persons, two of them children, and left nine people injured.</p>
    <p>The culprit of both explosions is unknown, but there have been several detainees. Three suspects who were in the explosion site of the second explosion were arrested the following day, but later it was discovered that they had no relation at all with the event. Another suspect of the first explosion continues apprehended since 27 March 2018. They were the most serious explosive attacks in Bolivian history.</p> `
  }
]

export default function Projects() {
  return (
    <BasePage>

    
      <Container className="projects" sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) =>   (
              <CardModal key={"proj" + index}  {...project}/>
          ))}
        </Grid>
      </Container>
    </BasePage>
  );
}

