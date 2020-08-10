import React from 'react';
import Card from './Card'

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile} removeProfile={props.removeProfile}/>)}
	</div>
);

export default CardList