var React = require("react");
class Start extends React.Component {
  render() {

    return (
        <html>
            <head>
                <title>Vaults</title>
                <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"  crossOrigin="anonymous"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"/>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="./style.css"/>
            </head>

            <body>
                <div className="card w-50 mx-auto start-card">
                    <form className="card-body px-4 py-3">
                        <h5 className="card-title font-weight-light">Welcome to Vaults!</h5>
                        <div className="form-group">
                            <input type="text" className="form-control" name="username" placeholder="Username"/></div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Password"/></div>
                        <button type="submit" className="btn btn-success w-50" method="POST" formAction="/register">Register</button>
                        <button type="submit" className="btn btn-primary w-50" method="GET" formAction="/login">Login</button>
                    </form>
                    <div className="dropdown-divider"/>
                    <div className="px-4 pb-3">
                        <a href="/logout" className="btn btn-link">Log out</a></div>
                </div>

            <script src="./script.js"/>
            </body>
            </html>


    );
  }
}

module.exports = Start;