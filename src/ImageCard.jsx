import "./ImageCard.css";
import React from "react";
import PropTypes from "prop-types";

class ImageCard extends React.Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
    };
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef(); // createRef() is a method that creates a reference to a DOM element
    }
    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans); // addEventListener() is a method that adds an event listener to a DOM element
    }
    setSpans = () => {
        const height = this.imageRef.current.clientHeight; // clientHeight is a property that returns the height of an element
        const spans = Math.ceil(height / 10); // Math.ceil() is a method that rounds a number up to the next largest integer
        this.setState({ spans }); // setState() is a method that sets the state of a component
    };

    render() {
        const { src, desc } = this.props;
        console.log(this.props);
        return (
            <div className="imgcard">
                <div style={{ gridRowEnd: `span ${this.state.spans}` }}> {/* gridRowEnd is a property that specifies where to end an element in a grid layout */}
                    <img ref={this.imageRef} alt={desc} src={src} className="imgcard-img" /> {/* ref is a property that specifies a reference to a DOM element */}
                    <p>{desc}</p>
                </div>
            </div>
        );
    }

}

export default ImageCard