var React = require("react");
var Layout = require("./layouts/layout");
var ItemsList = require("./components/items-list");

var sha256 = require('js-sha256');
var SALT = 'bonk';


class Home extends React.Component {
  render() {
    let itemsList = this.props.itemsData;

    return (
        <Layout>
            <div className="row mainwrapper">
                <div className="col col-lg-3 offset-lg-2 left-col">
                    <p>LEFT COL</p>
                </div>
                <div className="col col-lg-6 right-col">
                    <div className="card my-1">
                        <div className="card-header text-white bg-primary">Create Item Card
                        </div>
                        <div className="card-body bg-light px-2 py-2">
                            <form method="POST" action="/create">
                                <input type="text" className="card-input form-control w-50" name="name" placeholder="Type name of item"/>
                                <input type="text" className="card-input form-control w-50" name="amount" placeholder="Type amount"/>
                                <input type="text" className="card-input form-control w-50" name="recurring" placeholder="Type recurring or not"/>
                                <div className= "d-flex justify-content-center">
                                    <input type="date" className="card-input form-control w-50" name="due_date"/>
                                </div>

                                <button className="btn btn-primary" type="submit">Create</button>
                            </form>
                        </div>
                        <ItemsList itemsList={itemsList}></ItemsList>
                    </div>
                </div>
            </div>
            <script src="./script.js"></script>
        </Layout>


    );
  }
}

module.exports = Home;
// <QuotesList quotesList={quotesList}></QuotesList>