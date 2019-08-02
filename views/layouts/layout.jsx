var React = require('react');
class Layout extends React.Component {
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
            <nav className="navbar navbar-expand-lg sticky-top d-print" id="navbar">

                <div className="dropdown col-4">
                    <button className="btn btn-primary dropdown-toggle float-left" type="button" id="dropdownAccButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account</button>
                    <div className="dropdown-menu" aria-label="dropdown-menu">
                        <form className="px-4 py-3">
                            <div className="form-group">
                                <input type="text" className="form-control" name="username" placeholder="Username"/></div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Password"/></div>
                            <button type="submit" className="btn btn-success w-50" method="POST" formAction="/register">Register</button>
                            <button type="submit" className="btn btn-primary w-50" method="GET" formAction="/login">Login</button>
                        </form>
                        <div className="dropdown-divider"/>
                        <div className="px-4 py-3">
                            <a href="/logout" className="btn btn-link">Log out</a></div>
                    </div>
                </div>

                <a className="navbar-brand col offset-1" href="/items/">
                    <img src="./dollar.png" width="40" height="40"
                         className="d-inline-block align-top mr-3" alt=""/>Vaults</a>
            </nav>



            <div className="container-fluid my-5">
                {this.props.children}
            </div>


            <script src="./script.js"/>
            </body>
            </html>
        );
    }
}

module.exports = Layout;