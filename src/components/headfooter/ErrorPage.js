import React from "react";
import './ErrorPage.css'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className="error-page">
      The page does not exist.
      <Link className="error-page-return" to="/">Return to Main Page</Link>
    </div>
  )
}