'use client'

import React from 'react'

const Button = () => {
  return (
    <div>
        <button className="btn btn-primary" onClick={() => {
            console.log('Clicked')
        }}>
            Add to Cart
        </button>
    </div>
  )
}

export default Button