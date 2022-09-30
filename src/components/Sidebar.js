import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


export default function Sidebar() {
  return (
    <div>
      <Card body className='sidebar-card mt-4'>
        <Nav>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/">New Prediction</Nav.Link>
                <Nav.Link as={NavLink} to="predictions/today">Today's Weather</Nav.Link>
                <Nav.Link as={NavLink} to="predictions">All Predictions</Nav.Link>
             
            </Nav.Item>
        </Nav>
        </Card>
    </div>
  )
}

