import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Container from './components/Container'
import IssuesManagement from './components/IssuesManagement'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'

const fetchIssues = async () => {

  const result = await fetch("/data.json")
  return result.json()
}


function App() {
  const fetchPromise = fetchIssues()



  return (
    <>
   <div className='bg-white'>
       <Navbar></Navbar>

      {/* Box design */}
      <Container>


        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <IssuesManagement fetchPromise={fetchPromise}></IssuesManagement>

        </Suspense>





      </Container >

      <Footer></Footer>
      <ToastContainer></ToastContainer>
   </div>
    </>
  )
}

export default App
