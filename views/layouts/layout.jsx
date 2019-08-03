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

                <div className="dropdown col-2">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdown-sort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort</button>
                    <div className="dropdown-menu" aria-label="dropdown-menu">
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
                    </div>

                </div>


                <div className="dropdown col-2">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdown-sort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Search</button>
                     <div className="dropdown-menu" aria-label="dropdown-menu">
                        <form method="get" action="/items/search">
                            <input className="form-control" type="search" name="search" placeholder="Search"/>
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>


                <a className="navbar-brand col offset-1" href="/items/">
                    <img src="./dollar.png" width="40" height="40" className="d-inline-block align-top mr-3" alt=""/>Vaults</a>
                <a href="/logout" className="btn btn-link">Log out</a>
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