import React from "react";
import Image from "next/dist/client/image";
import test from "/public/team/test.png"
import alvaro from "/public/team/alvaro.jpg"
import paola from "/public/team/paola.jpg"
import carlos from "/public/team/carlos.jpg"
import raul from "/public/team/raul.jpg"
import yonchu from "/public/team/yonchu.jpg"
import {ImTwitter, ImLinkedin} from 'react-icons/im'

function Team() {
  interface member {
    name : string,
    twitter? : string,
    linkedin? : string,
    image : StaticImageData,
    bio : string
  }
  const members: member[] = [
    {
      "name" : "Yonchu García",
      "twitter" : "https://twitter.com/MonkeyToons",
      "linkedin" : "https://www.linkedin.com/in/yonchu/",
      "image" : yonchu,
      "bio": "Artist"
    },
    {
      "name" : "Alvaro Fragoso",
      "twitter" : "https://twitter.com/cdelalama",
      "linkedin" : "https://www.linkedin.com/in/cdelalama/",
      "image" : carlos,
      "bio": "No idea"
    },
    {
      "name" : "Álvaro Fragoso",
      "twitter" : "https://twitter.com/metasurfero",
      "linkedin" : "https://www.linkedin.com/in/alvaro-fragoso/",
      "image" : alvaro,
      "bio": "Technical wizard"
    },

    {
      "name" : "Paola Tellez",
      "twitter" : "https://twitter.com/impact_minds",
      "linkedin" : "https://www.linkedin.com/in/paolatellezmu%C3%B1oz",
      "image" : paola,
      "bio": ""
    },
    {
      "name" : "Raúl Riusech",
      "twitter" : "https://twitter.com/jrvtrading",
      "linkedin" : "https://www.linkedin.com/in/raul-riusech-vega-1a810722",
      "image" : raul,
      "bio": "Dream builder"
    }
  ]
  return (
    <div className={"flex flex-wrap justify-items-center"}>
    {members.map((mem, id) => {
        return (
          <div className="card card-compact w-72 bg-gray-300 shadow-xl m-7 text-gray-800" key={id}>
          <figure><Image src={mem.image} alt={mem.name + "'s image"} className={" w-60 rounded-lg"} /></figure>
          <div className="card-body">
            <h2 className="card-title">{mem.name}</h2>
            <p>{mem.bio}</p>
            <div className="justify-end card-actions">
              <div className={"flex -mt-3.5"}>
                <a href={mem.twitter} target="_blank" rel="noreferrer">
                  <ImTwitter color={'#1DA1F2'} className={"mr-3 text-xl"}/></a>
                <a href={mem.linkedin} target="_blank" rel="noreferrer">
                  <ImLinkedin color={'#0e76a8'} className={"text-xl"}/></a>
              </div>
            </div>
          </div>
        </div>)
      })}
    </div>
  );
}

export default Team;