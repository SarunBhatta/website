const Section7 = () => {
  return <section className='mb-16 px-4'>
    <div className="max-width-container">
      <h3 className='text-5xl font-bold mb-4'>Digital events</h3>

      <div className="flex mobile:flex-col laptop:flex-row">
        <div className="flex-1">
          <p className='pb-6'>Get access to all our upcoming events, past events, announcements, product demos, trainings and many more.</p>

          <button disabled className="hover:text-black border-solid border-[1px] border-blue-600 rounded-md px-4 py-1 text-blue-600 text-lg disabled:text-gray-400 disabled:border-gray-500">
            View all events
          </button>
        </div>
        <div className="flex-[0.5]">
          <p className="text-xl text-red-600 text-center my-4">No Events currently !</p>
        </div>
      </div>
    </div>

  </section>
}

export default Section7;