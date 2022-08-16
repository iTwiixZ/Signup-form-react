import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../src/styles/index.scss";
import Form from "./components/Form";
function App() {
  return (
    <div className="container">
      <div className="row">
      {/* Text  */}
      <div className="col-sm-6 mt-5 d-flex flex-column justify-content-center">
        <h1 className="text-white">Learn to code by watching others</h1>
        <p className="text-white">
          See how experimented developers solve problems in real time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable
        </p>
      </div>
      <div className="col-sm-6">
        <div className="try-it"><p className="text-white">Try it free days then $20/mo. thereafter</p></div>
        <div className="mt-5">
          <Form/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
