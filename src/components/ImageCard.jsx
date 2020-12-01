import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { state: 0}

		this.imageRef = React.createRef();
	}

	componentDidMount() {
		console.log(this.imageRef);
	}

	setSpans() {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 150);

		this.setState({spans});
	}


	render () {
		return (
			<img ref={this.imageRef} src={this.props.image.urls.regular} alt={this.props.image.description} key={this.props.image.key} />
		)
	}
}

export default ImageCard;