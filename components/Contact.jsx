import React, { useRef } from "react";

const Contact = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    /* 
    Do something here !
    */
  };

  return (
    <div className="bg-cyan relative">
      <div className="relative mx-auto pt-10 pb-40 px-4 w-full max-w-7xl bg-cyan text-gray">
        {/* :BACKGROUND ILLUSTRATION */}
        <img
          src="https://fancytailwind.com/static/contact-us-illustration-a3d4e18e9b14fd0674942bfdb83bcdd1.svg"
          alt=" "
          className="absolute bottom-5 right-1/2 h-2/3 object-cover transform translate-x-1/2"
        />

        {/* :MAIN CONTAINER */}
        <div className="relative mx-auto max-w-3xl flex flex-col items-center">
          {/* ::Title Container */}
          <div className="text-center space-y-2">
            {/* :::title */}
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-wider">
              Desejas falar conosco?
            </h2>
            {/* :::text */}
            <p className="text-sm sm:text-base text-gray-500">
              Envie sua mensagem que iremos responder em breve
            </p>
          </div>

          {/* ::Contact Container */}
          <div className="mt-10 mx-auto w-full max-w-xl">
            <form
              action=""
              className="grid grid-cols-2 gap-y-6 gap-x-4"
              onSubmit={handleSubmit}
            >
              {/* ::::email input */}
              <div className="col-span-full">
                <label ref={emailRef} htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  className="form-input w-full block shadow-sm rounded border-gray-200 bg-gray-50 bg-opacity-90 text-base text-cyan placeholder-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 py-1 px-2"
                />
              </div>
              {/* ::::name input */}
              <div className="col-span-full sm:col-span-1">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome"
                  className="form-input w-full block shadow-sm rounded border-gray-200 bg-gray-50 bg-opacity-90 text-base text-cyan placeholder-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 py-1 px-2"
                />
              </div>
              {/* ::::phone input */}
              <div className="col-span-full sm:col-span-1">
                <label htmlFor="phone" className="sr-only">
                  Name
                </label>
                <input
                  ref={phoneRef}
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Telefone"
                  className="form-input w-full block shadow-sm rounded border-gray-200 bg-gray-50 bg-opacity-90 text-base text-cyan placeholder-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 py-1 px-2"
                />
              </div>
              {/* :::message */}
              <div className="col-span-full">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  ref={messageRef}
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  placeholder="Como podemos te ajudar?"
                  className="form-textarea resize-none w-full shadow-sm rounded border-gray-200 bg-gray-50 bg-opacity-90 placeholder-gray-300 focus:border-rose-500 focus:ring-rose-500 py-1 px-2 text-cyan"
                ></textarea>
              </div>
              {/* :::submit button */}
              <div className="col-span-full pt-5">
                <button
                  type="submit"
                  className="py-1.5 px-6 w-full sm:w-40 shadow-xl rounded bg-sky text-lg text-gray"
                >
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
