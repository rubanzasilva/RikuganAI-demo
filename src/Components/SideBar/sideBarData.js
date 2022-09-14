import React from 'react'
import { FaBars } from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title:'Home',
        path:'/homepage',
        icon: <AiIcons.AiFillHome/>,
        cName:'home-page-link'
    },
    {
        title:'Datasets',
        path:'/datasets',
        icon: <FaBars/>,
        cName:'datasets-link'
    },
    {
        title:'Data Management',
        path:'/datamanagement',
        icon: <FaBars/>,
        cName:'data-managment-link'
    },
    {
        title:'Visualization',
        path:'/visualization',
        icon: <FaBars/>,
        cName:'visualization-link'
    },
    {
        title:'Use Cases',
        path:'/usecases',
        icon: <FaBars/>,
        cName:'use-cases-link'
    },
    {
        title:'Admin',
        path:'/admin',
        icon: <FaBars/>,
        cName:'admin-link'
    },
    {
        title:'Log out',
        path:'/',
        icon: <FaBars/>,
        cName:'log-out-link'
    }


]

