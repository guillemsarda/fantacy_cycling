import React from 'react'
import './userItem.scss'

function userItem({ user, topScore, self }) {
  const persent = (user.score * 85) / topScore
  const nameClass = !self ? 'user_item_name' : 'user_item_myName'
  return (
    <div className="league_page">
      <div className="road">
        <div
          className="road_rider_image"
          style={{ transform: `translate(${persent || 0}vw, 10px)` }}
        />
        <div className="road_div_grey" />
        <div className="road_div_orange" />
        <div className="road_div_grey" />
      </div>
      <div className="user_item">
        <div className="user_item_score">
          <span className="small_text">pts: </span>
          {user.score}
        </div>
        <div className="user_item_name_team">
          <div className={nameClass}>{user.nickname}</div>
        </div>
      </div>
    </div>
  )
}

export default userItem
