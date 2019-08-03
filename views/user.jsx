var React = require("react");
var Layout = require("./layouts/layout");
var ItemsList = require("./components/items-list");

var sha256 = require('js-sha256');
var SALT = 'bonk';


class Home extends React.Component {
  render() {
    let cookies = this.props.cookies;
    let currentDate = new Date().toISOString().substring(0, 10);

    return (
        <Layout cookies={cookies}>
            <div className="row mainwrapper">
                <div className="col col-lg-10 offset-lg-1 col-sm-12 col-12">
                    <div className="col-12 user-wrapper">
                        <p>user dashboard here</p>
                        <a href={"/"+cookies.userid+"/settings"}>Settings</a>
                    </div>



                </div>
            </div>
        </Layout>


    );
  }
}

module.exports = Home;