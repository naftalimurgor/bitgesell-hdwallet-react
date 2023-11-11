import logo from './Icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-light">
        <div className="container">
          <a className="navbar-brand" href="https://bitgesell.ca/">
            <img
              src={logo}
              alt="Bootstrap"
              width={40}
              height={40}
            />
          </a>
          <div id="navbarNav">
            <ul className="navbar-nav" style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <li className="nav-item">
                <a className="nav-link" href="https://app.bglwallet.io/">
                  Official Bitgesell Wallet
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://bitgesell.ca/">
                  Visit Official Website
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/BitgesellOfficial">
                  GitHub
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://bitgesell-docs.netlify.app/">
                  Docs
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Block Explorer
                </a>
              </li>
            </ul>
          </div>
        </div>

      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-sm-10 mx-auto p-4 m-4">
            <div className="card p-2">
              <h2>Bitgesell HD Wallet Tool</h2>
              <p><strong>Important Notice</strong></p>
              <p>
                <b>
                  Please Note: This tool is designed exclusively for generating a mnemonic phrase for use with the official Bitgesell wallet
                </b>
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-sm-10 mx-auto">
            <div className="card p-4">
              <form action="">
                <div className="mb-3">
                  <div className="mx-auto p2 mt-2 mb-4">
                    <button className="btn btn-primary">Generate an HD Wallet Seed Phrase</button>
                  </div>
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Mnemonic phrase for Hierarchical Deterministic wallets:
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <div className="mx-auto p2 mt-2 mb-4">
                  <button className="btn btn-primary">Download Seedphrase</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 col-sm-10 mx-auto p-3">
            <h3>A Security Reminder</h3>
            <p>
              The mnemonic phrase is a crucial component of your wallet's security and recovery process. It is essential to use this tool responsibly and solely for the purpose of creating a mnemonic phrase that can be securely integrated into the official Bitgesell wallet.
            </p>
            <ul>
              <li>
                1. Keep your mnemonic phrase private and secure.
              </li>
              <li>
                2. Do not share it with anyone.
              </li>
              <li>
                3. Only use this tool on a trusted and secure device.
              </li>
            </ul>
            <p>Using the Bitgesell HD Wallet Tool ensures compatibility with the official Bitgesell wallet, providing you with a seamless and secure experience.
              If you have any questions or concerns, please refer to the official Bitgesell documentation or contact the support team.
            </p>
            <p><b> Thank you for choosing Bitgesell! </b></p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
