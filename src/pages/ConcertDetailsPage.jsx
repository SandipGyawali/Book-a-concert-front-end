import ItemDataPanel from '../components/ItemDataPanel';
import LeftButton from '../components/buttons/LeftButton';

let imgURL =
  'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
function ConcertDetailsPage() {
  return (
    // Div below need to be adjusted for thir CSS properties when integrating this component to the app
    //Right now its position is absolute so might intergere with other components
    <section className=" container flex flex-col w-full min-h-screen mx-0 my-0 bg-white">
      <article className=" flex flex-col md:flex-row md:justify-between m-2 p-2 ">
        <div className="flex items-center justify-center max-h-2/3 min-h-full md:w-3/4 border-2 bg-gray-100 rounded rounded-lg p-2 mb-2 md:mb-inherit">
          <img src={imgURL} alt="concert" className="rounded-lg max-h-full" />
        </div>

        <div className="container flex justify-between md:w-1/3">
          <ItemDataPanel />
        </div>
      </article>
      <LeftButton />
    </section>
  );
}

export default ConcertDetailsPage;
