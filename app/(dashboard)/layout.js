
export default function RootLayout({ children }) {
  return (
   
      <section className="bg-purple-950 flex ">
         <div className="h-screen w-[290px] p-4">
            <h3 className="text-2xl font-bold text-white">Ebba Tickets</h3>
         </div>
          <div className="mt-8 bg-white w-full rounded-tl-4xl p-5 min-h-[calc(100vh-5vh)]">
            {children}
          </div>
      </section>
  );
}
