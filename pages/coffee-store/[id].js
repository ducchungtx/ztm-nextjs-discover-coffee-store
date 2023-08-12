import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

function CoffeeStore() {
  const router = useRouter();
  const { id } = router.query

  return (
    <div>
      CoffeeStore {id}
      <Link href={"/"}>
        <a>Back to home</a>
      </Link>
      <Link href={"/coffee-store/dynamic"}>
        <a>Go to page dynamic</a>
      </Link>
    </div>
  )
}

export default CoffeeStore