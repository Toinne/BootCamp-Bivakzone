import React from 'react';
import {Navbar, Nav}  from 'react-bootstrap';
import {withLocalize, Translate} from 'react-localize-redux';
import globalTranslations from '../data/language.json';
import { renderToStaticMarkup } from "react-dom/server";
import LanguageToggle from './LanguageToggle.jsx';

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.props.initialize({
            languages:[
                {name: "English", code: "en"},
                {name: "Dutch", code: "du"},
                {name: "French", code: "fr"} 
            ],
            translation: globalTranslations,
            options:{renderToStaticMarkup}
        });

        this.props.addTranslation(globalTranslations)
    }
    
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/"><Translate id="menu.title">Bivouac Zone</Translate></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/filter">Filter</Nav.Link>
                    <Nav.Link href="/favorite">Favorites</Nav.Link>
                      <LanguageToggle />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
};

export default withLocalize(Menu);