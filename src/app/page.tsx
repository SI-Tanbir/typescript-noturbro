

"use client"


import Message from "@/components/Message";
import { useState } from "react";


const Home: React.FC = () => {

  // let firstValue:number =[2,3,45]
  const firstValue: string = "hello world";
  // let firstValue:number =[2,3,45]
  // let firstValue:number =[2,3,45]


  const [userName, setUserName] = useState<string>('User')
  const [UserMessage, setUserMessage] = useState<string>("This is the messese")


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <h3>hello this is my first typescript practice</h3>







      <p>

        The value {firstValue} is of {typeof firstValue} type!
      </p>



      <Message name="Manny" message="this is cool" />



    </div>
  );
}

export default Home