import { SignIn } from "@clerk/nextjs";


const page = () => {
  return (
    <main className="flex justify-center items-center mt-8">
      <SignIn /> 
    </main  >
  )
}

export default page
