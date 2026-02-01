import { Button } from "../components/ui/button";
import Image from "next/image"; 

export default function Home() {


  return (
    <main className="flex flex-col justify-center items-center p-5">
      <section className="flex flex-col  pt-4 max-sm:mx-4 max-w-4xl mx-auto">
          <h2 className="font-bold text-6xl font-serif ">
            Events you can trust,
            <br/>
            Tickets that work</h2>
      
          <p className="font-semibold text-slate-800 pt-5 text-2xl font-sans">
            Dynamic QR codes refresh every 30 seconds to stop 
            fraud before it starts. <br/>
            Buy instantly with MTN or Airtel, no account needed.</p>
            <div className="pt-8 flex  gap-5">
                <Button className={'rounded-none p-6 cursor-pointer font-bold text-white text-2xl'}
                >Buy</Button>
                <Button className={'rounded-none p-6  cursor-pointer hover:bg-slate-400 hover:outline font-bold text-black text-2xl bg-slate-200 outline-black outline-2'}>
                  Learn</Button>    
            </div>
            <div className="pt-5 w-full">
              <Image className="object-fit rounded-3xl" src={'/event2.jpeg'} height={300} width={850} alt='ticket-image'/>
            </div>
      </section>

      <section className="flex justify-center items-center pt-8 max-sm:mx-4">
            <h5 className="font-bold font-sans text-2xl "> Trusted by Kampala's best event organizers.</h5>
      </section>
      
    </main>
  );
}
