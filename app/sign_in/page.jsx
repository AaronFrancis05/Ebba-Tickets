'use client'
import {FaGithub} from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import {  useSession, getProviders, signIn } from 'next-auth/react'
import { useState, useEffect } from 'react'
export default function Sign_In() {
    const { data: session } = useSession()
    const router = useRouter()

    const [providers, setProviders] = useState(null)
    useEffect(() => {
        const GetProvider = async () => {
            const response = await getProviders();
            setProviders(response)
        }
        GetProvider()
    }, [])

    // Redirect if user is already logged in
    useEffect(() => {
        if (session?.user) {
            router.push('/');
        }
    }, [session, router]);
    return (
        <div className="bg-white text-gray-500 mt-20 max-w-96 mx-auto md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Welcome back</h2>
            <form>
                <input id="email" className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required />
                <input id="password" className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" required />
                <div className="text-right py-4">
                    <a className="text-blue-600 underline" href="#">Forgot Password</a>
                </div>
                <button type="submit" className="w-full mb-3 cursor-pointer bg-indigo-500 hover:bg-indigo-700 py-2.5 rounded-full text-white">Log in</button>
            </form>
            <p className="text-center mt-4">Don’t have an account? <a href="#" className="text-blue-500 underline">Signup</a></p>
            {/* {providers && Object.values(providers).map((provider) => <button key={provider.id} onClick={() => signIn(provider.id)} type="button" className="w-full cursor-pointer flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-black">
                <img className="h-8 w-8" src="/google.png" alt="googleFavicon" />
                Log in with Google
            </button>)}
            {providers && Object.values(providers).map((provider) => <button key={provider.id} onClick={() => signIn(provider.id)} type="button" className="w-full cursor-pointer flex items-center gap-2 justify-center mt-5 bg-white py-2.5 rounded-full text-black border border-gray-500/30">
                <img className="h-8 w-8" src="/github.png" alt="githubLogo" />
                Log in with Github
            </button>)} */}
            {providers?.google && (
                <button
                    key="google"
                    onClick={() => signIn(providers.google.id)}
                    type="button"
                    className="w-full cursor-pointer flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-black"
                >
                    <img className="h-8 w-8" src="/google.png" alt="googleFavicon" />
                    Log in with Google
                </button>
            )}

            {providers?.github && (
                <button
                    key="github"
                    onClick={() => signIn(providers.github.id)}
                    type="button"
                    className="w-full cursor-pointer flex items-center gap-2 justify-center mt-5 bg-white py-2.5 rounded-full text-black border border-gray-500/30"
                >
                    <img className="h-8 w-8" src="/github.png" alt="githubLogo" />
                    Log in with GitHub
                </button>
            )}
            
        </div>
    );
};