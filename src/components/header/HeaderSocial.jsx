import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"

const HeaderSocial = () => {
  return (
      <div className='header__socials'>
          <a href='https://www.linkedin.com/in/abd-el-hakim-guessas-2173361a5/' target="_blank" ><BsLinkedin/></a>
          <a href='https://github.com/HakimGuessas' target="_blank" ><BsGithub/></a>
          <a href='https://www.facebook.com/profile.php?id=100004342039105' target="_blank" ><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocial