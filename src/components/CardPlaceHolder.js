import React from 'react'

function CardPlaceHolder() {
    return (
        <li className="w-full flex flex-col">
            <div className="flex bg-white p-4">
                <div className="flex flex-col w-14 h-14 justify-center items-center mr-4"> 
                    <div data-placeholder className="h-14 w-14 mx-auto object-cover  rounded-full overflow-hidden relative bg-gray-200"></div>
                </div>
                <div className="flex flex-col  w-full">
                    <div data-placeholder className="mb-2 w-half h-3 overflow-hidden relative bg-gray-200">
                    </div>
                    <div data-placeholder className="mb-2 h-5 overflow-hidden relative bg-gray-200">
                    </div>
                    <div className="flex space-x-2 items-center" >
                        <div data-placeholder className="h-7 rounded-full w-40 overflow-hidden relative bg-gray-200">
                        </div>
                        <div data-placeholder className="h-7 rounded-full w-40 overflow-hidden relative bg-gray-200">
                        </div>
                        <div data-placeholder className="h-6 w-full overflow-hidden relative bg-gray-200">
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CardPlaceHolder
