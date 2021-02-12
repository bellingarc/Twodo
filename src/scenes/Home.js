import React from 'react'
import {Layout, Menu, Breadcrumb} from 'antd'
import NavBar from '../components/common/NavBar'
import Head from '../components/home/Head'
import TodoList from '../components/home/TodoList'


function Home() {
    return(
        <Layout className="Layout">
            <NavBar />
            <Head />
            <TodoList />
        </Layout>
    )
}

export default Home