import image from 'assets/images/partner.jpg';
import { Link } from 'react-router-dom';

const Section8 = () => {
  return <section className='mb-16 px-4 py-24 bg-blue-950'>
    <div className='max-width-container flex'>
      <div className='flex-1 flex flex-col justify-center'>
        <h3 className='text-5xl font-bold mb-8 text-white'>Your Partner For Growth</h3>

        <p className='pb-6 text-white text-lg'>Merin Entertainment has its goal of being one of the leading companies in Nepal within a year of its establishment. As the people’s attraction and need towards new technology and Brand Promotion and awareness is flourishing, Merin Entertainment is making its mind and being prepared to grab this opportunity to achieve its target. </p>

        <div>
          <Link to={'/contact'}>
            <button className="hover:bg-blue-600 border-solid border-[1px] border-white rounded-md px-6 py-2 text-white text-lg bg-blue-950">
              Become our partner
            </button>
          </Link>
        </div>
      </div>

      <div className='flex-1 mobile:hidden laptop:flex justify-center'>
        <img src={image} className='w-full max-w-[400px] rounded-full' alt='logo' />
      </div>
    </div>
  </section>
}

export default Section8;