import Settings from '../components/Settings';
import CharacterForm from '../components/CharacterForm';


function Campaign() {

  // const Dashboard = () => {
  //   const [authenticated, setauthenticated] = useState(null);
  //   useEffect(() => {
  //     const loggedInUser = localStorage.getItem("authenticated");
  //     if (loggedInUser) {
  //       setauthenticated(loggedInUser);
  //     }
  //   }, []);
  
  //   if (!authenticated) {
  //   // Redirect
  //   } else {
  return (
    <div className="content has-text-centered">
      <h1 className="title">Campaign Details</h1>
      <p className="subtitle is-6 pt-1">Viewing campaign: {}</p>
      <div className="columns">
        <Settings />
        <div className="column">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fugiat reiciendis unde hic non, eveniet nulla porro quo, corrupti tempora aperiam aspernatur tenetur, dolorum voluptatibus ea ipsa aliquam. Minima, non.</p>
        </div>
        {/* <div className='column'>
         Campaign creation form here
        </div> */}
      </div>
    </div>
  );
};

export default Campaign;
