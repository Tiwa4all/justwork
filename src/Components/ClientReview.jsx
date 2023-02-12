import './Clientreview.css'
import Carousel from "react-elastic-carousel";
import ClientItem from './ClientItem';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    // { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4 },
  ];

const ClientReview = () => {
  return (
    <div className='clientcard'>
        <h1 className='clientheading'>See Our Client's Review</h1>
        <Carousel className="client" enableAutoPlay autoPlaySpeed={17000}  enableInfiniteLoop breakPoints={breakPoints}>
            <ClientItem>
                <div className="cardall">
                    <div className='card'>
                        <h1 className='punct'>"</h1>
                        <p className='content'>Being a techie, I have worked with several technology companies but 
                                Pushtechn Ltd. has proven outstanding. Well-trained staff 
                                with good customer service and adherence to project deadlines.
                        </p>
                        <h1 className='name'>Oluwatimilehin Wahab</h1>
                        <p className='company'>Meta Company</p>
                    </div>
                </div>
            </ClientItem>
            <ClientItem>
                <div className="cardall">
                    <div className='card'>
                        <h1 className='punct'>"</h1>
                        <p className='content'>Being a techie, I have worked with several technology companies but 
                                Pushtechn Ltd. has proven outstanding. Well-trained staff 
                                with good customer service and adherence to project deadlines.
                        </p>
                        <h1 className='name'>Bello Maryam</h1>
                        <p className='company'>Goldentech Company</p>
                    </div>
                </div>
            </ClientItem>
            <ClientItem>
                <div className="cardall">
                    <div className='card'>
                        <h1 className='punct'>"</h1>
                        <p className='content'>Being a techie, I have worked with several technology companies but 
                                Pushtechn Ltd. has proven outstanding. Well-trained staff 
                                with good customer service and adherence to project deadlines.
                        </p>
                        <h1 className='name'>Okafor Tochukwu</h1>
                        <p className='company'>SoundCity Company</p>
                    </div>
                </div>
            </ClientItem>
            <ClientItem>
                <div className="cardall">
                    <div className='card'>
                        <h1 className='punct'>"</h1>
                        <p className='content'>Being a techie, I have worked with several technology companies but 
                                Pushtechn Ltd. has proven outstanding. Well-trained staff 
                                with good customer service and adherence to project deadlines.
                        </p>
                        <h1 className='name'>Olaide Peter</h1>
                        <p className='company'>Gtech Company</p>
                    </div>
                </div>
            </ClientItem>
        </Carousel>
    </div>
  )
}

export default ClientReview
