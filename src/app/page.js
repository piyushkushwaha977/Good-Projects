'use client'

import useTheme from "../../hooks/useTheme";


export default function Home() {
  const { isDark , setIsDark , user, SetUser} = useTheme();

  return (
 <div className=" flex justify-center items-center  ">
   <div className=" ">
      <h2 className=" dark:text-fuchsia-700 dark:text-5xl text-amber-300 text-7xl"> Welcome {user.name}</h2>
  <button 
  className=" border-red-600 border-2 border-solid rounded-xl p-2 my-2 dark:border-b-blue-800"
  onClick={() => setIsDark(!isDark)}>
    ChangeTheme
  </button>
   </div>
 </div>
  );
}
