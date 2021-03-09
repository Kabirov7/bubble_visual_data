// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/circle-packing
import {ResponsiveBubble} from '@nivo/circle-packing'
import React from "react";
import "../App.css"
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

// const ddd =

const MyResponsiveBubble = ({root /* see root tab */}) => (

		<ResponsiveBubble
			style={{width: "100%", height: "100%"}}
			root={root}
			margin={{top: 20, right: 20, bottom: 20, left: 20}}
			identity="name"
			value="loc"
			colors={{scheme: 'nivo'}}
			padding={3}
			labelTextColor={{from: 'color', modifiers: [['darker', 0.8]]}}
			borderWidth={1}
			// borderColor={{from: 'color'}}
			defs={[
				{
					id: 'lines',
					background: 'none',
					color: 'inherit',
					spacing: 5
				}
			]}
			fill={[{match: {depth: 1}, id: 'lines'}]}
			animate={false}
			motionStiffness={40}
			motionDamping={3}
		/>
)

export default MyResponsiveBubble;