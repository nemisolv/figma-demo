import Button from '@components/Button';
import bgImage from '@assets/images/404.gif'; // Import the image
function Notification({ title, content, imgLink, titleBtn, linkBtn }) {
  return (
    <div
      id="page-not-found"
      className="relative bg-no-repeat bg-center !bg-white w-full"
      style={{ backgroundImage: `url(${imgLink || bgImage})` }}
    >
      <div className="text-center absolute bottom-[200px] flex flex-col gap-5 ">
        <h2 className="font-medium">{title || 'Notification '} </h2>
        <p>{content}</p>
        <Button to={linkBtn || '/'} primary>
          {titleBtn || 'Go to home'}
        </Button>
      </div>
    </div>
  );
}

export default Notification;
