import BannerImg from '../../assets/img3.jpg'

function Banner() {

    return (
        <>
            <div className='w-full h-[25rem] relative'>
                <img src={BannerImg} alt="banner"
                    className='h-full w-full'
                />

                <div className='absolute top-2 left-0 right-0 mx-auto w-[20rem]'>
                    <div className='flex flex-col gap-4'>
                        <div className='font-semibold text-5xl text-white'>
                            Crypo Tracker
                        </div>

                        <div className='font-semibold text-sm text-white text-center'>
                            Get all info regarding crypo-currencies
                        </div>

                    </div>

                </div>
            </div>
        </>
    )

}

export default Banner;