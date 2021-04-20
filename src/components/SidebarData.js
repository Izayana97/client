import React from  'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
    {
        title: 'Historial',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
   
   
    {
        title: 'Calificaciones',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Cursos',
        path: '/curso-estudiante',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Perfil',
        path: '/',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messager',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
   
]