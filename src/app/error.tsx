"use client"
function Error({
    reset,
  }: {
    reset: () => void
  }) {
  return (
    <div className="flex items-center justify-center mt-12 font-normal text-2xl flex-col">
        <h1>Not Connect To Server 🥲 </h1>
        <button onClick={()=>reset()} className="p-1 px-2 text-white bg-green-500 rounded-lg mt-6 my-hover hover:bg-white hover:text-green-500">Try Again</button>
    </div>
  )
}

export default Error