// import InterviewCard from '@/components/InterviewCard'
// import { Button } from '@/components/ui/button'
// import { dummyInterviews } from '@/constants'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '@/firebase/client'

// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'

// const HomePage = () => {
//   return (
//     <>
//       <section className='card-cta'>
//         <div className='flex flex-col gap-6 max-w-lg'>
//           <h2>Get Interview-ready with AI-Powered Practice & Feedback</h2>
//           <p className='text-lg'>
//             Practice on real interview questions & get instant feedback
//           </p>
//           <Button asChild className='btn-primary'>
//             <Link href="/interview">Start an Interview</Link>
//           </Button>
//         </div>

//         <Image src="/robot.png" alt="robo-dude" width={400} height={400} className='max-sm:hidden' />
//       </section>

//       <section className='flex flex-col gap-6 mt-8'>
//         <h2>Your interviews</h2>
//         <div className='interviews-section'>
//           {dummyInterviews.map((interview) => (
//             <InterviewCard {...interview} key={interview.id} />
//           ))}
//         </div>
//       </section>

//       <section className='flex flex-col gap-6 mt-8'>
//         <h2>Take an Interview</h2>
//         <div className='interviews-section'>
//           <p>{dummyInterviews.map((interview) => (
//             <InterviewCard {...interview} key={interview.id} />
//           ))}</p>
//         </div>
//       </section>
//     </>
//   )
// }

// export default HomePage

"use client"

import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '@/lib/actions/auth.action'

const HomePage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)


  if (!isAuthenticated) {
    router.push('/sign-in');
  }


  // if (loading) {
  //   return <div>Loading...</div>
  // }

  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-ready with AI-Powered Practice & Feedback</h2>
          <p className='text-lg'>
            Practice on real interview questions & get instant feedback
          </p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image src="/robot.png" alt="robo-dude" width={400} height={400} className='max-sm:hidden' />
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your interviews</h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage