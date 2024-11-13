import HomePageT from "@/components/templates/HomePageT";


export default async  function Home() {
   const res= await fetch("http://localhost:3100/food",{
    cache:"force-cache"
   });
   const data=await res.json();
  return (
  <HomePageT data={data}/>
  );
}
