import React from 'react';
import {Button} from 'react-bootstrap';

class LikeButton extends React.Component {

    state = {
        liked: true
    }

    updateLike = () => {
        this.setState(prevState => ({
            liked: !prevState.liked
        }))
        console.log(this.props.movieId)
    }

    render() {
        return (
            <div>
                <Button className="btn" variant="dark" onClick={this.updateLike} id={this.props.movieId}>{this.state.liked ? "Liked" : "Unliked"}</Button>
            </div>
        )
    }
}

export default LikeButton;