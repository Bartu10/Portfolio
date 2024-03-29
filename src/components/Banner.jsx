const Banner = () => {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-blueHeader px-6 py-2.5 sm:px-3.5 sm:before:flex-1">

    <div
      className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      aria-hidden="true"
    >
    </div>
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p className="text-sm leading-6 text-gray-900">
        <strong className="font-semibold">GeneriCon 2023</strong>
        <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
          <circle cx={1} cy={1} r={1} />
        </svg>
        Join us in Denver from June 7 – 9 to see what’s coming next.
      </p>
      <a
        href="#"
        className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      >
        Register now <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
    <div className="flex flex-1 justify-end">
      <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
        <span className="sr-only">Dismiss</span>
        X
      </button>
    </div>
  </div>
  );
}

export default Banner;