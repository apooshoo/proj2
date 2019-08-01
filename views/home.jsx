var React = require("react");
var Layout = require("./layouts/layout");
var ItemsList = require("./components/items-list");

var sha256 = require('js-sha256');
var SALT = 'bonk';


class Home extends React.Component {
  render() {
    let itemsList = this.props.itemsData;
    let currentDate = new Date().toISOString().substring(0, 10);
    console.log("CURRENT DATE:", currentDate)

    // let default_due_date = item.due_date.toISOString().replace(/T[\S\s]+/,'');
    // console.log(due_date_date)

    return (
        <Layout>
            <div className="row mainwrapper">
                <div className="col col-lg-2 offset-lg-1 col-sm-2 col-2 left-col">
                    <div className="position-fixed">
                        <form method="GET" action="/items/sort">
                            <div className="form-group">
                                <select className="form-control" name="parameter" id="sort-parameter">
                                    <option selected disabled>Sort by</option>
                                    <option value="name">Item Name</option>
                                    <option value="amount">Amount</option>
                                    <option value="creditor">Creditor</option>
                                    <option value="recurring">Recurring</option>
                                    <option value="due_date">Due Date</option>
                                    <option value="created_at">Date Created</option>
                                    <option value="updated_at">Date Updated</option>
                                </select>
                                <select className="form-control" name="order" id="sort-order">
                                    <option selected disabled>Order by</option>
                                    <option value="DESC">Descending</option>
                                    <option value="ASC">Ascending</option>
                                </select>
                                <button className="btn btn-primary" type="submit">Sort</button>
                            </div>
                        </form>

                        <p>left col</p>

                    </div>
                </div>
                <div className="col col-lg-8 col-xs-10 right-col scrollit">
                    <div className="card my-1">
                        <div className="card-header text-white bg-primary">Create Item Card
                        </div>
                        <div className="card-body bg-light px-4 py-4">
                            <form method="POST" action="/items/new">
                                <input type="text" className="card-input form-control w-50" name="name" placeholder="Input name of item"/>
                                <input type="text" className="card-input form-control w-50" name="amount" placeholder="Input amount"/>
                                <input type="text" className="card-input form-control w-50" name="creditor" placeholder="Input name of creditor"/>
                                <div className="checkbox">
                                  <label>
                                    <input type="checkbox" name="recurring" data-toggle="toggle"/>
                                    Check this box for monthly payments
                                  </label>
                                </div>
                                <input type="date" className="card-input form-control w-50" name="due_date" defaultValue={currentDate}/>
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