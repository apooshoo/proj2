var React = require("react");
var Layout = require("./layouts/layout");

var sha256 = require('js-sha256');
var SALT = 'bonk';


class BlankHome extends React.Component {
  render() {
    let itemsList = this.props.itemsData;
    let currentDate = new Date().toISOString().substring(0, 10);

    // let default_due_date = item.due_date.toISOString().replace(/T[\S\s]+/,'');
    // console.log(due_date_date)

    return (
        <Layout>
            <div className="row mainwrapper">
                <div className="col col-lg-8 offset-lg-3 col-xs-10 right-col scrollit">
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
                        <p>This acc has no items at all!</p>
                    </div>
                </div>
            </div>
            <script src="./script.js"></script>
        </Layout>


    );
  }
}

module.exports = BlankHome;