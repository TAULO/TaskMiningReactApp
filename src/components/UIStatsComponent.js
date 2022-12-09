import React from 'react'
import { faMouse, faKeyboard, faWindowMaximize, faRobot } from '@fortawesome/free-solid-svg-icons';
import UIComponent from './UIComponent';


export default function UIStatsComponent({ object, indvTask, index }) {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" key={index}>
        <div className='grid grid-cols-2 row-gap-8 md:grid-cols-4'>
            {Object.entries(object || {}).sort().map(([key, value], index) => {
              switch(key) {
                case "MOUSE_LEFT_CLICK":
                  return (
                      <UIComponent title="Left clicks" value={value} icon={faMouse} totalUI={indvTask} key={index}></UIComponent>
                  )
                  case "MOUSE_RIGHT_CLICK":
                  return (
                    <UIComponent title="Right clicks" value={value} icon={faMouse} totalUI={indvTask} key={index}></UIComponent>
                  )
                  case "MOUSE_HOLD":
                  return (
                      <UIComponent title="Mouse holds" value={value} icon={faMouse} totalUI={indvTask} key={index}></UIComponent>
                  )
                  case "KEYBOARD_CLICK":
                  return (
                    <UIComponent title="Keyboard clicks" value={value} icon={faKeyboard} totalUI={indvTask} key={index}></UIComponent>
                  )
                  case "KEYBOARD_HOLD":
                    return (
                      <UIComponent title="Keyboard holds" value={value} icon={faKeyboard} totalUI={indvTask} key={index}></UIComponent>
                    )
                  case "KEYBOARD_SEND_KEYS":
                    return (
                      <UIComponent title="Send keys" value={value} icon={faKeyboard} totalUI={indvTask} key={index}></UIComponent>
                    )
                  case "WINDOW_FOCUS":
                    return (
                      <UIComponent title="Window focused" value={value} icon={faWindowMaximize} totalUI={indvTask} key={index}></UIComponent>
                    )
                  case "WINDOW_OPEN":
                    return (
                      <UIComponent title="Window opened" value={value} icon={faWindowMaximize} totalUI={indvTask} key={index}></UIComponent>
                    )
                    case "WINDOW_UNFOCUS":
                    return (
                      <UIComponent title="Window unfocus" value={value} icon={faWindowMaximize} totalUI={indvTask} key={index}></UIComponent>
                    )
                  case "WINDOW_CLOSE":
                    return (
                      <UIComponent title="Window closed" value={value} icon={faWindowMaximize} totalUI={indvTask} key={index}></UIComponent>
                    )
                    case "MANATEE":
                      return (
                        <UIComponent title="Manatee" value={value} icon={faRobot} totalUI={indvTask} key={index}></UIComponent>
                      )
                  default:
                      return null
                }
            })}
        </div>
    </div>
  )
}
