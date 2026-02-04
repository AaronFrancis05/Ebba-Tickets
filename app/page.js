import { Button } from "@/components/ui/button";
import { partners } from "@/data/constants";
import { PricingTable } from "@clerk/nextjs";
import Image from "next/image"; 

export default function Home() {


  return (
    <main className="flex flex-col justify-center items-center p-5">
        <div className="rounded-4xl p-4 bg-purple-600  outline-2 outline-purple-800 text-white font-semibold max-w-lg w-full flex justify-center items-center">
        <p className="font-bold">Trusted by 1000+ event organizers in Uganda</p>
        </div>
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
              <Image className="object-fit rounded-3xl" src={'/images/event2.jpeg'} height={300} width={850} alt='ticket-image'/>
            </div>
      </section>

      <section>
      <div className="flex justify-center items-center pt-8 max-sm:mx-4">
            <h5 className="font-bold font-sans text-2xl "> Trusted by Kampala's best event organizers.</h5>
      </div>
      <div className="mt-5 flex gap-5 bg-amber-700 rounded-4xl p-3">
        {partners.map((partner)=>
        <div key={partner.id} className="flex justify-center items-center">
          <Image src={partner.icon} width={70} height={70} alt={partner.name}/>
          <p className="pl-3 font-bold text-white">{partner.name}</p>
        </div>)}
      </div>
      </section>

      <section className="w-full max-w-6xl pt-16 flex">

        <PricingTable />
      </section>
      
    </main>
  );
}
