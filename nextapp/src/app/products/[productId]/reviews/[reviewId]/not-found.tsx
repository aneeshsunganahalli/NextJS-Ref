"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathName = usePathname()
  const productId = pathName.split("/")[2]
  const reviewId = pathName.split("/")[4]  // To get params, since you get send props into NotFound
  return (
    <div>
      <h2>Review {reviewId} for product {productId} not found</h2>
    </div>
  )
}
