import React from "react";

import { default as gitHubLogo } from "/Users/maximilienproville/Desktop/Projet_Perso/MyPortFolio_TailWindCss/myapp/src/assets/github-brands.svg";

export default class Project extends React.Component {
  render() {
    const imgSrc = this.props.project.picture;
    const linkGitHub = this.props.project.gitHub;
    const sourceLink = this.props.project.pageLink;

    return (
      <div className="Project shrink-0 w-6/12 mt-20 snap-center relative ">
        <div className="h-5/6 w-100 ">
          <img
            src={require(`./img/${imgSrc}`)}
            alt={`${this.props.project.title} doesn't load`}
            className="h-96 w-fit rounded-3xl ring-4 ring-purple-500 ring-offset-4 ring-offset-gray-900 shadow-purple-300/80 shadow-xl object-cover"
          />
          <a href={`https:${linkGitHub}`} _blank>
            <div className="opacity-0 hover:opacity-100 absolute inset-0 rounded-3xl hover:bg-gray-900/80 pt-5 px-5">
              <div className="text-4xl font-bold first-letter:text-purple-500 sm:text-2xl">
                {this.props.project.title}
              </div>
              <div className="pt-5 text-lg">
                {this.props.project.description}
              </div>
              <div className="flex flex-row mt-28 sm:invisible">
                <a href={`https:${linkGitHub}`}>
                  <img
                    src={gitHubLogo}
                    className="w-14 mr-5 color-gray-400"
                    alt="gitHubLogo"
                  />
                </a>
              </div>
              <div>
                <ul className="absolute bottom-0 font-bold flex flex-row pb-10 sm:flex-wrap">
                  {this.props.project.technology.map((tech) => {
                    return (
                      <li className="mr-5 text-2xl sm:text-sm ">{tech}</li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
