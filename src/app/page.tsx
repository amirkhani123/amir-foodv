import HomePageT from "@/components/templates/HomePageT";


export default async  function Home() {
   const res= await fetch("https://json-server-beta-three.vercel.app/food",{
    cache:"force-cache"
   });
   const data=await res.json();
  return (
  <HomePageT data={data}/>
  );
}
