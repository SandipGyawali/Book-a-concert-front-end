import { useSelector, useDispatch } from 'react-redux';
import getConcert from '../redux/requests/getConcert';
import ItemDataPanel from '../components/ItemDataPanel';
import LeftButton from '../components/buttons/LeftButton';
import { useEffect } from 'react';

function ConcertDetailsPage() {
  const dispatch = useDispatch();
  const concert = useSelector((state) => state.concertDetails);
  
 //getConcert will be called with the id of the concert that is clicked on the ConcertsPage
  useEffect(() => {
    dispatch(getConcert(1));
  }, []);

  return (
    // Div below need to be adjusted for thir CSS properties when integrating this component to the app
    //Right now its position is absolute so might intergere with other components
    <section className=" container flex flex-col w-full min-h-screen mx-0 my-0 bg-white">
      <article className=" flex flex-col md:flex-row m-2 p-2 ">
        <div className="flex items-center justify-center h-2/3 border-2 bg-gray-100 rounded rounded-lg p-2 mb-2 md:mb-inherit">
          <img
            src={concert.img}
            alt="concert"
            className="rounded-lg max-h-full"
          />
        </div>

        <div className="container flex justify-between md:w-1/3">
          <ItemDataPanel concert={concert} />
        </div>
      </article>
      <LeftButton />
    </section>
  );
}

export default ConcertDetailsPage;
