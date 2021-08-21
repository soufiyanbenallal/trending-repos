import React from 'react'
import { calcDateDiff } from "../heplers/func";

function Card({item}) {
  
    return (
        <li className="flex flex-row">
            <div className="select-none cursor-pointer flex flex-1 items-center py-4">
                <div className="flex flex-col w-14 h-14 justify-center items-center mr-4">
                    <a href={item.html_url ? item.html_url : '#'} className="block relative">
                        <img alt="profil" src={item.owner && item.owner.avatar_url} className="mx-auto object-cover rounded-full h-14 w-14 "/>
                    </a>
                </div>
                <div className="flex-1 pl-1">
                    <div className="font-medium">
                        { (item.name && item.name.replaceAll('-',' ')) && item.name.replaceAll('-',' ') } 
                    </div>
                    <div className="text-gray-600 text-gray-500 text-sm">
                        { item.description && item.description }
                    </div>
                   
                    <div className="flex flex-col md:flex-row text-gray-600 text-sm md:space-x-2 pt-2">
                          <div className="bg-gray-700 h-7 text-xs px-3 py-2 text-gray-300 rounded-full flex justify-center items-center">starts: 
                            <b className="text-white ml-1">
                                {
                                item.stargazers_count &&(item.stargazers_count>= 1000 ? item.stargazers_count/1000 + 'k' : item.stargazers_count)
                                }
                            </b>
                          </div>
                          <div className="bg-gray-200 h-7 text-xs px-3 py-1 mt-1 md:mt-0 text-gray-700 rounded-full flex justify-center items-center">Issues: 
                            <b className="text-gray-900 ml-1">
                                {
                                item.open_issues_count && (item.open_issues_count>= 1000 ? item.open_issues_count/1000 + 'k' : item.open_issues_count)
                                }
                            </b>
                          </div>
                          <div className="text-xs px-1 py-1  text-gray-800">Submitted <b>{calcDateDiff(item.created_at)}</b> ago by {item.owner.login}</div>
                      </div>
                
                </div>
            
            </div>
        </li>
    )
}

export default Card
