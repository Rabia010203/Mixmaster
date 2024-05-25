import React from 'react'
import ErrorWrapper from "../assets/wrappers/ErrorPage"
import logo from "../assets/not-found.svg"
const ErrorPage = () => {
  return (
    <ErrorWrapper>
    <div>
    <div>
    <img src={logo} alt=""/>
    </div>
      
      <h3>Sorry, The page You are currently lloking for is n't availbale</h3>
      <p>ikkkk</p>
      <a href="/">Go Home</a>
      </div>
    </ErrorWrapper>
  )
}

export default ErrorPage
