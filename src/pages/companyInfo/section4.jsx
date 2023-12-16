import ceo from 'assets/images/ceo.jpg';

const Section4 = () => {

  const data = [
    {
      id: "1",
      name: "Gobin Gurung",
      position: "Chief Executive Officer",
      image: ceo,
    },
    // {
    //   id: "2",
    //   name: "Harry Potter",
    //   position: "Director",
    //   image: image,
    // },
    // {
    //   id: "3",
    //   name: "Harry Potter",
    //   position: "Director",
    //   image: image,
    // },
  ]

  return <section className="mb-16 py-16">

    <div className="max-width-container px-4">
      <div className="flex mobile:flex-col laptop:flex-row">
        <h2 className="h2 flex-1 laptop:text-6xl mobile:text-5xl font-semibold leading-normal mb-10">Leadership & Teams
        </h2>

        <p className="p flex-1 text-xl">A vision can come from one man but the implementation has to be from a Visionary Team.</p>
      </div>

      <div className="grid mobile:grid-cols-1 laptop:grid-cols-4 gap-3">
        {
          data.map(el => <div key={el.id} className="rounded-lg shadow-xl overflow-hidden">
            <img src={el.image} alt={el.name + el.id} className="w-full mobile:h-64 laptop:h-45 object-cover" />
            <div className="p-4">
              <p className="p font-semibold text-xl">{el.name}</p>
              <p className="text-md">{el.position}</p>
            </div>
          </div>)
        }
      </div>


    </div>

  </section>
}
export default Section4;