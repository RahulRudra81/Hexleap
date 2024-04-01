'use client'
import ThemeSwitch from "./ThemeSwitch";
import Collection from "./Collection";
import Sports from "./Sports";
export default function Home() {

  return (

    <div className="py-16 px-24  items-center flex flex-col gap-16 dark:bg-[#292b32] h-full">
      {/* theme switcher */}
      <div className=""> <ThemeSwitch/></div>
      {/* part 1 */}
      <Sports/>
      {/* Part 2  */}
      <Collection/>
      
    </div>
  );
}
