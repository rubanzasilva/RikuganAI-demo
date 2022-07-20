import React from 'react'
import { FaBars } from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'DataSources',
        path:'/DataSources',
        icon: <FaBars/>,
        cName:'nav-text'
    },
    {
        title:'Data Management',
        path:'/DataManagement',
        icon: <FaBars/>,
        cName:'nav-text'
    },
    {
        title:'Visualization',
        path:'/Visualization',
        icon: <FaBars/>,
        cName:'nav-text'
    },
    {
        title:'Use Cases',
        path:'/UseCases',
        icon: <FaBars/>,
        cName:'nav-text'
    },
    {
        title:'Admin',
        path:'/Admin',
        icon: <FaBars/>,
        cName:'nav-text'
    },
    {
        title:'HomePage',
        path:'/HomePage',
        icon: <FaBars/>,
        cName:'nav-text'
    }


]

