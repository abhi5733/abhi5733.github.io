import React from 'react'
import chakra from "../skills/chakra.png"
 import b from "../skills/bootstrap.svg"
 import css from "../skills/css.svg"
 import git from "../skills/git.svg"
 import html from "../skills/html.svg"
 import java from "../skills/javascript.svg"
 import mongo from "../skills/mongoDB.svg"
 import node from "../skills/nodejs.svg"
 import react from "../skills/react.svg"
 import redux from "../skills/redux.svg"
 import typescript from "../skills/typescript.svg"


 import "./Skills.css"

const Skills = () => {
  return (
    <div className='divv' >
     <h1 className='btw'> skills </h1> 
     <div className='images' > 
     <img src={b} />
     <img src={chakra} />
     <img src={css} />
     <img src={git} />
     <img src={html} />
     <img src={java} />
     <img src={mongo} />
     <img src={node} />
     <img src={react} />
     <img src={redux} />
     <img src={typescript} /> </div>
    </div>
  )
}

export default Skills
