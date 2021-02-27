import React, {Component} from 'react'
import './FooterCSS.css'

class FooterComponent extends Component{
    render(){
        return(
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2021 @ Ming’sDiner</span>
            </footer>
        )
    }
}

export default FooterComponent