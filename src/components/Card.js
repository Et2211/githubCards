import React from 'react';

class Card extends React.Component {



	render() {
      const profile = this.props;
      console.log(this.props)
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} alt="profile" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
        <button onClick={() => this.props.removeProfile(profile.id)}>X</button>
    	</div>
    );
  }
}

export default Card