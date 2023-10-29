// import React from 'react'
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

function Contact() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [successMessage, setSuccessMessage] = useState('')
const [loading, setLoading] = useState(false)
const [show, setShow] = useState(false)


const submit = ()=>{
  const data = {name, email, message}
  setLoading(true);
  const tokens = import.meta.env.VITE_API_KEY.replaceAll('"', '')

console.log(tokens)
  try {
    setLoading(true);

    const headers_ = {
        'Authorization': `Bearer ${tokens}`,
        'Content-Type': 'application/json'
    };
    axios.post('https://api.airtable.com/v0/appukcVCTvv9xgSow/contact',
        {
            fields:{
                name: name,
                email: email,
                message: message
            }
            },
             { headers: headers_ }
    )
        .then((resp) => {
            setName('')
            setEmail('')
            setMessage('') 
            setLoading(false);
            setSuccessMessage(<span className="text-grad2">Email sent successfully</span>)
            console.log(data)
            setShow(true)
            setTimeout(() => {setShow(false)}, 3000);

        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
            console.log(data)
            setSuccessMessage(<span className="text-grad1">Email not sent</span>)
       setShow(true)
        setTimeout(() => {setShow(false)}, 3000);
        })
} finally {
    setLoading(false);
}
}

  return (
    <Layout title="Contact">
      {/* <-- Container htmlFor demo purpose --> */}
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          

          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-6/12 lg:px-0">
              <form className="relative">
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-[2px] border-neutral-500 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 placeholder:text-neutral-500 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary focus:placeholder:opacity-5"
                    id="exampleInput90"
                    placeholder="Name"
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 text-opacity-0 peer-focus:text-opacity-100 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    htmlFor="exampleInput90"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-[2px] border-neutral-500 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 placeholder:text-neutral-500 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary focus:placeholder:opacity-5"
                    id="exampleInput91"
                    placeholder="Email address"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 text-opacity-0 peer-focus:text-opacity-100 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    htmlFor="exampleInput91"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-[2px] border-neutral-500 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 placeholder:text-neutral-500 dark:placeholder:text-neutral-200 focus:placeholder:opacity-5"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your message"
                    onChange={(e)=> setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 text-opacity-0 peer-focus:text-opacity-100 transition-all duration-200 ease-out  peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Message
                  </label>
                </div>
                
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white border-[2px] border-neutral-500 transition duration-150 ease-in-out hover:bg-neutral-600 hover:shadow-[0_4px_9px_-4px_#fff,0_4px_9px_-4px_#EEE] focus:bg-neutral-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  onClick={submit}
                >
                  Send
                </button>
                
            {loading &&    
    <div role="status" className="absolute w-full h-full top-0 flex items-center justify-center flex-col">
        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-grad2 animate-spin dark:text-gray-600 fill-grad1" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span className="">Loading...</span>
    </div>}

    {show &&  <div role="status" className="absolute w-[80%] h-[30%] top-[15%] left-[10%] rounded-lg flex items-center justify-center flex-col bg-white">
        {successMessage}
    </div>}

              </form>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12">
              <div className="">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className=" grow">
                      <p className="mb-2 font-bold dark:text-white">Phone</p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +234(818)8026726
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +234(704)3678597
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className=" grow">
                      <p className="mb-2 font-bold dark:text-white">Email</p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        omoniyi.success@gmail.com
                      </p>
                      {/* <p className="text-neutral-500 dark:text-neutral-200">
                wabjayconsult@gmail.com
                </p> */}
                    </div>
                  </div>
                </div>
                {/* <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                  </svg>
                </div>
              </div>
              <div className=" grow">
                <p className="mb-2 font-bold dark:text-white">Bug report</p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  bugs@example.com
                </p>
                <p className="text-neutral-500 dark:text-neutral-200">
                  +1 234-567-89
                </p>
              </div>
            </div>
          </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Contact;
