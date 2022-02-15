import React from "react";
import Image from "next/dist/client/image";
import test from "/public/team/test.png"
import alvaro from "/public/team/alvaro.jpg"
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
    "name" : "Alvaro Fragoso",
    "twitter" : "https://twitter.com/metasurfero",
    "linkedin" : "https://www.linkedin.com/in/alvaro-fragoso/",
    "image" : alvaro,
    "bio": "Technical wizard"
  },
    {
      "name" : "Alvaro Fragoso",
      "twitter" : "https://twitter.com/metasurfero",
      "linkedin" : "https://www.linkedin.com/in/alvaro-fragoso/",
      "image" : test,
      "bio": ""
    },
    {
      "name" : "Alvaro Fragoso",
      "twitter" : "https://twitter.com/metasurfero",
      "linkedin" : "https://www.linkedin.com/in/alvaro-fragoso/",
      "image" : test,
      "bio": ""
    },
    {
      "name" : "Alvaro Fragoso",
      "twitter" : "https://twitter.com/metasurfero",
      "linkedin" : "https://www.linkedin.com/in/alvaro-fragoso/",
      "image" : test,
      "bio": ""
    },
    {
      "name" : "Alvaro Fragoso",
      "twitter" : "https://twitter.com/metasurfero",
      "linkedin" : "https://www.linkedin.com/in/alvaro-fragoso/",
      "image" : test,
      "bio": ""
    }
  ]
  return (
    <div className={"flex flex-wrap justify-items-center"}>
    {members.map((mem, id) => {
        return (
          <div className="card card-compact w-72 bg-base-100 shadow-xl m-7 " key={id}>
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