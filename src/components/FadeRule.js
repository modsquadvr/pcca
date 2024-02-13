import * as React from 'react';
import './faderule.css';


export const FadeRuleDark = (props) => {
  return (
    <div className="fade-rule-dark" style={props.marginBottom ? {marginBottom:props.marginBottom}: undefined}/>
  );
}

export const FadeRuleLight = (props) => {
  return (
    <div className="fade-rule-light" style={props.marginBottom ? {marginBottom:props.marginBottom}: undefined}/>
  );
}
