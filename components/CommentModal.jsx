'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaComment } from 'react-icons/fa'

export default function CommentModal({ children }) {

    const [open, setOpen] = useState(false)

    return (

        <>
            <button className="flex items-center gap-2" onClick={() => setOpen(true)}>
                {children}
            </button>




            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/70 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#272320] border border-[#ACC156] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-full sm:w-full sm:max-w-lg sm:p-6">


                                    <button onClick={() => setOpen(false)} className="absolute top-2 right-2 text-white font-press-start-2p hover:text-red-500">X</button>


                                    <div>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black">
                                            <FaComment className="h-4 w-4 text-blue-600" />
                                        </div>
                                        <div className="mt-3 sm:mt-5">
                                            <Dialog.Title as="h3" className="text-base text-center font-semibold leading-6 font-press-start-2p text-lg mb-4 text-[#ACC156]">
                                                Add A Comment
                                            </Dialog.Title>
                                            <div className="mt-2 space-y-6">



                                                <div className="space-y-2">
                                                    <label htmlFor="username" className="text-left text-slate-300 pb-2 text-sm">Comment</label>
                                                    <textarea
                                                        className="block w-full autofill:bg-black rounded-md py-1.5 focus:bg-black active:bg-black ring-0 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-[#ACC156] border border-[#ACC156] bg-black text-white shadow-sm text-sm  sm:leading-6"
                                                        placeholder="Your comment"
                                                        rows="6"
                                                    />
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-black border border-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() => setOpen(false)}
                                        >
                                            Add Comment
                                        </button>
                                    </div>






                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </>
    )
}
