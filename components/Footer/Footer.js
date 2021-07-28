import React from "react"
import { FaTwitter } from 'react-icons/fa'
import { FaSlack } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

export default function Footer() {
	return (
		<footer id="footer">
			Social platforms:
			<span className="inner-wrapper">
				<a href="https://twitter.com/AWSPunjab" target="_blank"><FaTwitter /></a>
				<a href="https://join.slack.com/t/aws-user-group-punjab/shared_invite/zt-sb9mehdf-oBnMehf5J0GhVhlr2RB3hg" target="_blank"><FaSlack /></a>
				<a href="https://www.youtube.com/channel/UCGCPM0wWeCtTQchbiQ1aGEQ" target="_blank"><FaYoutube /></a>
			</span>
			<style jsx>{`
				footer {
					margin: 4rem 0 2rem;
					text-align: center;
				}

				footer a {
					padding: 0 10px;
					display: inline-block;
					text-decoration: none;
				}
				.inner-wrapper {
					position: relative;
					top: 3px;
				}
			`}</style>
		</footer>
	)
}
