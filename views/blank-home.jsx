var React = require("react");
var Layout = require("./layouts/layout");

var sha256 = require('js-sha256');
var SALT = 'bonk';


class BlankHome extends React.Component {
  render() {
    console.log("rendering blank-home.jsx")
    let itemsList = this.props.itemsData;
    let cookies = this.props.cookies;
    let currentDate = new Date().toISOString().substring(0, 10);

    // let default_due_date = item.due_date.toISOString().replace(/T[\S\s]+/,'');
    // console.log(due_date_date)

    return (
        <Layout cookies={cookies}>
            <div className="row mainwrapper">
                <div className="col col-lg-6 offset-lg-3 col-12">
                    <div className="card my-1">
                        <div className="card-header">
                        <h5 className="font-weight-light">Hello, {cookies.username}! We couldn't find any items to show you, so go ahead and make one using the form right here!</h5>
                        </div>
                        <div className="card-body bg-light px-4 py-4">
                            <form method="POST" action="/items/new">
                                <input type="text" className="card-input form-control w-75 mx-auto" name="name" placeholder="Input name of item"/>
                                <input type="text" className="card-input form-control w-75 mx-auto" name="amount" placeholder="Input amount in dollars, eg. 1.23"/>
                                <input type="text" className="card-input form-control w-75 mx-auto" name="creditor" placeholder="Input name of creditor"/>
                                <div className="checkbox w-75 mx-auto mt-2">
                                  <label className="font-weight-light">
                                    <input type="checkbox" name="recurring" data-toggle="toggle"/>
                                    Check this box for monthly payments
                                  </label>
                                </div>
                                <div className="w-75 mx-auto"><span className="font-weight-light">Due Date:</span></div>
                                <input type="date" className="card-input form-control w-75 mx-auto" name="due_date" defaultValue={currentDate}/>
                                <div className="w-75 mx-auto mt-2">
                                    <button className="btn btn-primary" type="submit">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <script src="./script.js"></script>
        </Layout>


    );
  }
}

module.exports = BlankHome;