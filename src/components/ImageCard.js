import React from 'react';

class ImageCard extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {spans: 0}

        //React's ref
        //this is === document.querySelctor(object) in vanilla JS
        this.imageRef = React.createRef();
    }

    componentDidMount()
    {
        //this callback function listens for image to load (via network)
        this.imageRef.current.addEventListener('load', this.setSpans);
        //console.log(this.imageRef.current.clientHeight);
    }

    //callback function used by imageRef
    setSpans = () =>
    {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({spans}) 
    }

    render()
    {
        //destructure objects from parent's props
        const { description, urls } = this.props.image;

        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard;