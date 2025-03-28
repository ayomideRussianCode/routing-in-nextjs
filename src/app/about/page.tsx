"use client";

import {useRouter} from 'next/navigation';

function About() {
   const  router = useRouter();
   console.log(router);
   
  return (
    <h1>This is My About Page</h1>
  )
}

export default About