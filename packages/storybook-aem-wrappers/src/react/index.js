import React, { Component } from "react";

export default class Wrapper extends Component {
    constructor(props) {
        super();
        this.getMarkup.bind(this);
        this.getClasses.bind(this);

        this.state = {
            html: props.html || null,
            classes: this.getClasses(props)
        };
    }

    getMarkup(prop) {
        return { __html: prop };
    }

    async componentDidMount() {
        if (this.props.contentPath) {
            let url = this.props.contentPath;
            if (url.indexOf(window.location.origin) === -1) url = `${window.location.origin}${url}`;
            if (url.indexOf('?wcmmode=disabled') === -1) {
                if (!url.endsWith('.html') || url.indexOf('.html') === -1) url += '.html';
                url += '?wcmmode=disabled';
            }
            const response = await fetch(url);
            const html = await response.text();
            this.setState({ html: html });
        }
        if (this.props.didMountCallback && typeof this.props.didMountCallback === 'function') {
            this.props.didMountCallback();
        }
    }

    getClasses(props) {
        let classes = [];
        if (props !== undefined) {
            if (props.classes) classes.push(props.classes);
            if (props.grid) classes.push(props.grid);
            if (props.gridTablet) classes.push(props.gridTablet);
            if (props.gridPhone) classes.push(props.gridPhone);
            if (props.styleSystem) classes.push(props.styleSystem);
        }
        return classes.join(' ');
    }

    render() {
        let classes = this.getClasses(this.props);
        if (this.state.html === null) return <div className={classes}>Loading...</div>;
        else return (
            <div className={classes} dangerouslySetInnerHTML={this.getMarkup(this.state.html)} />
        );
    }
}
